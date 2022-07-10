import axios from "axios"
import { API_URL } from "../config/Constants";

export const logIn = async (user) => {
    const response = await axios.post(API_URL + '/api/v1/admin/login',{
        email: user.email,
        password:user.password
    });
    console.log(user)
    return response.data;
}

export const forgetPass = async (email) => {
    const response = await axios.post(API_URL + '/api/v1/admin/forgetpass', {
        email:email,
    });
    return response.data;
}


