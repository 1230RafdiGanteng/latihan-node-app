import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar/NavBar"
import Notes from "./modules/Note/Notes"
import Login from "./modules/auth/Login"
import Registrasi from "./modules/auth/Registrasi"
import { useAuth } from "./modules/auth/Auth"

function App() {
    //panggil nilai isLoggedin dari context
    const { isLoggedin } = useAuth()

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<NavBar />}>
                        {isLoggedin ? (
                            //halaman Note akan terbuka ketika isLoggedin true
                            //
                            <>
                                <Route path={"/Note"} element={<Notes />} />
                                <Route path={"/Regist"} element={<Navigate to={"/Note"} />} />
                                <Route path={"/Login"} element={<Navigate to={"/Note"} />} />
                            </>
                        ) : (
                            <>
                                <Route path={"*"} element={<Navigate to={"/Login"} />} />
                                <Route path={"/Regist"} element={<Registrasi />} />
                                <Route path={"/Login"} element={<Login />} />
                            </>
                        )}
                    </Route>
                </Routes>

            </BrowserRouter >
        </>
    )
}

export default App