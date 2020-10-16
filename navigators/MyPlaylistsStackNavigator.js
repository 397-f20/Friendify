import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MyPlaylistsScreen from '../screens/MyPlaylistsScreen';
import PlaylistTracksScreen from '../screens/PlaylistTracksScreen';

const Stack = createStackNavigator();

const MyPlaylistsStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='My Playlists' component={MyPlaylistsScreen} options={{title: '' }}/>
            <Stack.Screen name='Playlist Tracks' component={PlaylistTracksScreen} options={{title: '' }}/>
        </Stack.Navigator>
    )
}


export default MyPlaylistsStackNavigator;
