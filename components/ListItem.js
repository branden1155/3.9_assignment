import { StyleSheet, Text, View, Button } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

export default function ListItem({children}) {

    const navigation = useNavigation();

  return (
    
    <View>
        <Button title={children} onPress={() => navigation.navigate('Movie', item)}></Button>
    </View>

  );
}
