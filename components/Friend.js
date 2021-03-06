import React from 'react';

import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Avatar} from 'react-native-paper';


const Friend = ({displayName, friendID, navigation, img}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Playlists', {displayName, friendID})}>
            <Avatar.Image
                size={30}
                source={img.length !== 0 ? {uri: img[0].url} : require('../assets/favicon.png')}
                style={styles.icon} 
            />
            <Text style={styles.text}>
                {displayName ? displayName : false}
            </Text>
            <Image
                style={styles.arrow}
                source={require('../CSSExports/Carrot_s.png')}
            />
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

export default Friend;
