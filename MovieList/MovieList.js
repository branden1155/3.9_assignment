import React, {useState} from'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import ListContainer from '../components/ListContainer';
import  { useNavigation } from '@react-navigation/native';
import styles from './movieListStyles'

export default function MovieList() { 

  const navigation = useNavigation();


  return (
    <View style={[styles.container]}>
      <View stlye={[styles.buttonContainer]}>
        <View style={[styles.buttonLinks]}>
          <Button color="#e9c46a" title='Go To Home' onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
      <ListContainer style={[styles.list]}/>
    </View>
  );
}