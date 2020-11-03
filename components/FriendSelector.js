import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import {Checkbox} from 'react-native-paper';
import GetUserName from '../spotifyQ/GetUserName';

//NOTE: chosenFriends is an array of booleans the same length as friends
//  false corresponds to not selected, and true means selected
// I don't split this into a smaller component, as the small component would need a lot of state to be passed
const FriendSelector = ({friends, chosenFriends, setChosenFriends, navigation}) => {
    const [names, setNames] = useState([]);

    const getDisplayNames = async (tempFriends) => {
        let tempNames = [];
        await Promise.all(tempFriends.map(async (friend) => {
           const displayName = await GetUserName(friend.id);
           tempNames = tempNames.concat({
               name: displayName,
               id: friend.id,
               index: friend.index,
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
        return(
            <View>
                <Text>No friends</Text>
            </View>
        )
    }
    
    else if (names.length === 0){
        return(
            <View>
                <Text>Loading...</Text>
            </View>
        )
    } else {
        
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
                <Checkbox.Item
                key={friend.id}
                label = {friend.name}
                status={chosenFriends[friend.index] ? 'checked' : 'unchecked' }
                onPress = {() => {
                    let tempChosen = [
                        ...chosenFriends
                    ]
                    tempChosen[friend.index] = !chosenFriends[friend.index]
                    setChosenFriends(tempChosen)
                }}/>
            ))
            }
        </View>
    );
    }
};

export default FriendSelector;