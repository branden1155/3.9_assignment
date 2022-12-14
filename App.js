import React, {useState} from'react';
import { StatusBar } from 'expo-status-bar';
import { Switch, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './appStyles'

import Movie from './Movie/Movie';
import Form from './Form/Form';
import MovieList from './MovieList/MovieList';

function HomeScreen({navigation}){

  return (
    <View style={[styles.containers]}>
      <View style={[styles.pageTitle]}>
        <Text h1 style={[styles.text, {color:"#ffffff"}]}>Your Movie List</Text>
      </View>
      <View style={[styles.buttonContainer]}>
        <View style={[styles.navButtons]}>
          <Button color="#e76f51" title='Go To Movie List' onPress={() => navigation.navigate('MovieList')} />
        </View>
        <View style={[styles.navButtons]}>
          <Button color="#e76f51" title='Go To Form' onPress={() => navigation.navigate('Form')} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
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
