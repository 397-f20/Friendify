import React from 'react';
import {Button, Card, TextInput} from 'react-native-paper';
import { View, ScrollView, StyleSheet } from 'react-native';
import Song from './Song';

const SongList = ({songs}) => {
    const savePlaylist = (songs, name) => {
      db.collection('Playlists').add({
        playlistName: name,
        songs: songs,
      })
    }; 
    const [playlistName, setPlaylistName] = React.useState("");
   
    return(
      <View style={styles.save}>
              <View style={styles.cardCon}>
          <Card style={styles.card}>
            <Card.Content>
              <TextInput label="New Playlist Name"
              onChangeText={(value) => setPlaylistName(value)} ></TextInput>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => savePlaylist(songs, playlistName)}>Save Playlist</Button>
            </Card.Actions>
          </Card>
        </View>
        <ScrollView>
        {songs.map(song => <Song key={song} song={song} />)}
        </ScrollView>
      </View>
    )
}


const styles = StyleSheet.create({
    save: {
      height: 300,
      justifyContent: 'flex-start',
      flex: 1,
    },
    card: {
      width: '100%',
    },
    cardCon: {
      marginBottom: 20,
      width: '100%',
      justifyContent: 'center',
    },
    });

export default SongList;