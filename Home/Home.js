import { SafeAreaView, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './HomeStyles';


export default function Home({navigation}){
    return(
        <View style={[styles.containers]}>
            <View style={[styles.pageTitle]}>
                <Text h1 style={[styles.text, {color:"#ffffff"}]}>Your Movie List</Text>
            </View>
            <View style={[styles.buttonContainer]}>
                <View style={[styles.navButtons]}>
                    <Button color="#e76f51" title='Go To Movie List' onPress={() => navigation.navigate('MovieList')} />
                </View>
            <View style={[styles.navButtons]}>
                <Button color="#e76f51" title='Go To Form' onPress={() => navigation.navigate('Form')} />
            </View>
            </View>
        <StatusBar style="auto" />
        </View>
    )
}