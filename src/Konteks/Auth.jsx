import { createContext, useContext, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { handleLogin } from "../api"

// Nilai default 
const initialAuthState = {
    isLoggedin: false,
    doLogin: () => {},
    doLogout: () => {}
}

// buat context
const AuthContext = createContext(initialAuthState)

// buat custom book
const useAuth = () => {
    return useContext(AuthContext)
}

// buat provider
const AuthProvider = ({children}) => {
    // state
    const [isLoggedin, setIsLoggedin] = useState(false)
    
    // fucntion
    const doLogin = async (email, password) => {
        // memanggil api dengan data email & password
        console.log("Akan memanggil login dengan", email, password)
        // memanggil api dengan axios
        const apiResult = await handleLogin(email, password)
        console.log(apiResult)

        console.log("tes kepanggil". isLoggedin)
        setIsLoggedin(true)
    }

    const doLogout = () => {
        setIsLoggedin(false)
    }
    // return provider
    return(
        <AuthContext.Provider value={{isLoggedin, doLogin, doLogout}}>
            {children}
        </AuthContext.Provider>
    )
}
 

// export provider & book
export {AuthProvider, useAuth}