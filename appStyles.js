import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containers: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#2a9d8f',
        height: '100%',
        
        
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 45,
    },
    navButtons: {
        margin: 'auto',
        padding: 10,
        width: 300,
    },
    pageTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 50,

    },
    text: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }

})

export default styles;
