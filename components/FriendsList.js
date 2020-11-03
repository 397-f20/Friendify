import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import Friend from './Friend';
import GetUserName from '../spotifyQ/GetUserName';


const FriendsList = ({friends, navigation}) => {
    const [names, setNames] = useState([]);

    const getDisplayNames = async (tempFriends) => {
        let tempNames = [];
        await Promise.all(tempFriends.map(async (friend) => {
           const displayName = await GetUserName(friend);
           tempNames = tempNames.concat({
               name: displayName,
               id: friend
            });
        }));
        setNames(tempNames);
    }

    useEffect( () => {
        if (friends && names.length==0) {
            getDisplayNames(friends);
        }
    }, [friends]);

    if (!friends) {
       return (
           <View>
               <Text>No Friends</Text>
           </View>
       );
    } else if (names.length == 0) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        ); 
    } else {
        console.log(names);
        return (
            <View>
            {
                names.sort(function(a,b){
                    const al = a.name.toLowerCase();
                    const bl = b.name.toLowerCase();
                    if(al < bl) { return -1; }
                    if(al > bl) { return 1; }
                    return 0;
                })
                .map(friend => (
                    <Friend key={friend.name} displayName={friend.name} friendID={friend.id} navigation={navigation} />
                ))
            }
            </View>
        );
    }

};

export default FriendsList;
