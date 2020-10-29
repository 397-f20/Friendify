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
      const usersRef = db.collection('users');

      usersRef
        .get()
        // this doesn't work yet
        .then((querySnapshot) => {
              querySnapshot.docs.forEach((doc) => {
                if (auth.uid === doc.id) {
                  setUser(auth.uid)
                  return
                }
              })
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
