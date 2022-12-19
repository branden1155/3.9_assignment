import { SafeAreaView, FlatList, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import  { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
import styles from './signupStyles';
import AuthService from '../services/auth.service';


export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigation();

    const handleSignup = async (e) => {
        try {
          await AuthService.signup(email, password).then(
            response => {
              navigate("/Home")
              console.log()
            })
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <View style={[styles.container]}>
          <View style={[styles.pageTitle]}>
                <Text h1 style={[styles.text, {color:"#ffffff"}]}>Sign-up</Text>
            </View>
      <View style={[styles.forms]}>
        <View style={[styles.inputField]}>
          <Text style={[styles.titles]}>Username:</Text>
          <View style={[styles.textInput]}>
            <TextInput
              defaultValue={email.email}
              onChangeText={(text) => setEmail({...email, email: text})}
              placeholder={"Username..."}
              placeholderTextColor='#ffffff'
              style={[{color: 'white'}]}
            />
          </View>
        </View>
        <View style={[styles.inputField]}>
          <Text style={[styles.titles]}>Password:</Text>
          <View style={[styles.textInput]}>
          <TextInput
            defaultValue={password.password}
            onChangeText={(text) => setPassword({...password, password: text})}
            placeholder={"Password..."}
            placeholderTextColor='#ffffff'
            style={[{color: 'white'}]}
          />
          </View>
        </View>
        <View style={[styles.submitEnd]}>
          <View style={[styles.submitButtons]}>
            <View style={[styles.buttonBottom]} >
              <Button success color="#e76f51" title='Sign-up' onPress={() => {handleSignup(); navigation.navigate('Home', {replace: true})}} />
            </View>
          </View>
        </View>
      </View>
    </View>
    )
}