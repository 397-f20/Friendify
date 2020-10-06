import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import FriendsScreen from '../screens/FriendsScreen';
import FriendPlaylistScreen from '../screens/FriendPlaylistScreen';
import GeneratePlaylistScreen from '../screens/GeneratePlaylistScreen';
import GeneratePlaylistFormScreen from '../screens/GeneratePlaylistFormScreen';

const Stack = createStackNavigator();

const FriendPlaylistNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Friends' component={FriendsScreen} options={{ title:'' }}/>
            <Stack.Screen name='Playlists' component={FriendPlaylistScreen} options={{ title:'' }}/>
        </Stack.Navigator>
    )
}


export default FriendPlaylistNavigator;