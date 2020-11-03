import React, { useContext } from 'react';
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
  const [friend, setFriend] = React.useState("");
  //added tells us if they have added a friend
  const [added, setAdded] = React.useState(false);

  const AddFriend = async (friend) => {
    db.collection('users').doc(user).update({
      friends: firebase.firestore.FieldValue.arrayUnion(friend)
    }).then(() => {
      setAdded(true)
      setNewFriend(friend)
    }
    )
  };

  return (
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Title style={styles.cardTitle}
            subtitle="Add a friend to your Friend List"></Card.Title>
          <Card.Content style={styles.cardContent}>
            <TextInput style={styles.textInput} placeholder="Friend's Spotify User ID" onChangeText={(value) => setFriend(value)}></TextInput>
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
    textAlign: 'left'
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
  }
});

export default AddFriendSearch;
