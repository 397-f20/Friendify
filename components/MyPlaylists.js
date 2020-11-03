import React from 'react';
import {View, Text} from 'react-native';
import MyPlaylistButton from './MyPlaylistButton';


const MyPlaylists = ({playlists, navigation}) => {

    if (!playlists) {
        return(
            <View>
                <Text>No playlists</Text>
            </View>
        )
    }
    return (
        playlists.map(playlist => (
            <MyPlaylistButton key={playlist.name} playlist={playlist} navigation={navigation}/>
        ))
    );
};

export default MyPlaylists;
