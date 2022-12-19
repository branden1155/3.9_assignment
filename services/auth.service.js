import axios from 'axios';

const API_URL ="/auth"
const API_BASE = "https://crudappbranden.herokuapp.com/api/v1"

const signup = (email, password) => {
    return axios.post(`${API_BASE}${API_URL}`, {
        email, password,
    })
    .then(response => {
        if(response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    })
}

const login = (email, password) => {
    return axios.post(`${API_BASE}${API_URL}/signin`, {
        email, password
    })
    .then(response => {
        console.log()
        if(response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    })
}

const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const authService = {
    signup,
    login,
    logout,
    getCurrentUser
}

export default authService;