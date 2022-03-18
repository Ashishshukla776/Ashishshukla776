import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={Styles.homeStyle}>
      <Text
        onPress={() => navigation.navigate('Login')}
        style={Styles.mainItem}>
        Login
      </Text>
      <Text style={Styles.mainItem}>List</Text>
      <Text style={Styles.mainItem}>Register</Text>

    </View>
  );
}
const Styles = StyleSheet.create({
  homeStyle: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  
  mainItem: {
    backgroundColor:'green',
    width: 150,
    height: 60,
    margin: 2,
    color: 'red',
    lineHeight: 50,
    textAlign: 'center',
    fontSize: 30,
  }
  
});
