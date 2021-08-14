import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";
import Link from 'next/link'


export default function Admin({ admin }) {
    const Login = () => {
        var done = 0;
        var namapengguna = document.login.namapengguna.value;
        namapengguna = username.toLowerCase();
        var password = document.login.password.value;
        password = password.toLowerCase();
        if (namapengguna == "fauzan" && password == "fauzan") { alert("selamat anda berhasil"); }
        else
            if (done == 0) { alert("invalid login"); }
    }

    const [showModal, setShowModal] = useState(false)
    return (
        <Layout>
            <div className="form_login">
                <form action="#" method="POST" onSubmit="validasi()">
                    <div className="img_container">
                        <img src="../img/img_avatar2.png" alt="Avatar" className="img_avatar"></img>
                    </div>

                    <div className="container">
                        <label for="uname"><b>Username</b></label>
                        <input name="namapengguna" type="text" placeholder="Enter Username"></input>

                        <label for="psw"><b>Password</b></label>
                        <input name="password" type="text" placeholder="Enter Password"></input>
                        <Link href={`admin/dashboard`}>
                            <button onSubmit={validasi} className="input_btn">Login</button>
                        </Link>

                    </div>
                </form>
            </div>
        </Layout>
    )
}