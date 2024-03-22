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

export const removeTokens = () => {
    return localStorage.removeItem('token')
}

export const tampilkan = async () => {
    const token = getTokens();
    const notes = await axios
        .get(http + "notes", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response;
        })
        .catch((eror) => {
            return eror.response;
        });
    return notes;
};

export const addNote = async (title, content) => {
    const token = getTokens();
    const noteBaru = {
        title: title,
        content: content,
        writer: 1,
    };
    const add = await axios
        .post(http + "notes", noteBaru, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response;
        })
        .catch((eror) => {
            return eror.response;
        });
    return add;
};

export const deleteNote = async (id) => {
    const token = getTokens();
    const deletes = await axios
        .delete(http + "notes/" + id, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response;
        })
        .catch((eror) => {
            return eror.response;
        });
    return deletes;
};

export const editNote = async (id, title, content, writer) => {
    const token = getTokens();
    const edits = await axios
        .put(
            http + "notes/" + id,
            { title, content, writer },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
            return response;
        })
        .catch((eror) => {
            return eror.response
        });
    return edits;
};

export const Register = async (name, email, password) => {
    const regis = axios.post((http + "auth/register"), {
        name: name,
        email: email,
        password: password
    })
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error.response
        })
    return regis
}