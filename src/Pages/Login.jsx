import { useState } from "react"

function LoginPages(onLogin){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = async () => {
        const apiLogin = await Logins(email,password)
        console.log(apiLogin.data.data.accesToken)
        if(apiLogin.status === 200){
            onLogin(apiLogin.data.data.accesToken)
        }
    }

    return(
        <section className="flex items-center justify-center">
        <div className="flex items-center justify-center text-xl bg-[#0A1D56] text-white w-[500px] rounded-xl p-[50px]">
            <div className="font-serif">
                <div className="text-2xl">
                    <h1>Login</h1>
                </div>
                <div className="mt-3 text-left">
                    <label htmlFor="nama">Email</label>
                    <input type="nama" placeholder="Silahkan nama kamu diisi" className="text-black block" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mt-3 text-left">
                    <label htmlFor="email">Password</label>
                    <input type="password" placeholder="Silahkan email kamu diisi" className="text-black block" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="bg-[#F2F597] text-black rounded-xl mt-5">
                    <button>Register</button>
                </div>
            </div>
        </div>
        </section>
    )
}

export default LoginPages