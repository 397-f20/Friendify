import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import FriendsScreen from '../screens/FriendsScreen';
import FriendPlaylistScreen from '../screens/FriendPlaylistScreen';
import PlaylistTracksScreen from '../screens/PlaylistTracksScreen';

const Stack = createStackNavigator();

const FriendsStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Friends' component={FriendsScreen} options={{title: '' }}/>
            <Stack.Screen name='Playlists' component={FriendPlaylistScreen} options={{title: ''}}/>
            <Stack.Screen name='Playlist Tracks' component={PlaylistTracksScreen} options={{title: ''}}/>
        </Stack.Navigator>
    )
}


export default FriendsStackNavigator;
