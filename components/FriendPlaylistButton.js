import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-paper';
import GetPlaylist from '../spotifyQ/GetPlaylist';

const FriendPlaylistButton = ({navigation, playlist}) => {
    const [play, setPlay] = useState(false);
    const playlistName = playlist.name;
    useEffect(() => {
        const href = playlist.songs.href.replace("/tracks", "");;
        GetPlaylist(href).then((val) => {
            setPlay(val);
        })
    },[]);

    if(!play) {
        return false;
    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => navigation.navigate('Playlist Tracks', {play, playlistName})}>
            <Avatar.Image
                size={50}
                source={require('../assets/favicon.png')}
                style={styles.icon}
            />
            <Text style={styles.text}>
                {playlist.name}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
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
    text: {
        color: '#707070',
        fontSize: 20,
    },
    icon: {
        marginRight: 30
    },
    arrow: {
        marginLeft: 'auto',
    }
});

export default FriendPlaylistButton;
