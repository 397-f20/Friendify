import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {Button, Card, Title, Paragraph, TextInput} from 'react-native-paper';
import Banner from '../components/banner';

const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Banner /> 
      <Card>
        <Card.Title
          title="Search for friends"
          subtitle="Input your friends' Spotify User ID"></Card.Title>
        <Card.Content>
          <TextInput label="User ID"></TextInput>
        </Card.Content>
        <Card.Actions>
          <Button>Search</Button>
          <Button onPress={()=> {navigation.toggleDrawer()}}>
            Navigation</Button>
        </Card.Actions>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default HomeScreen;
