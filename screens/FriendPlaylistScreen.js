import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendPlaylists from '../components/FriendPlaylists'
 

const FriendPlaylistScreen = ({navigation, route}) => {
    name = route.params.name;
    const playlists = ['Rock', 'Pop', 'Chill', 'Party'];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Title style={styles.title}>{`${name}'s Playlists`}</Title>
            </View>
            <ScrollView style={styles.scroll}>
                <View>
                    <FriendPlaylists playlists={playlists} />
                </View>
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

export default FriendPlaylistScreen;
