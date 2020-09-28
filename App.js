import React from 'react';
import HomeScreen from './screens/HomeScreen.js';
import FriendsScreen from './screens/FriendsScreen.js';
import {NavigationContainer} from '@react-navigation/stack';


const App = () => {
  return (
    <>
    <HomeScreen />
    <FriendsScreen />
    </>
  );
};

export default App;
