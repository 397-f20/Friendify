import React from 'react';
import { View } from 'react-native';
import Friend from './Friend';


const FriendsList = ({friends, navigation}) => {
    return (
        <View>
        {
            friends.sort(function(a,b){
                const al = a.displayName.toLowerCase();
                const bl = b.displayName.toLowerCase();
                if(al < bl) { return -1; }
                if(al > bl) { return 1; }
                return 0;
            })
            .map(friend => (
                <Friend key={friend.id} friend={friend} navigation={navigation} />
            ))
        }
        </View>
    );
};

export default FriendsList;
