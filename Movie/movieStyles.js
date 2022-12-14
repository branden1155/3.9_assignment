import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        backgroundColor: '#264653', 
        height: '100%'
        
    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',


    },
    titles: {
        color: '#e9c46a',
        marginBottom: 10,
        
    },
    inputField: {
        justifyContent: 'center',
        textAlign: 'center',
        margin: 'auto',
        color: 'white',
        marginTop: 20,
    },
    submitEnd: {
    },
    submitButtons: {
        width: 100,
        marginHorizontal: 50,
        marginVertical: 10,
    },
    forms: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#264653'

    },
    textInput: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: 300,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        color: 'white',
        borderColor: '#e76f51'
        
    },
    buttonLinks: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        paddingBottom: 20,
        paddingTop: 20,


    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    editMovieTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e76f51',
        textAlign: 'center',
        width: 300,
        height: 50,
        marginBottom: 10,
        marginTop: 10,

    },
    editFormTitle:{
        textTransform: 'uppercase',
        fontWeight: 100, 
    },
    movieInfo: {
        backgroundColor: 'white',
        height: 30,
        margin: 10,
        marginBottom: 10,
        textAlign: 'center',
        justifyContent: 'center',
    },
});

export default styles;

