import React from 'react';

import { View, Button, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import firebase from '../shared/firebase';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('FriendSelect')}>
          <Text style={styles.text}>
            Generate Playlist
          </Text>
        </TouchableOpacity>
        <TouchableOpacity color="#448aff" onPress={() => firebase.auth().signOut()}>
          <Text style={styles.text}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    borderRadius: 20,
    height: 80,
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#707070',
    fontSize: 20,
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

export default HomeScreen;
