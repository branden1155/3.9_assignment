import React, {useState} from'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import ListContainer from './components/ListContainer';
import  { useNavigation } from '@react-navigation/native';

export default function MovieList() { 

  const navigation = useNavigation();


  return (
    <SafeAreaView>
      <Text>Movie List</Text>
      <Button title='Go To Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go To Form' onPress={() => navigation.navigate('Form')} />
      <ListContainer />
    </SafeAreaView>
  );
}