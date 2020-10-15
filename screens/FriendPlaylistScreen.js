import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import FriendPlaylists from '../components/FriendPlaylists'




const FriendPlaylistScreen = ({navigation, route}) => {
    const tuple = route.params.tuple

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                {(tuple) ? <Title style={styles.title}>{`${tuple[1]}'s Playlists`}</Title> : false}
            </View>
            <ScrollView style={styles.scroll}>
                <View>
                    {(tuple) ? <FriendPlaylists name={tuple[0]} /> : false}
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
