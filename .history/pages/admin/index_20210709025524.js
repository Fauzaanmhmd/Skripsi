import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";
import Link from 'next/link'


export default function Admin({ admin }) {
    const validasi = () => {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username != "fauzan" && password != "fauzan") {
            return true;
        }
        else {
            alert('password salah');
        }
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
                        <input name="username" type="text" placeholder="Enter Username"></input>

                        <label for="psw"><b>Password</b></label>
                        <input name="password" type="text" placeholder="Enter Password"></input>
                        <Link href={`admin/dashboard`}>
                            <input type="submit" className="input_btn">Login</input>
                        </Link>

                    </div>
                </form>
            </div>
        </Layout>
    )
}