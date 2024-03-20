import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Notes from "./Notes"
import Login from "./Pages/Login"
import Registrasi from "./Pages/Registrasi"
import { useAuth } from "./Konteks/Auth"

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