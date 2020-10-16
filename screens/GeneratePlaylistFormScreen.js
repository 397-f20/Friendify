import React, { useState, useEffect } from 'react';

import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import firebase from "../shared/firebase.js";
import GetPlaylist from '../spotifyQ/GetPlaylist.js';
import GetUserPlaylistsIds from "../spotifyQ/GetUserPlaylistsIds"
import getRandomSubarray from "../utils/getRandomSubarray"
import {Avatar} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';


const db = firebase.firestore();

const GeneratePlaylistFormScreen = ({navigation}) => {
  const [friends, setFriends] = useState([]);
  const [songs, setSongs] = useState([]);


  useEffect(() => {
    db.collection('friends').get().then(querySnapshot => {
      let newfriends = []
      querySnapshot.forEach(doc => {
        let newfriend = doc.data()
        newfriends.push(newfriend.name)})
      setFriends(Object.values(newfriends))
      getFriendsPlaylists(newfriends);
    })
  }, []);

  const getFriendsPlaylists = async (newfriends) => {
    let tempPlaylists = [];

    await Promise.all(newfriends.map(async (friend) => {
      const newtemp = await GetUserPlaylistsIds(friend)
      tempPlaylists = tempPlaylists.concat(newtemp)
    }));

    let tempSongs = [];
    await Promise.all(tempPlaylists.map(async (id) => {
      const newtemp = await GetPlaylist(id)
      tempSongs = tempSongs.concat(newtemp)
    }));
    
    let newPlaylist = getRandomSubarray(tempSongs, 15);
    setSongs(newPlaylist);
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
      {songs.length !== 0 ? <SongList songs={songs}/> : <Text>Generating...</Text>}
      </View>
    </SafeAreaView>
  );
};

const SongList = ({songs}) => {
  const savePlaylist = (songs, name) => {
    db.collection('Playlists').add({
      playlistName: name,
      songs: songs,
    })
  }; 
  const [playlistName, setPlaylistName] = React.useState("");
 
  return(
    <View style={styles.save}>
            <View style={styles.cardCon}>
        <Card style={styles.card}>
          <Card.Content>
            <TextInput label="New Playlist Name"
            onChangeText={(value) => setPlaylistName(value)} ></TextInput>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => savePlaylist(songs, playlistName)}>Save Playlist</Button>
          </Card.Actions>
        </Card>
      </View>
      <ScrollView>
      {songs.map(song => <Song key={song} song={song} />)}
      </ScrollView>
    </View>
  )
}

const Song = ({song}) => {
  return(
  <TouchableOpacity
  style={styles.songContainer}>
  <Avatar.Image
      size={30}
      source={require('../assets/favicon.png')}
      style={styles.icon}
  />
  <Text style={styles.text}>
      {song}
  </Text>
  <Image
      style={styles.arrow}
      source={require('../CSSExports/Carrot_s.png')}
  />
</TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  save: {
    height: 300,
    justifyContent: 'flex-start',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'left',
  },
  songContainer: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    borderRadius: 20,
    height: 80,
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
    padding: 10,
},
  cardContainer: {
    flex: 1, 
    width: '80%',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
  },
  text: {
    color: '#707070',
    fontSize: 20,
},
icon: {
    marginRight: 30
},
arrow: {
    marginLeft: 'auto',
},
cardCon: {
  marginBottom: 20,
  width: '100%',
  justifyContent: 'center',
},
});

export default GeneratePlaylistFormScreen;
