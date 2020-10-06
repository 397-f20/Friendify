import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MyPlaylistsScreen from '../screens/MyPlaylistsScreen';


const Stack = createStackNavigator();

const MyPlaylistsStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='My Playlists' component={MyPlaylistsScreen} options={{title: '' }}/>
        </Stack.Navigator>
    )
}


export default MyPlaylistsStackNavigator;
