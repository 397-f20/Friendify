import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendPlaylists from '../components/FriendPlaylists'

const FriendPlaylistScreen = ({navigation, route}) => {
    const displayName = route.params.displayName;
    const id = route.params.friendID; 
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                {(id) ? <Title style={styles.title}>{`${displayName}'s Playlists`}</Title> : false}
            </View>
            <ScrollView style={styles.scroll}>
                <View>
                    {(id) ? <FriendPlaylists id={id} navigation={navigation}/> : false}
                </View>
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

export default FriendPlaylistScreen;
