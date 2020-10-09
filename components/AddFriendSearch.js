import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import { makeRedirectUri } from 'expo-auth-session';
import firebase from "../shared/firebase.js"
import GetUserName from  "../spotifyQ/GetUserName.js";
makeRedirectUri();


const db = firebase.firestore();

const AddFriendSearch = ({setNewFriend}) => {
  const AddFriend = async (friend) => {
    const displayname = await GetUserName(friend)
    console.log(displayname)
    db.collection('friends').add( {
      name: friend,
      displayname: displayname,
    }).then(() => {
      setAdded(true)
      setNewFriend(friend)
    }
    )
  };
  const [friend, setFriend] = React.useState("");
  //added tells us if they have added a friend
  const [added, setAdded] = React.useState(false);

  return (
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Title
            subtitle="Input your friends' Spotify User ID to add to your friend's list"></Card.Title>
          <Card.Content>
            <TextInput label="User ID" onChangeText={(value) => setFriend(value)}></TextInput>
            {(added) ? <Text>Added {friend}!</Text> : false}
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => ((friend != "") ? AddFriend(friend) :false)} >Add Friend</Button>
          </Card.Actions>
        </Card>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'left',
  },
  cardContainer: {
    flex: 1, 
    marginBottom: 50,
    width: '80%',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
  }
});

export default AddFriendSearch;
