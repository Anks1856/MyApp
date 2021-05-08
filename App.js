import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Greeting from './src/components/greeting'
import List from './src/components/list';


export default function App() {
  return (
    <View style={styles.container}>
      <Greeting style={styles.greet}></Greeting>
      <Button 
      onPress={()=>{console.log('button clicked!');}}
      title="click me to go some other page"
      ></Button>
      <Text>
        ________________________________________
      </Text>
      <TouchableOpacity
        onPress={()=>{console.log('list pressed');}}
      >
        <Text>Click me to go list </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  greet : {
    fontSize : 80
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
