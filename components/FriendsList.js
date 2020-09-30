import React from 'react';
import { View } from 'react-native';
import Friend from './Friend';
import PlaylistHomeScreen from '../screens/PlaylistHomeScreen';

const friends = ['Joe', 'Tony', 'Allison', 'Jade'];

const FriendsList = ({viewPlaylist}) => {
    // console.log(navigation)
    // const [currFriend, setCurrFriend] = React.useState(false)

    // if (!currFriend){
    return (
        <View>
        {
            friends.map(friend => (
                <Friend key={friend} name={friend} viewPlaylist={viewPlaylist}/>
            ))
        }
        </View>
    );
    // } else {
    //     return (<PlaylistHomeScreen friend={currFriend} setFriend={setCurrFriend}></PlaylistHomeScreen>)
    // }
};

export default FriendsList;
