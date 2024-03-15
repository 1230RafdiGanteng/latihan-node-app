import { Link, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./Konteks/Auth";
import { setTokens } from "./api";

export default function NavBar({token}) {
    const { isLoggedin } = useAuth()
    return (
        <>
            <div className="flex p-3 bg-[#11009E] justify-around mb-3 text-white">
                <h1 className="font-bold text-2xl">NotesApp</h1>
                {isLoggedin ? (<span>Udah Login</span>) : (<span>Belum Login</span>)}

                <nav className="">
                    {token !== null ? null : <Link className="ml-10" to={"/Registrasi"}> Register </Link>}

                    {token !== null ? null : <Link to={"/Login"}> Login</Link>}
                    <Link to={"/Note"}> Note</Link>
                    {token !== null ? null : < Link onClick={() => onLogout()} >Logout</Link>}
                </nav>
            </div>
            <Outlet />
        </>
    )
}