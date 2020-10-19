import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Song from './Song';

const SongList = ({songs}) => {
    return(
      <View style={styles.save}>

        <ScrollView>
          {songs.map(song => <Song key={song.id} song={song} />)}
        </ScrollView>
      </View>
    )
}


const styles = StyleSheet.create({
    save: {
      height: 300,
      justifyContent: 'flex-start',
      flex: 1,
    }
    });

export default SongList;