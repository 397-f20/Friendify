import React from 'react';
import { View } from 'react-native';
import Friend from './Friend';


const FriendsList = ({friends, navigation}) => {
    return (
        <View>
        {
            friends.map(tuple => (
                <Friend key={tuple[1]} tuple={tuple} navigation={navigation} />
            ))
        }
        </View>
    );
};

export default FriendsList;
