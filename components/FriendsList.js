import React from 'react';
import { View } from 'react-native';
import Friend from './Friend';

const friends = ['Joe', 'Tony', 'Allison', 'Jade'];

const FriendsList = () => {
    return (
        <View>
        {
            friends.map(friend => (
                <Friend key={friend} friend={friend}/>
            ))
        }
        </View>
    );
};

export default FriendsList;
