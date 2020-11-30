import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import FriendsStackNavigator from './FriendsStackNavigator';
import MyPlaylistsStackNavigator from './MyPlaylistsStackNavigator';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../components/Forms/colors';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({tintColor}) => (<Icon name='home' color={colors.friendifygrey} size={25} />)
                }}
            />
            <Tab.Screen
                name='Friends'
                component={FriendsStackNavigator}
                options={{
                    tabBarIcon: ({tintColor}) => (<Icon name='user-friends' color={colors.friendifygrey} size={25} />)
                }}
            />
            <Tab.Screen
                name='My Playlists'
                component={MyPlaylistsStackNavigator}
                options={{
                    tabBarIcon: ({tintColor}) => (<Icon name='list-alt' color={colors.friendifygrey} size={25} />)
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
