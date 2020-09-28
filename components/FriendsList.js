import React from 'react';
import { Touchable, SafeAreaView } from 'react-native';
import Friend from './Friend';

const friends = ['Joe', 'Tony', 'Allison'];

const FriendsList = () => {
    return (
        <SafeAreaView>
        {
            friends.map(friend => (
                <Friend friend = {friend}/>
            ))
        }
        </SafeAreaView>
    );
};

export default FriendsList;
