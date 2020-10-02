import React from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import {Button, Card, Title, Paragraph, TextInput} from 'react-native-paper';
import Banner from '../components/Banner.js';
import { AsyncStorage } from 'react-native';
import { getRedirectUrl, useAuthRequest, makeRedirectUri } from 'expo-auth-session';
makeRedirectUri()
console.log("this is the redirect url: " + getRedirectUrl())

_initData = async () => {
  try {
    await AsyncStorage.setItem(
      '@Friends:key',
      'Joe'
    );
  } catch (error) {
    // Error saving data
  }
};

const AddFriend = (friend) => {
  try {
    const value = await AsyncStorage.getItem('Friends');
    if (value !== null) {
      // We have data!!
      console.log(value);
      try {
        await AsyncStorage.setItem(
          '@Friends:key',
          value,
          friend
        );
      } catch (error) {
      }
    }
  } catch (error) {
    // Error retri
  } 
}

const HomeScreen = ({navigation}) => {
  const [friend, setFriend] = React.useState("")
  return (
    <SafeAreaView style={styles.container}>
        <Banner navigation={navigation} />
        <Card style={styles.card}>
          <Card.Title
            title = "Friends"
            subtitle="Input your friends' Spotify User ID"></Card.Title>
          <Card.Content>
            <TextInput label="User ID" onChangeText={(value) => setFriend(value)}></TextInput>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => AddFriend(friend)} >Search</Button>
          </Card.Actions>
        </Card>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
  }
});

export default HomeScreen;
