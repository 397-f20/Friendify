import React from 'react';

import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import firebase from '../shared/firebase';

const Logout = () => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.button} onPress={() => firebase.auth().signOut()}>
                <Text style={styles.text}>
                    Logout
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    button: {
      borderRadius: 15,
      margin: 13,
      height: 40,
      padding: 10,
      paddingTop: 11,
      minWidth: 80,
      maxWidth: 80,
      backgroundColor: '#d8d8d8',
      borderColor: '#aec6c2',
    },
    text:{
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
    },
  });

export default Logout;
