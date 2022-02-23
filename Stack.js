// In App.js in a new project

import React from 'react';
import {View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
function HomeScreen(props) {
  return (
    <View>
      <Button
        title="Goto profile ->"
        onPress={() => {
          props.navigation.navigate(ProfileScreen)
        }}
      />
    </View>
  );
}
function ProfileScreen(props) {
  return (
    <View>
      <Button title="Profile Screen" onPress={()=>{
         props.navigation.navigate(HomeScreen)
      }}/>
    </View>
  );
}
const appNavigator = createNativeStackNavigator();

function Stack() {
  return (
    <NavigationContainer>
      <appNavigator.Navigator>
        <appNavigator.Screen name="Home" component={HomeScreen} />
        <appNavigator.Screen name="Profile" component={ProfileScreen} />

      </appNavigator.Navigator>
    </NavigationContainer>
  )
}
export default Stack;
  