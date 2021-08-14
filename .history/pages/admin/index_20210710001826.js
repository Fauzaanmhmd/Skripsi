import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import UseInputState from './UseInputState'


const app = () => {
    const [value, onChangeHandler, reset] = UseInputState('');

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const loginCredentials = () => {
        setUsername(null);
        setPassword(null);
        const { username, password } = value;
        if (username !== 'fauzan') {
            setUsername(' Please Enter Valid Username');
        }

        if (password !== 'fauzan') {
            setPassword(' Please Enter Valid Password');
        }

        reset('');

        if (password === 'fauzan' && username === 'fauzan') {
            setUsername(null);
            setPassword(null);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        loginCredentials();
    }
}

const [showModal, setShowModal] = useState(false)
return (
    <Layout>
        <div className="form_login">

            <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="img_container">
                    <img src="../img/img_avatar2.png" alt="Avatar" className="img_avatar"></img>
                </div>

                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input id="username" name="username" type="username" value={value.username || ''} onChange={onChangeHandler} placeholder="test"></input>

                    <label for="psw"><b>Password</b></label>
                    <input id="passowrd" name="password" type="password" value={value.password || ''} onChange={onChangeHandler} placeholder="Enter Password"></input>
                    <Link href={`admin/dashboard`}>
                        <button className="input_btn">Login</button>
                    </Link>
                </div>
            </form>
            {username && <div>{username}</div>}
            {password && <div>{password}</div>}
        </div>
    </Layout>
)
export default app;
