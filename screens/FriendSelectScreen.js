import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendSelector from '../components/FriendSelector';
import firebase from "../shared/firebase.js";
import AddFriendSearch from '../components/AddFriendSearch';
import UserContext from '../utils/userContext';
import {Card, TextInput} from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

const db = firebase.firestore();

const FriendSelectScreen = ({navigation}) => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState(false)
    const [chosenFriends, setChosenFriends] = useState([]);
    const user = useContext(UserContext);
    const [numSongs, setNumSongs] = useState(15);

    useFocusEffect(
      React.useCallback(() => {
      console.log("useEffect")
      db.collection('users').doc(user).get().then(doc => {
        var data = doc.data();
        const fr = data.friends;
        if(fr && fr.length !== 0) {
          let tempFriends = [];
          for(let i = 0; i < fr.length; i++) {
            tempFriends.push({
              id: fr[i],
              index: i,
            });
          }
          setFriends(tempFriends);
          let tempChosenFriends = [];
          for (let i = 0; i < fr.length; i++){
            tempChosenFriends.push(false)
          }
          setChosenFriends(tempChosenFriends)
        } else {
          setFriends(false);
        }
      }).catch(error => {
        setFriends(false)
      });
    }, [newFriend])
    );
    
    return (
      <SafeAreaView style={styles.container}>
              <View style={styles.titleContainer}>
                  <Title style={styles.title}>Choose some friends!</Title>
                  <View style={styles.add}>
                    <AddFriendSearch setNewFriend={setNewFriend} />
                  </View> 
              </View>
              <ScrollView style={styles.scroll}>
                  <FriendSelector friends={friends} navigation={navigation} chosenFriends={chosenFriends} setChosenFriends={setChosenFriends} />
              </ScrollView>
                  <Card style={styles.card}>
                    <Card.Title style={styles.cardTitle}
                      subtitle="Number of Songs:"></Card.Title>
                    <Card.Content style={styles.cardContent}>
                      <TextInput style={styles.textInput} placeholder="15" onChangeText={(value) => setNumSongs(value)}></TextInput>
                    </Card.Content>
                  </Card>
                <Button title="Next" disabled={!chosenFriends.some(e => e === true)} onPress={() => navigation.navigate('GeneratedPlaylist', {chosenFriends, friends, numSongs})}></Button>
 
              
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      marginTop: 30,
    },
    cardTitle: {
      margin: -10,
      padding: 0
    },
    titleContainer: {
        width: '80%',
        textAlign: 'left'
    },
    textInput: {
      height: 40
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      textAlign: 'left',
    },
    cardContent:  {

    },
    scroll: {
      width: 230
    },
    card: {
      height: 100,
      width: 200
    },
    add: {
      height: 200,
    }
});

export default FriendSelectScreen;