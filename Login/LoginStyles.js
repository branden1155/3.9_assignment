import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#2a9d8f'
    },
    buttons: {
        width: 100,
        marginHorizontal: 50,
        marginVertical: 10,
    },
    forms: {        
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        alignContent: 'center',
        alignItems: 'center'
        


    },
    navLinks: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        width: 300,
        backgroundColor: '#264653',
        borderColor: '#e76f51'
        
    },
    titles: {
        color: '#e9c46a',
        marginBottom: 10,
        
    },
    inputField: {
        position: 'relative',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
    },
    submitEnd: {
        marginTop: 10
    },
    submitButtons: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'center',
        marginHorizontal: 50,
        marginVertical: 10,
    },
    buttonBottom: {
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20,
    },
    pageTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 50,

    },

})
export default styles;
