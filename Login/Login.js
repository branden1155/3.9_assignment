import { SafeAreaView, FlatList, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
import styles from './LoginStyles';
import AuthService from '../services/auth.service';


export default function Login({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigation();

    const handleLogin = async (e) => {
        try {
          await AuthService.login(email, password).then(
            response => {
              navigate("/Home")
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <View style={[styles.container]}>
          <View style={[styles.pageTitle]}>
                <Text h1 style={[styles.text, {color:"#ffffff"}]}>Log-in</Text>
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
            onChangeText={(text) => setEmail({...email, email: text})}
            placeholder={"Password..."}
            placeholderTextColor='#ffffff'
            style={[{color: 'white'}]}
          />
          </View>
        </View>
        <View style={[styles.submitEnd]}>
          <View style={[styles.submitButtons]}>
            <View style={[styles.buttonBottom]} >
              <Button success color="#e76f51" title='Login' onPress={() => {handleLogin(), navigation.navigate('Home', {replace: true})}} />
            </View>
            <View style={[styles.buttonBottom]} >
              <Button success color="#e76f51" title='Signup' onPress={() => {navigation.navigate('Signup')}} />
            </View>
            <View style={[styles.buttonBottom]} >
              <Button success color="#e76f51" title='Home' onPress={() => {navigation.navigate('Home')}} />
            </View>
          </View>
        </View>
      </View>
    </View>
    )
}