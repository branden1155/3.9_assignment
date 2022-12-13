import React, {useState} from'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, StyleSheet, Text, Button } from 'react-native';
import Heading from './components/Heading';
import  { NavigationContainer } from '@react-navigation/native';
import  { createNativeStackNavigator } from '@react-navigation/native-stack';

import Movie from './Movie';
import Form from './Form';
import MovieList from './MovieList';

function HomeScreen({navigation}){

  return (
    <SafeAreaView>
      <Button title='Go To Movie List' onPress={() => navigation.navigate('MovieList')} />
      <Button title='Go To Form' onPress={() => navigation.navigate('Form')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Movie" component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  )}
