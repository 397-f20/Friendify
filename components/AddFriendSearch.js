import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import { makeRedirectUri } from 'expo-auth-session';
import firebase from "../shared/firebase.js";
import GetUserName from  "../spotifyQ/GetUserName.js";
import UserContext from '../utils/userContext';
makeRedirectUri();

const db = firebase.firestore();

const AddFriendSearch = ({setNewFriend}) => {
  const user = useContext(UserContext);
  const [displayName, setDisplayName] = useState("")
  const [friend, setFriend] = useState("");
  //added tells us if they have added a friend
  const [added, setAdded] = useState(false);


  const AddFriend = async (friend) => {
    let tempname = await GetUserName(friend)
    if (tempname) { 
      setDisplayName(tempname.display_name)
      db.collection('users').doc(user).update({
        friends: firebase.firestore.FieldValue.arrayUnion(friend)
      }).then(() => {
        setAdded(true)
        setNewFriend(friend)
      }
    )
  }
  };

  const ParseURL = (url) => {
    const parsed = url.split('/')
    //get element after 'user'
    const Ind = parsed.indexOf('user') + 1
    const tempUser = parsed[Ind]
    const user = tempUser.split('?')[0]
    setFriend(user)
  }

  return (
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Title style={styles.cardTitle}
            subtitle="Add a friend to your Friend List"></Card.Title>
          <Card.Content style={styles.cardContent}>
            <TextInput style={styles.textInput} placeholder="Friend's Spotify Profile Link" onChangeText={(value) => ParseURL(value)}></TextInput>
            {(added) ? <Text>Added {displayName}!</Text> : false}
          </Card.Content>
          <Card.Actions>
            <Button style={styles.button} onPress={() => ((friend != "") ? AddFriend(friend) :false)} > <Text style={styles.buttonText}>Add Friend </Text> </Button>
          </Card.Actions>
        </Card>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'left'
  },
  buttonText : {
    color : '#5c918e',
  },
  button : {
    backgroundColor: '#f8f8ff'
  },
  cardContainer: {
    flex: 1, 
    width: '100%',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
  },
  cardTitle : {
    height:  100,
    marginTop: -25,
    marginBottom: -25,
  },
  carContent: {
  },
  textInput: {
  },
  

});

export default AddFriendSearch;
