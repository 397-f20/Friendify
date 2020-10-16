import React, { useState, useEffect } from 'react';
import MyPlaylists from '../components/MyPlaylists';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import firebase from "../shared/firebase.js";

const db = firebase.firestore();

const MyPlaylistsScreen = ({navigation}) => {
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
      db.collection('Playlists').get().then(querySnapshot => {
        let playlistList = [];
        querySnapshot.forEach(doc =>{
          let playlist = doc.data();
          playlistList.push(
            {
              id: doc.id,
              name: playlist.playlistName,
              songs: playlist.songs
            })
        });
        setPlaylists(Object.values(playlistList));
        })
    }, [playlists]);

    return (
        <SafeAreaView style={styles.container}>
              <View style={styles.titleContainer}>
                  <Title style={styles.title}>My Playlists</Title>
              </View>
              <ScrollView style={styles.scroll}>
                  <MyPlaylists playlists={playlists} navigation={navigation} />
              </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
    },
    titleContainer: {
        width: '80%',
        textAlign: 'left',
        marginBottom: 30,
        marginTop: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      textAlign: 'left',
    },
    scroll: {
      width: '80%',
    }
});

export default MyPlaylistsScreen;
