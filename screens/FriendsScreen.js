import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendsList from '../components/FriendsList';
import firebase from "../shared/firebase.js";
import AddFriendSearch from '../components/AddFriendSearch';
import UserContext from '../utils/userContext';

const db = firebase.firestore();

const FriendsScreen = ({navigation}) => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState(false);
    const user = useContext(UserContext);

    useEffect(() => {
      db.collection('users').doc(user).get().then(doc => {
        var data = doc.data();
        const fr = data.friends;
        if (fr) {
          setFriends(fr);
        } else {
          console.log("no friends rip");
          setFriends(false);
        }
      });
    }, [newFriend]);


    return (
      <SafeAreaView style={styles.container}>
              <View style={styles.titleContainer}>
                  <Title style={styles.title}>Friends</Title>
                  <View style={styles.add}>
                    <AddFriendSearch setNewFriend={setNewFriend} />
                  </View> 
              </View>
              <ScrollView style={styles.scroll}>
                <View>
                  <FriendsList friends={friends} navigation={navigation} />
                </View>
              </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      marginTop: 30,
    },
    titleContainer: {
        width: '80%',
        textAlign: 'left'
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
    add: {
      height: 200,
    }
});

export default FriendsScreen;
