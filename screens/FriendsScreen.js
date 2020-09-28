import React from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import FriendsList from '../components/FriendsList';

const FriendsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Friends</Text>
            <ScrollView>
              <FriendsList/> 
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default FriendsScreen;
