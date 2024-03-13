function RegisPages() {
    return (
        <section className="flex items-center justify-center">
        <div className="flex items-center justify-center text-xl bg-[#0A1D56] text-white w-[500px] rounded-xl p-[50px]">
            <div className="font-serif">
                <div className="text-left text-2xl">
                    <h1>Registrasi</h1>
                </div>
                <div className="mt-3 text-left">
                    <label htmlFor="nama">Nama</label>
                    <input type="nama" placeholder="Silahkan nama kamu diisi" className="text-black block" />
                </div>
                <div className="mt-3 text-left">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Silahkan email kamu diisi" className="text-black block" />
                </div>
                <div className="mt-3 text-left">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Silahkan password kamu diisi" className="text-black block" />
                </div>
                <div className="bg-[#F2F597] text-black rounded-xl mt-5">
                    <button>Register</button>
                </div>
            </div>
        </div>
        </section>
    )
}

export default RegisPages