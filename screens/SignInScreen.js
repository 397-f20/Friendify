import React, {useState } from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import firebase from '../shared/firebase';
import Form from '../components/Form';
import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn';


const db = firebase.firestore()

const SignInScreen = () => {
    const [signInError, setSignInError] = useState('');
    const [logInState, setLogInState] = useState(true);

    const handleSwitch = () => {
      return (
        setLogInState(!logInState)
      );
    };

    //Switching screens is handled by onAuthStateChange in App.js
    async function handleSignUp(values) {
      const { email, password } = values;
        firebase.auth().createUserWithEmailAndPassword(email, password).then((value) => {
          db.collection('users').doc(value.user.uid).set({
            email: email,
            password: password
            
          })
        }
        ).catch(error => {
            setSignInError(error.message);
          }); 
    };

    async function handleLogIn(values) {
      const { email, password } = values;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
            setSignInError(error.message);
          }); 
    };

    if (logInState) { 
      return (
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Friendify</Text>
              <LogIn handleLogIn = {handleLogIn} signInError = {signInError}> </LogIn>
              <TouchableOpacity key={"pls"} onPress = {() => handleSwitch()}>
                <Text>Sign Up</Text>
              </TouchableOpacity>
          </SafeAreaView>
      );
    }
    else {
      return (
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Friendify</Text>
              <SignUp handleSignUp = {handleSignUp} signInError = {signInError}> </SignUp>
              <TouchableOpacity onPress = {() => handleSwitch()}>
                <Text id="login" >Log In</Text>
              </TouchableOpacity>
          </SafeAreaView>
      );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#d3e6e1',
    },
    field: {
      height: 40,
      width: 300,
      padding: 5,
      backgroundColor: '#f8f8ff',
    },
    fieldContainer: {
      marginBottom: 20,
      width: 400,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 5,
    },
    label: {
      fontWeight: 'bold',
    },
    title: {
      fontSize: 50,
      padding: 20,
      color: 'darkgray'
    },
    logo: {
      width: 50,
      height: 40
    }
  });

export default SignInScreen;
