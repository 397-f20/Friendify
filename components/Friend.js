import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import PlaylistHomeScreen from '../screens/PlaylistHomeScreen';
import { Avatar } from 'react-native-paper';


const Friend = ({friend, setFriend}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => setFriend(friend)}>
            <Avatar.Image
                size={30}
                source={require('../assets/favicon.png')}
                style={styles.icon}
            />
            <Text style={styles.text}>
                {friend}
            </Text>
            <Image
                style={styles.arrow}
                source={require('../CSSExports/Carrot_s.png')}
            />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
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
    text: {
        color: '#707070',
        fontSize: 20,
    },
    icon: {
        marginRight: 30
    },
    arrow: {
        marginLeft: 'auto',
    }
  });

export default Friend;