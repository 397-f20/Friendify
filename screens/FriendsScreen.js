import React, { useState, useEffect } from 'react';

import { StyleSheet, Button, View, SafeAreaView, Text, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendsList from '../components/FriendsList';
import Banner from '../components/Banner.js';
import firebase from "../shared/firebase.js"

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
    }, [])
    return (
      <SafeAreaView style={styles.container}>
          <Banner navigation={navigation} />
              <View style={styles.titleContainer}>
                  <Title style={styles.title}>Friends</Title>
              </View>
              <ScrollView style={styles.scroll}>
                  <FriendsList friends={friends} navigation={navigation} />
              </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
    },
    titleContainer: {
        width: '80%',
        textAlign: 'left',
        marginBottom: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      textAlign: 'left',
    },
    scroll: {
      width: '80%',
    }
});

export default FriendsScreen;
