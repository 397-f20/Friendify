import React from 'react';

import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import {Button, Card, Title, Paragraph, TextInput} from 'react-native-paper';
import Banner from '../components/Banner.js';
import { AsyncStorage } from 'react-native';
import { getRedirectUrl, useAuthRequest, makeRedirectUri } from 'expo-auth-session';
import firebase from "../shared/firebase.js"
makeRedirectUri()

const db = firebase.firestore()


const HomeScreen = ({navigation}) => {
  const AddFriend = (friend) => {
    db.collection('friends').add( {
      name: friend
    }).then(
      setAdded(true)
    )
  }
  const [friend, setFriend] = React.useState("")
  //added tells us if they have added a friend
  const [added, setAdded] = React.useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <Banner navigation={navigation} />
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Title
            title = "Friends"
            subtitle="Input your friends' Spotify User ID to add to your friend's list"></Card.Title>
          <Card.Content>
            <TextInput label="User ID" onChangeText={(value) => setFriend(value)}></TextInput>
            {(added) ? <Text>Added {friend}!</Text> : false}
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => AddFriend(friend)} >Add Friend</Button>
          </Card.Actions>
        </Card>
      </View>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
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
    justifyContent: 'flex-start', 
    marginBottom: 250,
  },
  card: {
    width: '100%',
  }
});

export default HomeScreen;
