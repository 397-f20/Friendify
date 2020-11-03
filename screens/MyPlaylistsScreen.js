import React, { useState, useContext } from 'react';
import MyPlaylists from '../components/MyPlaylists';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import firebase from "../shared/firebase.js";
import UserContext from '../utils/userContext';

const db = firebase.firestore();

const MyPlaylistsScreen = ({navigation}) => {
    const [playlists, setPlaylists] = useState([]);
    const user = useContext(UserContext);

    //https://reactnavigation.org/docs/use-focus-effect/
    //Basically a fancier useEffect for navgation. Docs Recommend using with useCallback. See link for example
    //without useCallback, this would ping the firebase infinitely.
    //This has the functionality of calling the database only once whenever this screen is navigated to
    useFocusEffect(
      React.useCallback(() => {
      db.collection('users').doc(user).get().then(doc => {
        var data = doc.data();
        const pl = data.playlists;
        if(pl) {
          setPlaylists(pl);
        }
        else {
          setPlaylists(false);
        }
      })
    }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
              <View style={styles.titleContainer}>
                  <Title style={styles.title}>My Playlists</Title>
              </View>
              <ScrollView style={styles.scroll}>
                  <MyPlaylists playlists={playlists} navigation={navigation} />
              </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
    },
    titleContainer: {
        width: '80%',
        textAlign: 'left',
        marginBottom: 30,
        marginTop: 30,
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

export default MyPlaylistsScreen;
