import axios from 'axios';
import authHeader from './auth-header'


const API_URL = "https://crudappbranden.herokuapp.com/api/v1/auth";

const getAllPrivateMovies = () => {
    return axios.get(API_URL, {headers: authHeader()})
}

const listService = {
    getAllPrivateMovies
}

export default listService;