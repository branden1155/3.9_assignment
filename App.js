import React, {useState, useEffect} from'react';
import { StatusBar } from 'expo-status-bar';
import { Switch, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthService from './services/auth.service';


import Movie from './Movie/Movie';
import Form from './Form/Form';
import MovieList from './MovieList/MovieList';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';



export default function App() {
  const Stack = createNativeStackNavigator();

  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, [])

  const logOut = () => {
    AuthService.logout();
  }
  

  return (
    <NavigationContainer>
      <View>

      </View>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Movie" component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  )}
