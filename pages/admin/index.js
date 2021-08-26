import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const App = () => {
    const router = useRouter();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showModal, setShowModal] = useState(false)
    const loginCredentials = () => {
        console.log(username);
        console.log(password);
    }

    const handleOnChangeUsername = (e) => setUsername(e.target.value)
    const handleOnChangePassword = (e) => setPassword(e.target.value)
    const handleSubmit = (e) => {
        if (username !== "fauzan") {
            setShowModal(true);
        }
        else if (password !== "fauzan313") {
            setShowModal(true);
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
                        {/* {invalidMessage} */}
                        <label for="uname"><b>Username</b></label>
                        <input className="input_container" id="username" name="username" type="username" onChange={handleOnChangeUsername} placeholder="Enter Username"></input>

                        <label for="psw"><b>Password</b></label>
                        <input className="input_container" id="password" name="password" type="password" onChange={handleOnChangePassword} placeholder="Enter Password"></input>
                        <button className="input_btn">Login</button>
                    </div>
                </form>
            </div>

            {
                showModal &&
                <div className="modal">
                    <div className="modal_container">
                        <div className="button_click" onClick={() => setShowModal(false)}>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                            <i className="fa fa-close"></i>
                        </div>
                        <p>
                            Username atau Password anda Salah
                        </p>
                    </div>
                </div>
            }
        </Layout>
    )
}
export default App;
