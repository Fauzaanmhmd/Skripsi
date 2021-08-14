import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";
import Link from 'next/link'


export default function Admin({ admin }) {
    const [showModal, setShowModal] = useState(false)
    return (
        <Layout>
            <div className="form_login">
                <div className="img_container">
                    <img src="../img/img_avatar2.png" alt="Avatar" className="img_avatar"></img>
                </div>

                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username"></input>

                    <label for="psw"><b>Password</b></label>
                    <input type="text" placeholder="Enter Password"></input>
                    <Link href={`admin/dashboard`}>
                        <button className="input_btn">Login</button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}