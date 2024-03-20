import { useState } from "react";
import { handleLogin, setTokens } from "../api"
import { useAuth } from "../Konteks/Auth";

function Login({ onLogin }) {
    const { doLogin } = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [token, setTokens] =useState()

    // const handleClick = async () => {
    //     doLogin()
    // }

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleClick = async () => {
    //     const login = await HandlerLogin(email, password);
    //     if(login.status === 200) {
    //         setEmail("")
    //         setPassword("")
    //         setTokens(login.data.data.accessToken)
    //         onLogin(login.data.data.accessToken)
    //         alert(login.data.messege)
    //     } else {
    //         const {email=[],password=[]} = login.data.errors;
    //         const arr = [...email,...password];
    //         alert(err.join("\n"))
    //     }
    // }

    const handleLogin = () => {
        doLogin(email, password)
        console.log("Berhasil Login")
    }

    return (
        <>
            <section className=" flex items-center justify-center opacity-85">

                <div className="bg-blue-200 w-[500px] p-[50px] mt-10 items-center justify-center rounded-2xl bg-[url('wrapper.png')] bg-cover bg-center bg-no-repeat shadow-xl ">

                    <div className="mt-1">
                        <h1 className="">Login</h1>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-sm p-1 text-sm mt-1"
                            type="email"
                            name="" id="content"
                            placeholder="Email"></input>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-sm p-1 text-sm mt-1"
                            type="password"
                            name=""
                            id="content"
                            placeholder="Password"></input>
                    </div>
                    {/* <button className='bg-white pt-1 pb-1 pl-2 pr-2 rounded-lg mt-2 shadow-sm hover:shadow-lg hover:bg-slate-100 hover:bg-contain' onClick={HandlerLogin} >Login</button> */}
                    <button
                        className='bg-white pt-1 pb-1 pl-2 pr-2 rounded-lg mt-2 shadow-sm hover:shadow-lg hover:bg-slate-100 hover:bg-contain' onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </section>
        </>
    )
}

export default Login
