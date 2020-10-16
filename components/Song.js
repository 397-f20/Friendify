import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {Avatar} from 'react-native-paper';

const Song = ({song}) => {
    return(
    <TouchableOpacity
    style={styles.songContainer}>
    <Avatar.Image
        size={30}
        source={require('../assets/favicon.png')}
        style={styles.icon}
    />
    <Text style={styles.text}>
        {song}
    </Text>
    <Image
        style={styles.arrow}
        source={require('../CSSExports/Carrot_s.png')}
    />
  </TouchableOpacity>
    )
};

  const styles = StyleSheet.create({
    cardContainer: {
      flex: 1, 
      width: '80%',
      justifyContent: 'center',
    },
    text: {
      color: '#707070',
      fontSize: 20,
    },
    icon: {
        marginRight: 30
    },
    arrow: {
        marginLeft: 'auto',
    },
});
 
export default Song;