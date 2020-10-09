import React, { useState } from 'react';

import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import firebase from "../shared/firebase.js";


const db = firebase.firestore();

const GeneratePlaylistFormScreen = ({navigation}) => {
  const [friends, setFriends] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    db.collection('friends').get().then(querySnapshot => {
      let newfriends = []
      querySnapshot.forEach(doc => {
        let newfriend = doc.data()
        newfriends.push(newfriend.name)})
      console.log(newfriends)
      console.log(Object.values(newfriends))
      setFriends(Object.values(newfriends))
    })
  }, []);

  if (friends.length !== 0) {
    generatePlaylists();
  }

  const generateFriendsPlaylists = () => {
    const temp = [];
    friends.forEach(friend => {
      const [playlists, setPlaylists] = useState(false)
    useEffect(() => {
        GetUserPlaylists(name).then((value) => {
        console.log(name)
        console.log(value)
        setPlaylists(value)
        }
    );},[])
    if(!playlists){
        return false
    }
    })
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
      <Button title='Hello'/>
      </View>
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
    marginBottom: 250,
    width: '80%',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
  }
});

export default GeneratePlaylistFormScreen;
