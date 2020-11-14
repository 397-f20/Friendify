import React, {useState } from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import Form from './Form';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Please enter a valid email')
      .email()
      .label('Email'),
    password: Yup.string()
      .required()
      .min(6, 'Password must have at least 6 characters')
      .label('Password'),
});

const LogIn = ({handleLogIn, signInError}) => {
    return (
        <Form
            initialValues={{
            email: '',
            password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => handleLogIn(values)}
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
        <Form.Button title= 'Log in' />
        {<Form.ErrorMessage error={signInError} visible={true} />}
     </Form>
    );
};

export default LogIn;
