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

    // const Login = () => {
    //     var username = document.forms["myForm"]["username"].value;
    //     var password = document.forms["myForm"]["password"].value;
    //     if (username == "user" && password == "123") {
    //         return true;
    //     }
    //     else if (username == "" || password == "") {
    //         alert("Masukkan username dan password anda");
    //         return false;
    //     }
    //     else {
    //         alert("Username atau password anda salah");
    //         return false;
    //     }
    // }
    // const username = prompt("")
    const [showModal, setShowModal] = useState(false)
    return (
        <Layout>
            <div className="form_login">
                <div className="img_container">
                    <img src="../img/img_avatar2.png" alt="Avatar" className="img_avatar"></img>
                </div>

                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input name="namapengguna" type="text" placeholder="Enter Username"></input>

                    <label for="psw"><b>Password</b></label>
                    <input name="password" type="text" placeholder="Enter Password"></input>
                    <Link href={`admin/dashboard`}>
                        <button onClick={Login} className="input_btn">Login</button>
                    </Link>

                </div>
            </div>
        </Layout>
    )
}