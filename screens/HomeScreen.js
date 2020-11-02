import React from 'react';

import { View, Button, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import firebase from '../shared/firebase';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FriendSelect')}>
          <Text style={styles.text}>
            Generate Playlist
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => firebase.auth().signOut()}>
          <Text style={styles.text}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#66b0ff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default HomeScreen;
