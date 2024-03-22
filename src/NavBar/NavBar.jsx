import { Link, Outlet } from "react-router-dom"
import { useAuth } from "../modules/auth/Auth"

export default function Navbar() {

    const { isLoggedin, doLogout } = useAuth()

    return (
        <>
            <div className="flex justify-around py-6 text-white bg-sky-700">

                {isLoggedin ? (
                    <span className="font-bold">Sudah Login</span>
                ) : (
                    <span className="font-bold">Belum Login</span>
                )}

                <nav className="flex gap-12">
                    {isLoggedin ? (
                        //menampilkan menu Note dan Logout ketika isLoggedin true
                        <>
                            <Link to={"/Note"} className=" hover:text-sky-300 transition-all active:text-sky-300 focus:text-sky-300 ">Note</Link>
                            <Link onClick={() => doLogout()}><span className="text-white font-sans hover:text-slate-300">Logout</span></Link>
                        </>
                    ) : (
                        //menu Login dan Registrasi tidak tampil ketika isLoggedin true 
                        <>
                            <Link to={"/Registrasi"}><span className=" hover:text-sky-300 transition-all active:text-sky-300 focus:text-sky-300 ">Regist</span></Link>
                            <Link to={"/Login"}><span className=" hover:text-sky-300 transition-all active:text-sky-300 focus:text-sky-300 ">Login</span></Link>
                        </>
                    )}


                </nav>
            </div>
            <Outlet />
        </>
    )
}