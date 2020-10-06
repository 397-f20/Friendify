import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GeneratePlaylistScreen from '../screens/GeneratePlaylistScreen';
import FriendPlaylistNavigator from './StackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import MyPlaylistsScreen from '../screens/MyPlaylistsScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeStackNavigator} />
            <Tab.Screen name='Friends' component={FriendPlaylistNavigator} />
            <Tab.Screen name='My Playlists' component={MyPlaylistsScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigation;