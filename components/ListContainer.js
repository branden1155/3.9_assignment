import React, { useState, useEffect } from'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native';
import  { useNavigation } from '@react-navigation/native';


export default function ListContainer({data}) {

  const navigation = useNavigation();

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = 'https://crudappbranden.herokuapp.com/api/v1/list'

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
    <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Movie', {id: item._id})}>
            <Text>{item.movieName}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item._id}
      />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
