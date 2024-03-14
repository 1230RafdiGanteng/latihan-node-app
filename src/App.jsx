import Note from "./Notes"
import RegisPages from "./Pages/Registrasi"
import LoginPages from "./Pages/Login"
import NavBar from "./NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import { useEffect, useState } from "react"

function App() {
//ngedit
    // const [token,setToken] = useState(null)

    // const handleLogin = (token) => {
    //     setToken(token)
    // }

    // useEffect(() => {
    //     const token = getToken()
    //     setToken(token)
    // })

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<NavBar/>}>
                    <Route path={"/notes"} element={<Note/>}/>
                    <Route path={"/regist"} element={<RegisPages/>}/>
                    <Route path={"/login"} element={<LoginPages/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </>

    )
}

export default App