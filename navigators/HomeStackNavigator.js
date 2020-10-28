import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GeneratedPlaylistScreen from '../screens/GeneratedPlaylistScreen';
import FriendSelectScreen from '../screens/FriendSelectScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{ title:'' }}/>
            <Stack.Screen name='FriendSelect' component={FriendSelectScreen} options={{ title:'' }}/>
            <Stack.Screen name='GeneratedPlaylist' component={GeneratedPlaylistScreen} options={{ title:'' }}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;
