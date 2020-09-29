import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './screens/HomeScreen.js';
import FriendsScreen from './screens/FriendsScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home'}}
        />
        <Drawer.Screen name="FriendsScreen"
          component={FriendsScreen}
          options={{ title: 'Friends'}}
        />
     </Drawer.Navigator> 
    </NavigationContainer>
  );
};

export default App;
