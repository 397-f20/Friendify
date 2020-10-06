import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import GeneratePlaylistScreen from '../screens/GeneratePlaylistScreen';
import GeneratePlaylistFormScreen from '../screens/GeneratePlaylistFormScreen';


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='GeneratePlaylist' component={GeneratePlaylistScreen} options={{ title:'' }}/>
            <Stack.Screen name='GeneratePlaylistForm' component={GeneratePlaylistFormScreen} options={{ title:'' }}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;
