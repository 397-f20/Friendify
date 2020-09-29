import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendsList from '../components/FriendsList';

const FriendsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
              <Title style={styles.title}>Friends</Title>
            </View>
            <ScrollView style={styles.scroll}>
              <FriendsList/> 
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
