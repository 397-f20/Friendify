import React from 'react';

import MyPlaylists from '../components/MyPlaylists';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';


const MyPlaylistsScreen = ({navigation}) => {
    const playlists = ['Bob\'s Rock Playlist', 'Pop Mix', 'David\'s Chill and Party', 'Adam\'s Mix'];

    return (
        <SafeAreaView style={styles.container}>
              <View style={styles.titleContainer}>
                  <Title style={styles.title}>My Playlists</Title>
              </View>
              <ScrollView style={styles.scroll}>
                  <MyPlaylists playlists={playlists} />
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
