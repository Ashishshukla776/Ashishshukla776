
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import Home from './Components/Home';
//import Login from './Components/Login'
//import AboutScreen from './Components/AboutScreen';
//import Profile from './Components/Profile';
const Tab = createBottomTabNavigator();
import Hook from './Components/Hook/Hook';
import Count from './Components/Hook/Count';
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" 
        component={Hook} />
        <Tab.Screen name='Feature'
        component={Count}/>
        
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}
