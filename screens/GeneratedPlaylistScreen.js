import React, { useState, useEffect } from 'react';

import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import firebase from "../shared/firebase.js";
import GetPlaylist from '../spotifyQ/GetPlaylist.js';
import GetUserPlaylistsIds from "../spotifyQ/GetUserPlaylistsIds";
import getRandomSubarray from "../utils/getRandomSubarray";
import SongList from "../components/SongList";
import {Button, Card, TextInput} from 'react-native-paper';

const GeneratePlaylistFormScreen = ({navigation}) => {
  const [songs, setSongs] = useState([]);
  const [playlistName, setPlaylistName] = React.useState("");
  const db = firebase.firestore();

  const getFriendsPlaylists = async (newfriends) => {
    let tempPlaylists = [];
    await Promise.all(newfriends.map(async (friend) => {
      const newtemp = await GetUserPlaylistsIds(friend);
      tempPlaylists = tempPlaylists.concat(newtemp);
    }));

    let tempSongs = [];
    await Promise.all(tempPlaylists.map(async (id) => {
      const newtemp = await GetPlaylist(id) 
      tempSongs = tempSongs.concat(newtemp)
    }));
    let newPlaylist = getRandomSubarray(tempSongs, 15);

    setSongs(newPlaylist);
  };

  const savePlaylist = (songs, name) => {
    db.collection('Playlists').add({
      playlistName: name,
      songs: songs,
    })
  }; 

  useEffect(() => {
    db.collection('friends').get().then(querySnapshot => {
      let newfriends = [];
      querySnapshot.forEach(doc => {
        let newfriend = doc.data();
        newfriends.push(newfriend.name);
      });
      getFriendsPlaylists(newfriends);
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.cardContainer}>
      {songs.length !== 0 ? <SongList songs={songs}/> : <Text>Generating...</Text>}
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
