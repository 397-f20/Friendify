import React, {useState } from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import * as Yup from 'yup';
import Form from '../components/Form';

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

const SignUp = ({handleSignUp, signInError}) => {
    return (
            <Form
                initialValues={{
                email: '',
                password: '',
                confirm: '',
                }}
                validationSchema={validationSchema}
                onSubmit={values => handleSignUp(values)}
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
                    placeholder="Confirm password (if first time user)"
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
                    textContentType="username"
                />
                <Form.Button title= 'Sign up' />
                {<Form.ErrorMessage error={signInError} visible={true} />}
            </Form>
    );
};

export default SignUp;