import React, {useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, ScrollView } from 'react-native';
import * as Yup from 'yup';
import firebase from '../shared/firebase';
import Form from '../components/Form';
import App from '../App.js';

const db = firebase.firestore()
const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Please enter a valid email')
      .email()
      .label('Email'),
    password: Yup.string()
      .required()
      .min(6, 'Password must have at least 6 characters')
      .label('Password'),
    confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Confirmation password must match password'),
    spotifyid: Yup.string()
      .label('Spotify User ID'),
  });

const SignInScreen = () => {
    const [signInError, setSignInError] = useState(''); 
    async function handleSubmit(values) {
      const { email, password, confirm } = values;
      if (confirm) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((value) => {
          db.collection('users').doc(value.user.uid).set({
            email: email
          })
        }
        ).catch(error => {
            setSignInError(error.message);
          });
        return (<App />)
      } else {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
            setSignInError(error.message);
            return (
              <App />
            );
          });
      }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Form
                initialValues={{
                email: '',
                password: '',
                confirm: '',
                }}
                validationSchema={validationSchema}
                onSubmit={values => handleSubmit(values)}
            >
                <Form.Field
                    name="email"
                    leftIcon="email"
                    placeholder="Enter email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <Form.Field
                    name="password"
                    leftIcon="lock"
                    placeholder="Enter password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                />
                <Form.Field
                    name="confirm"
                    leftIcon="lock"
                    placeholder="Confirm password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                />
                <Form.Field
                    name="spotifyid"
                    placeholder="Enter your Spotify ID (optional)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="username"
                />
                <Form.Button title={values => values.confirm ? 'Sign up' : 'Log in'} />
                {<Form.ErrorMessage error={signInError} visible={true} />}
            </Form>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ccccb3',
    },
    field: {
      height: 40,
      width: 300,
      padding: 5,
      backgroundColor: 'white',
    },
    fieldContainer: {
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    label: {
      fontWeight: 'bold',
    }
  });

export default SignInScreen;