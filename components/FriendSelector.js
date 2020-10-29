import React from 'react';
import {ScrollView, StyleSheet,  View, Text } from 'react-native';
import {Chip, Avatar} from 'react-native-paper';

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
        <ScrollView style={styles.scroll} contentContainerStyle={{alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', }}>
        {
            friends.sort(function(a,b){
                const al = a.displayName.toLowerCase();
                const bl = b.displayName.toLowerCase();
                if(al < bl) { return -1; }
                if(al > bl) { return 1; }
                return 0;
            })
            .map((element, index) => (
                <Chip style={styles.chip}
                key={element.id}
                avatar ={<Avatar.Image
                    size={30}
                    source={require('../assets/favicon.png')}
                    style={styles.icon}
                />}
                selected={chosenFriends[index]}
                onPress = {() => {
                    let tempChosen = [
                        ...chosenFriends
                    ]
                    tempChosen[index] = !chosenFriends[index]
                    setChosenFriends(tempChosen)
                }}>
                    {element.displayName}
                    </Chip>
            ))
            }
        </ScrollView>
    );
    }
};
const styles = StyleSheet.create({
    scroll:{
        width: 500, 
    },
    chip: {
        flex: 1,
        marginVertical: 5,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
    icon: {
        marginRight: 30
    },
    arrow: {
        marginLeft: 'auto',
    },
});

export default FriendSelector;
