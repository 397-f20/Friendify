import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import firebase from './shared/firebase';
import 'firebase/database';
import SignInScreen from './screens/SignInScreen';

const db = firebase.firestore();

const App = () => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  useEffect(() => {
    if (auth && auth.uid) {
      const userRef = db.collection('users').doc(auth.uid);
      userRef
        .get()
        // this doesn't work yet
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
              userRef.set({
                email: auth.email
              })
            } else {
              console.log(querySnapshot.doc)
            };
        });
    } else {
      setUser(null);
    }
  }, [auth]);

  if (!user) {
    return (
      <SignInScreen />
    )
  } else {
    return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    );
  };
};

export default App;
