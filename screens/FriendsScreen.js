import React, { useState, useEffect } from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { StyleSheet, Button, View, SafeAreaView, Text, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendsList from '../components/FriendsList';
import firebase from "../shared/firebase.js";
import HomeScreen from "./HomeScreen.js"


const db = firebase.firestore()

const FriendsScreen = ({navigation}) => {
    const [friends, setFriends] = useState([]);
    
    useEffect(() => {
      db.collection('friends').get().then(querySnapshot => {
        let newfriends = []
        querySnapshot.forEach(doc =>{
          let newfriend = doc.data()
          newfriends.push(newfriend.name)})
        console.log(newfriends)
        console.log(Object.values(newfriends))
        setFriends(Object.values(newfriends))
      })
    }, []);

    return (
      <SafeAreaView style={styles.container}>        
              <View style={styles.titleContainer}>
                  <Title style={styles.title}>Friends</Title>
                  <HomeScreen/> 
              </View>
              <ScrollView style={styles.scroll}>
                <View>
                  <FriendsList friends={friends} navigation={navigation} />
                </View>
              </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      marginTop: 50,
    },
    titleContainer: {
        width: '80%',
        textAlign: 'left',
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
});

export default FriendsScreen;
