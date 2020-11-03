import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import SongList from '../components/SongList';

const PlaylistTracksScreen = ({navigation, route}) => {
    const playlist = route.params.play;
    const playlistName = route.params.playlistName;;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                {(playlist) ? <Title style={styles.title}>{playlistName}</Title> : false}
            </View>
            <View style={styles.cardContainer}>
                <SongList songs={playlist}/>
            </View>
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
});

export default PlaylistTracksScreen;
