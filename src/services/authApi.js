import axios from 'axios';

export const registerUser = async (userData) => {
    await axios.post(" https://auth-system-1viu.onrender.com/users", userData);
}

export const checkUsername = async (username) => {
    const res = await axios.get (` https://auth-system-1viu.onrender.com/users?username=${username}`);
    return res.data;
} 

export const checkEmail = async (email) => {
    const res = await axios.get (` https://auth-system-1viu.onrender.com/users?email=${email}`);
    return res.data;
}

export const loginUser = async (username, password) => {
    const res = await axios.get(` https://auth-system-1viu.onrender.com/users?username=${username}&password=${password}`);
    return res.data;
}