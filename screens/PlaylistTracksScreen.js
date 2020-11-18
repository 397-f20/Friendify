import React, {useState, useContext} from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import { Title } from 'react-native-paper';
import SongListWithFriend from '../components/SongListWithFriend';
import firebase from "../shared/firebase.js";
import UserContext from '../utils/userContext';

const db = firebase.firestore();

const PlaylistTracksScreen = ({navigation, route}) => {
    const playlist = route.params.play;
    const playlistName = route.params.playlistName;
    const fromFriends = route.params.fromFriends
    const user = useContext(UserContext);

    var deletePlaylist = (name) => {
        var doc = db.collection('users').doc(user);
        doc.get().then(d => {
            var data = d.data();
            const allPlaylists = data.playlists;
            doc.update({
                playlists: allPlaylists.filter(playlist => playlist.name !== name)
            }).then(()=> {
                navigation.navigate('My Playlists')
            })
        })
    }

    let songsWithFriends = []
    for (let i = 0; i < playlist.length; i++){
        songsWithFriends.push([playlist[i], fromFriends[i]])
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                {(playlist) ? <Title style={styles.title}>{playlistName}</Title> : false}
            </View>
            <View style={styles.cardContainer}>
                <SongListWithFriend songs={songsWithFriends}/>
            </View>
            <TouchableOpacity style={styles.remove}
                onPress = {() => deletePlaylist(playlistName)}>
                <Text style={styles.removeText}>Remove Playlist</Text> 
            </TouchableOpacity>
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
      cardContainer: {
        flex: 1, 
        width: '80%',
        justifyContent: 'center',
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        textAlign: 'left',
      },
      remove: {
        width: '80%',
        backgroundColor: '#fff',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
        removeText: {
        color: '#707070',
        fontSize: 20,
    }
});

export default PlaylistTracksScreen;
