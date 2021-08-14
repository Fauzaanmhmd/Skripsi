import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";

const App = () => {
    const router = useRouter();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [invalidMessage, setInvalidMessage] = useState('')
    const loginCredentials = () => {
        console.log(username);
        console.log(password);
    }

    const handleOnChangeUsername = (e) => setUsername(e.target.value)
    const handleOnChangePassword = (e) => setPassword(e.target.value)
    const handleSubmit = (e) => {
        if (username !== "fauzan" && password !== "fauzan") {
            setInvalidMessage('Please Enter Valid Username');
        }

        else {
            router.push('admin/dashboard')
        }


        e.preventDefault();
        loginCredentials();
    }

    return (
        <Layout>
            <div className="form_login">
                <form action="#" method="POST" onSubmit={handleSubmit}>
                    <div className="img_container">
                        <img src="../img/img_avatar2.png" alt="Avatar" className="img_avatar"></img>
                    </div>

                    <div className="container">
                        {invalidMessage}
                        <label for="uname"><b>Username</b></label>
                        <input className="input_container" id="username" name="username" type="username" onChange={handleOnChangeUsername} placeholder="Enter Username"></input>

                        <label for="psw"><b>Password</b></label>
                        <input className="input_container" id="passowrd" name="password" type="password" onChange={handleOnChangePassword} placeholder="Enter Password"></input>
                        <button className="input_btn">Login</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
export default App;
