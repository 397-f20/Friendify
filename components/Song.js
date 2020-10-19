import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-paper';

const Song = ({song}) => {
    const formatArtists = (artists) => {
      var res = artists.map(a => a.name);
      return res.join(", ");
    };
    const url = song.images[0].url;

    return(
    <TouchableOpacity
    style={styles.songContainer}>
    <Avatar.Image
        size={40}
        source={{uri: url}}
        style={styles.icon}
    />
    <View style={styles.textContainer}>
      <Text style={styles.text}>
          {song.name}
      </Text>
      <Text style={styles.artist}>
          {formatArtists(song.artists)}
      </Text>
    </View> 
  </TouchableOpacity>
    )
};

  const styles = StyleSheet.create({
    textContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    songContainer: {
      flex: 1,
      backgroundColor: '#F4F4F4',
      flexDirection: 'row',
      borderRadius: 20,
      height: 80,
      width: '100%',
      marginVertical: 5,
      alignItems: 'center',
      padding: 10,
  },
    cardContainer: {
      flex: 1, 
      width: '80%',
      justifyContent: 'center',
    },
    text: {
      color: '#707070',
      fontSize: 20,
    },
    artist: {
      color: '#707070',
      fontSize: 16,
    },
    icon: {
        marginRight: 30
    },
    arrow: {
        marginLeft: 'auto',
    },
});
 
export default Song;