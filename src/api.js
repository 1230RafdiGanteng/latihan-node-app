import axios from "axios";
import { http } from "./http";

export const logins = async (email,password) => {
    const data = {
        email: email,
        password: password
    }
    const api = await axios.post((http + "auth/login"),data)
    .then((response) => {
        return response
    })
    .catch((err) => {
        return err.response
    })
    return api
}

export const setTokens = (token) => {
    localStorage.setItem('token',token)
}

export const getTokens = () => {
    return localStorage.getItem('token') ?? null;
}