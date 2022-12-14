import React, {useState, useEffect} from'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import styles from './formStyle'

export default function Form() { 

    const navigation = useNavigation();

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
      await fetch(`${API_BASE}`)
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

  const postMovie = async () => {
    try {
      await fetch(`${API_BASE}`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(() => getMovies())
    } catch (error) {
      setError(error.message || "Error")
    } finally {
      setLoading(false)
    }
  }

    const handleSubmit = (e) => {
        postMovie();
    }

  return (
    <View style={[styles.container]}>
      <View style={[styles.navLinks]}>
        <View style={[styles.buttons]}>
          <Button color="#e76f51" title='Back' onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
      <View style={[styles.forms]}>
        <View style={[styles.inputField]}>
          <Text style={[styles.titles]}>Movie Name:</Text>
          <View style={[styles.textInput]}>
            <TextInput
              value={values.movieName}
              onChangeText={(text) => setValues({...values, movieName: text})}
              placeholder={"Movie Name..."}
              placeholderTextColor='#ffffff'
              style={[{color: 'white'}]}
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
            style={[{color: 'white'}]}
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
              style={[{color: 'white'}]}
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