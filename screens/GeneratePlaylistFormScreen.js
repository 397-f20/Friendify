import React from 'react';
import getTokens from '../spotifyAuth/getAccessToken';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';


const GeneratePlaylistFormScreen = ({navigation}) => {
  getTokens()
  
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
