import axios from "axios";
import { http } from "./http";

export const handleLogin = async (email,password) => {
    const apiLogin = await axios
        .post(http + "auth/login", {
            email: email,
            password: password
        })
    .then((response) => {
        return response
    })
    .catch((err) => {
        return err.response
    })
    return apiLogin
}

export const setTokens = (token) => {
    localStorage.setItem('token',token)
}

export const getTokens = () => {
    return localStorage.getItem('token') ?? null;
}