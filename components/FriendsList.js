import React from 'react';
import { View } from 'react-native';
import Friend from './Friend';


const FriendsList = ({friends, navigation}) => {
    return (
        <View>
        {
            friends.map(friend => (
                <Friend key={friend} name={friend} navigation={navigation} />
            ))
        }
        </View>
    );
};

export default FriendsList;
