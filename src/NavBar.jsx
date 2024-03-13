import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div className="flex p-3 bg-[#11009E] justify-around mb-3 text-white">
                <h1 className="font-bold text-2xl">NotesApp</h1>
                <nav className="flex mx-10 ">
                    <Link to={"/notes"} className="p-2 text-xl hover:text-black">Notes</Link>
                    <Link to={"/regist"} className="p-2 text-xl hover:text-black">Registrasi</Link>
                    <Link to={"/login"} className="p-2 text-xl hover:text-black">Login</Link>
                </nav>
            </div>
            <Outlet/>
        </>
    )
}