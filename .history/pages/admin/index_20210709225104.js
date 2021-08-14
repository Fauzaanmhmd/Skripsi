import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";
import Link from 'next/link'


export default function Admin({ admin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
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
                        <input id="username" name="username" type="text" value={username} placeholder="Enter Username"></input>

                        <label for="psw"><b>Password</b></label>
                        <input id="passowrd" name="password" type="text" value={password} placeholder="Enter Password"></input>
                        <Link href={`admin/dashboard`}>
                            <button onSubmit={handleSubmit} className="input_btn">Login</button>
                        </Link>

                    </div>
                </form>
            </div>
        </Layout>
    )
}