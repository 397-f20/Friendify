import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import FriendsScreen from '../screens/FriendsScreen';
import FriendPlaylistScreen from '../screens/FriendPlaylistScreen';


const Stack = createStackNavigator();

const FriendPlaylistNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Friends' component={FriendsScreen} />
            <Stack.Screen name='Playlists' component={FriendPlaylistScreen} />
        </Stack.Navigator>
    )
}

export default FriendPlaylistNavigator;
