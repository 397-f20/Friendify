import React from 'react';
import { View, Text } from 'react-native';
import {Checkbox} from 'react-native-paper';

//NOTE: chosenFriends is an array of booleans the same length as friends
//  false corresponds to not selected, and true means selected
// I don't split this into a smaller component, as the small component would need a lot of state to be passed
const FriendSelector = ({friends, chosenFriends, setChosenFriends, navigation}) => {
    if (friends.length === 0){
        return(
            <View>
                <Text>Loading...</Text>
            </View>
        )
    } else {

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
            .map((element, index) => (
                <Checkbox.Item
                key={element.id}
                label = {element.displayName}
                status={chosenFriends[index] ? 'checked' : 'unchecked' }
                onPress = {() => {
                    let tempChosen = [
                        ...chosenFriends
                    ]
                    tempChosen[index] = !chosenFriends[index]
                    setChosenFriends(tempChosen)
                }}/>
            ))
            }
        </View>
    );
    }
};

export default FriendSelector;
