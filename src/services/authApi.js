import axios from 'axios';

export const registerUser = async (userData) => {
    await axios.post("http://localhost:3000/users", userData);
}

export const checkUsername = async (username) => {
    const res = await axios.get (`http://localhost:3000/users?username=${username}`);
    return res.data;
} 

export const checkEmail = async (email) => {
    const res = await axios.get (`http://localhost:3000/users?email=${email}`);
    return res.data;
}

export const loginUser = async (username, password) => {
    const res = await axios.get(`http://localhost:3000/users?username=${username}&password=${password}`);
    return res.data;
}