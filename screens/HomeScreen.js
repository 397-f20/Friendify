import React from 'react';

import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../shared/firebase';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity title='Generate Playlist' onPress={() => navigation.navigate('FriendSelect')}/>
        <Button title="Logout" color="#448aff"
          onPress={() => firebase.auth().signOut()}
        />
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

export default HomeScreen;
