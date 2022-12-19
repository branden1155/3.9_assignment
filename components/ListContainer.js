import React, { useState, useEffect } from'react';
import { StyleSheet, FlatList, View, Button, Text, RefreshControl } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import styles from './listContainerStyles'

import AuthService from '../services/auth.service'
import ListService from '../services/list.service'



export default function ListContainer({data}) {

  const navigation = useNavigation();

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = 'https://crudappbranden.herokuapp.com/api/v1/list'

  let ignore = false;
  useEffect(() => {
    ListService.getAllPrivateMovies().then(
      response => {
        setMovies(response.data);
      },
      (error) => {
        console.log("Secured Page Error:", error.response)
        if(error,response && response.status === 403) {
          AuthService.logout();
          navigation.navigate('Login');
        }
      }
    )
    // if(!ignore){
    //   getMovies();
    // }
    // const reload = navigation.addListener('focus', () => {
    //   console.log('reloaded!');
    //   getMovies();
    // });

    // return () => {
    //   ignore = true;
    //   reload();
    // }
    
  }, [navigation]);

  const getMovies = async () => {

  setLoading(true);
     try {
       await fetch(`${API_URL}`)
         .then(res => res.json())
         .then(data => {
           setMovies(data)
         })
     } catch (error) {
       setError(error.message || "Error")
     } finally {
       setLoading(false)
     }
   }

  return (
    <View style={[styles.container]}>
      <FlatList
          style={[styles.movieListContainer]}
          data={movies}
          renderItem={({ item }) => (
            <View style={[styles.movieButtons]}>
              <View style={[styles.movieButtonitem]}><Button color= "#e76f51" title={item.movieName} onPress={() => navigation.navigate('Movie', {id: item._id})} /></View>
            </View>
            
          )}
          keyExtractor={item => item._id}
      />
    </View>

  );
}
