import React, { useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { StyleSheet, Button, View, SafeAreaView, Text, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendsList from '../components/FriendsList';
import Banner from '../components/banner';
import firebase from "../shared/firebase.js"

const db = firebase.firestore()


const FriendsScreen = ({navigation}) => {
    const [friends, setFriends] = useState([]);
    
    useFocusEffect(() => {
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
                <Banner navigation={navigation} style={styles.banner}/>           
              <View style={styles.titleContainer}>
                  <Title style={styles.title}>Friends</Title>
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
    },
});

export default FriendsScreen;
