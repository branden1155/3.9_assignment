import React, {useState, useEffect } from'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import ListItem from './components/ListItem';
import { useParams } from 'react-router-dom';
import  { useNavigation, useRoute } from '@react-navigation/native';

export default function Movie({ data }) { 

  const navigation = useNavigation();

  const route = useRoute();
  const { id } = route.params;

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const [values, setValues] = useState({
    movieName: '',
    movieGenre: '',
    movieRating: ''
  })


  const API_BASE = 'https://crudappbranden.herokuapp.com/api/v1/list'

  let ignore = false;
  useEffect(() => {
    if(!ignore){
      getMovies();
    }

    return () => {
      ignore = true;
    }
  }, [])

  const getMovies = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/${id}`)
        .then(res => res.json())
        .then(data => {
          setValues({
            movieName: data.movieName,
            movieGenre: data.movieGenre,
            movieRating: data.movieRating
          })
          
        })
    } catch (error) {
      setError(error.message || "Error")
    } finally {
      setLoading(false)
    }
  }

  const removeMovie = async () => {
    try {
      await fetch(`${API_BASE}/${id}`,{
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
            setMovies(data);
            navigate("/dashboard", {replace: true});
        })
    } catch (error) {
      setError(error.message || "Error")
    } finally {
      setLoading(false)
    }
  }

  const updateMovie = async () => {
    try {
      await fetch(`${API_BASE}/${id}`,{
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then(res => res.json())
    } catch (error) {
      setError(error.message || "Error")
    } finally {
      setLoading(false)
    }
  }


  return (
    <SafeAreaView>
      <Text>Catagories</Text>
      <Button title='Go To Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go To MovieList' onPress={() => navigation.navigate('MovieList')} />
      <Text>{id}</Text>
    </SafeAreaView>
  )
}