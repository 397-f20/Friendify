import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import FriendPlaylistNavigator from './StackNavigator';
import MyPlaylistsScreen from '../screens/MyPlaylistsScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='Friends' component={FriendPlaylistNavigator} />
            <Drawer.Screen name='My Playlists' component={MyPlaylistsScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
