import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";



const App = () => {
    const [value, onChangeHandler, reset] =;
    const router = useRouter();

    const [invalidMessage, setInvalidMessage] = useState('')
    const loginCredentials = () => {
        const { username } = value;
        console.log(username, password);
        if (username !== 'fauzan' && password !== 'fauzan') {
            setInvalidMessage(' Please Enter Valid Username');
        }
        else {
            router.push("/admin")
        }
    }
    const handleSubmit = (e) => {
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
                        <input className="input_container" id="username" name="username" type="username" value={value.username || ''} onChange={onChangeHandler} placeholder="test"></input>

                        <label for="psw"><b>Password</b></label>
                        <input className="input_container" id="passowrd" name="password" type="password" value={value.password || ''} onChange={onChangeHandler} placeholder="Enter Password"></input>
                        <Link href={`admin/dashboard`}>
                            <button className="input_btn">Login</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
export default App;
