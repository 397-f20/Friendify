import React, {useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendsList from '../components/FriendsList';
import { createStackNavigator } from '@react-navigation/stack';
import {PlaylistHomeScreen} from './PlaylistHomeScreen';
import Banner from '../components/Banner';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const FriendScreenComponent = ({navigation}) => {
  return (
    
  )
};

const FriendsScreen = ({navigation}) => {
    const [friend, setFriend] = useState('');

    const viewPlaylist = () => {
      navigation.navigate('Playlists', {friend});
    };

    return (
      <SafeAreaView style={styles.container}>
                <Banner navigation={navigation}/>
                <View style={styles.titleContainer}>
                  <Title style={styles.title}>Friends</Title>
                </View>
                <ScrollView style={styles.scroll}>
                  <FriendsList viewPlaylist={viewPlaylist} />
                  {/* <Button title='PLaylist Home' onPress={()=>navigation.navigate('PlaylistHomeScreen')}/> */}
                </ScrollView>
    </SafeAreaView> 
    )
};


const styles = StyleSheet.create({
    title: {
      fontSize: 30,
    },
    titleContainer: {
        width: '80%',
        textAlign: 'left',
        marginBottom: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      textAlign: 'left',
    },
    scroll: {
      width: '80%',
    }
});

export default FriendsScreen;
