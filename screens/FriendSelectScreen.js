import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendSelector from '../components/FriendSelector';
import firebase from "../shared/firebase.js";
import AddFriendSearch from '../components/AddFriendSearch';


const db = firebase.firestore();

const FriendSelectScreen = ({navigation}) => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState(false)
    const [chosenFriends, setChosenFriends] = useState([]);

    useEffect(() => {
      db.collection('friends').get().then(querySnapshot => {
        let newfriends = [];
        querySnapshot.forEach(doc =>{
          let newfriend = doc.data();
          newfriends.push({
            id: doc.id,
            name: newfriend.name,
            displayName: newfriend.displayname,
          })
        });
        setFriends(newfriends);
        let tempChosenFriends = []
        for (let i = 0; i < newfriends.length; i++){
          tempChosenFriends.push(false)
        }
        setChosenFriends(tempChosenFriends)
      });
    }, [newFriend]);
    return (
      <SafeAreaView style={styles.container}>
              <View style={styles.titleContainer}>
                  <Title style={styles.title}>Choose some friends!</Title>
                  <View style={styles.add}>
                    <AddFriendSearch setNewFriend={setNewFriend} />
                  </View> 
              </View>
                  <FriendSelector friends={friends} navigation={navigation} chosenFriends={chosenFriends} setChosenFriends={setChosenFriends} />
              <Button title="Next" disabled={!chosenFriends.some(e => e === true)} onPress={() => navigation.navigate('GeneratedPlaylist', {chosenFriends, friends})}></Button>
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
      width: 100
    },
    add: {
      height: 200,
    }
});

export default FriendSelectScreen;
