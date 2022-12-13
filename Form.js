import React, {useState} from'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

export default function Form() { 

    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Form</Text>
      <Button title='Go To Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go To MovieList' onPress={() => navigation.navigate('MovieList')} />
    </SafeAreaView>
  )
}