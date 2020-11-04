import React from 'react';

import { View, Button, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={require('../assets/friendify.jpg')} style={styles.logo} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FriendSelect')}>
          <Text style={styles.text}>
            Generate Playlist
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
    margin: 30,
    height: 50,
    padding: 10,
    minWidth: 150,
    maxWidth: 150,
    backgroundColor: '#a2adc5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: 'white'
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
    fontSize: 14,
    textAlign: 'center',
  },
  logo: {
    marginTop: 50,
    marginLeft: 45,
    alignItems: 'center',
    width: 250,
    height: 250
  }
});

export default HomeScreen;
