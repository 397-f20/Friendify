import React, {useContext} from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import FriendPlaylists from '../components/FriendPlaylists';
import firebase from "../shared/firebase.js";
import UserContext from '../utils/userContext';

const db = firebase.firestore();

const FriendPlaylistScreen = ({navigation, route}) => {
    const user = useContext(UserContext);
    const displayName = route.params.displayName;
    const id = route.params.friendID; 

    deleteFriend = (friendID) => {
        db.collection('users').doc(user).update({
            friends: firebase.firestore.FieldValue.arrayRemove(friendID)
        }).then(()=> {
            navigation.navigate('Friends')
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                {(id) ? <Title style={styles.title}>{`${displayName}'s Playlists`}</Title> : false}
            </View>
            <ScrollView style={styles.scroll}>
                <View>
                    {(id) ? <FriendPlaylists id={id} navigation={navigation}/> : false}
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.remove}
                onPress = {() => deleteFriend(id)}>
               <Text style={styles.removeText}>Remove Friend</Text> 
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
    },
    titleContainer: {
        width: '80%',
        textAlign: 'left',
        marginTop: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      textAlign: 'left',
    },
    scroll: {
      width: '80%',
    },
    remove: {
        width: '80%',
        backgroundColor: '#fff',
        height: 50,
        justifyContent: "center",
    },
    removeText: {
        color: '#707070',
        fontSize: 20,
    }
});

export default FriendPlaylistScreen;
