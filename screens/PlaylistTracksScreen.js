import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import Song from '../components/Song';

const PlaylistTracksScreen = ({navigation, route}) => {
    const playlist = route.params.playlist;
    console.log(playlist.songs);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                {(playlist) ? <Title style={styles.title}>{playlist.name}</Title> : false}
            </View>
            <ScrollView style={styles.scroll}>
                {playlist.songs.map(song => <Song key={song} song={song} />)}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      marginBottom: 30,
    },
    titleContainer: {
        width: '80%',
        textAlign: 'left',
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

export default PlaylistTracksScreen;
