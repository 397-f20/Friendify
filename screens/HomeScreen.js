import React from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import {Button, Card, Title, Paragraph, TextInput} from 'react-native-paper';
import Banner from '../components/Banner';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Banner navigation={navigation} />
        <Card style={styles.card}>
          <Card.Title
            title="Search for friends"
            subtitle="Input your friends' Spotify User ID"></Card.Title>
          <Card.Content>
            <TextInput label="User ID"></TextInput>
          </Card.Content>
          <Card.Actions>
            <Button>Search</Button>
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
  },
  card: {
    width: '100%',
  }
});

export default HomeScreen;
