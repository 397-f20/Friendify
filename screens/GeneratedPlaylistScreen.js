import React, { useState, useEffect, useContext } from 'react';

import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import firebase from "../shared/firebase.js";
import GetPlaylist from '../spotifyQ/GetPlaylist.js';
import GetUserPlaylistsIds from "../spotifyQ/GetUserPlaylistsIds";
import getRandomSubarray from "../utils/getRandomSubarray";
import SongListWithFriend from "../components/SongListWithFriend";
import {Button, Card, TextInput} from 'react-native-paper';
import UserContext from '../utils/userContext';
import GetUserName from '../spotifyQ/GetUserName';

//We're getting a react warning with the textInput. maybe setting a value as undefined?
const GeneratePlaylistFormScreen = ({navigation, route}) => {
  const friends = route.params.friends;
  const chosenFriends = route.params.chosenFriends;
  const numSongs = route.params.numSongs;
  const [songs, setSongs] = useState([]);
  const [playlistName, setPlaylistName] = React.useState("");
  const db = firebase.firestore();
  const user = useContext(UserContext);
  const [added, setAdded] = React.useState(false);

  const getFriendsPlaylists = async (newfriends) => {
    let tempPlaylists = [];
    await Promise.all(newfriends.map(async (friend) => {
      var displayName = await GetUserName(friend.id);
      const newtemp = await GetUserPlaylistsIds(friend.id);
      let tupArr = newtemp.map( pl => {
       return [pl, displayName.display_name]
      })
      tempPlaylists = tempPlaylists.concat(tupArr);
    }));
    //console.log(tempPlaylists);
    let tempSongs = [];
    await Promise.all(tempPlaylists.map(async (tup) => {
      const newtemp = await GetPlaylist(tup[0])
      //console.log(newtemp);
      let tupSongs = newtemp.map( song => {
        return [song, tup[1]]
      })
      tempSongs = tempSongs.concat(tupSongs)
    }));
    //console.log(tempSongs);
    //const unique = new Set(tempSongs);
    //const uniqueData = [...unique];
    let newPlaylist = getRandomSubarray(tempSongs, numSongs);
    // console.log(newPlaylist);
    setSongs(newPlaylist);
  };

  const savePlaylist = (songs, name) => {
    const songIds = songs.map(songTup =>{
      return songTup[0]
    })
    const songsFromFriends = songs.map(songTup =>{
      return songTup[1]
    })
    db.collection('users').doc(user).update({
      playlists: firebase.firestore.FieldValue.arrayUnion({
        name: name,
        songs: songIds,
        fromFriends: songsFromFriends
      })
    }).then(()=> {
      setAdded(true);
    })
  }; 

  useEffect(() => {
      let newfriends = []
      for (let i = 0; i < chosenFriends.length; i++){
        if (chosenFriends[i]){
          newfriends.push(friends[i])
        }
      }
      getFriendsPlaylists(newfriends);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.cardCon}>
          <Card style={styles.card}>
            <Card.Content>
              <TextInput label="New Playlist Name"
                          placeholder="My Playlist"
              onChangeText={(value) => setPlaylistName(value)} ></TextInput>
              {(added) ? <Text>Added {playlistName}!</Text> : false}
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => savePlaylist(songs, playlistName)}>Save Playlist</Button>
            </Card.Actions>
          </Card>
        </View>
      <View style={styles.cardContainer}>
      {songs.length !== 0 ? <SongListWithFriend songs={songs}/> : <Text>Generating...</Text>}
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'left',
  },
  cardContainer: {
    flex: 1, 
    width: '80%',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
  },
  cardCon: {
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
  },
  });

export default GeneratePlaylistFormScreen;
