import React from 'react';

import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-paper';


const FriendPlaylistButton = ({playlist}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Avatar.Image
                size={50}
                source={require('../assets/favicon.png')}
                style={styles.icon}
            />
            <Text style={styles.text}>
                {playlist}
            </Text>
        </TouchableOpacity>
    );
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

export default FriendPlaylistButton;
