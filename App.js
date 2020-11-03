import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import firebase from './shared/firebase';
import 'firebase/database';
import SignInScreen from './screens/SignInScreen';
import UserContext from './utils/userContext';

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
      <UserContext.Provider value={user}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </UserContext.Provider>
    );
  };
};

export default App;
