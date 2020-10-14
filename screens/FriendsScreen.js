import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendsList from '../components/FriendsList';
import firebase from "../shared/firebase.js";
import AddFriendSearch from '../components/AddFriendSearch';


const db = firebase.firestore();

const FriendsScreen = ({navigation}) => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState(false)

    useEffect(() => {
      db.collection('friends').get().then(querySnapshot => {
        let newfriends = []
        querySnapshot.forEach(doc =>{
          let newfriend = doc.data()
          newfriends.push([newfriend.name, newfriend.displayname])})
        setFriends(Object.values(newfriends))
      })
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
      marginBottom: 35,
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
