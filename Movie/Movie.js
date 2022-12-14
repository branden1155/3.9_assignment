import React, {useState, useEffect } from'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import  { useNavigation, useRoute, goBack } from '@react-navigation/native';
import styles from './movieStyles'

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
            navigation.navigate("Home", {replace: true});
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

const handleSubmit = (e) => {
    updateMovie();
    
}


  return (
    <View style={[styles.container]}>
      <View style={[styles.infoContainer]}>
        <View style={[styles.buttonContainer]}>
          <View style={[styles.buttonLinks]}>
            <Button color="#e9c46a" title='Back To Movie List' onPress={() => navigation.navigate('MovieList')} />
          </View>
          <View style={[styles.buttonLinks]}>
            <Button color="#e9c46a" title='Delete Movie' onPress={() => removeMovie()} />
          </View>
        </View>
        <View>
          <Text style={[styles.editMovieTitle, {color: 'white'}]}>Movie Info</Text>
          <View style={[styles.movieInfo]}>
            <Text style={[{color: 'black', textTransform: 'uppercase'}]}>Movie Name:  <Text style={[{textTransform: 'none', fontStyle:'italic'}]}>{values.movieName}</Text></Text>
          </View>
          <View style={[styles.movieInfo]}>
            <Text style={[{color: 'black', textTransform: 'uppercase'}]}>Movie Genre:  <Text  style={[{textTransform: 'none', fontStyle:'italic'}]}>{values.movieGenre}</Text></Text>
          </View>
          <View style={[styles.movieInfo]}>
            <Text style={[{color: 'black', textTransform: 'uppercase'}]}>Movie Rating:  <Text  style={[{textTransform: 'none', fontStyle:'italic'}]}>{values.movieRating}</Text></Text>
          </View>
        </View>
      </View>
      <View style={[styles.forms]}>
        <View style={[styles.editFormTitle]}>
          <Text style={[styles.editMovieTitle, {color:"white"}]}>Edit Movie</Text>
        </View>
        <View style={[styles.inputField]}>
          <Text style={[styles.titles]}>Movie Name:</Text>
          <View style={[styles.textInput]}>
            <TextInput
              value={values.movieName}
              onChangeText={(text) => setValues({...values, movieName: text})}
              placeholder={"Movie Name..."}
              placeholderTextColor='#ffffff'
            />
          </View>
        </View>
        <View style={[styles.inputField]}>
          <Text style={[styles.titles]}>Movie Genre:</Text>
          <View style={[styles.textInput]}>
          <TextInput
            value={values.movieGenre}
            onChangeText={(text) => setValues({...values, movieGenre: text})}
            placeholder={"Movie Genre..."}
            placeholderTextColor='#ffffff'
          />
          </View>
        </View>
        <View style={[styles.inputField]}>
          <Text style={[styles.titles]}>Movie Rating:</Text>
          <View style={[styles.textInput]}>
            <TextInput
              value={values.movieRating}
              onChangeText={(text) => setValues({...values, movieRating: text})}
              placeholder={"Movie Rating..."}
              placeholderTextColor='#ffffff'
            />
          </View>
        </View>
        <View style={[styles.submitEnd]}>
          <View style={[styles.submitButtons]}>
            <Button success color="#e76f51" title='Submit' onPress={() => {handleSubmit(); navigation.navigate('Home', {replace: true})}} />
          </View>
        </View>
      </View>
    </View>
  )
}