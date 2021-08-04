import Layout from "../../components/Layout"

export default function Admin({ recipes }) {
    return (
        <Layout>
            <div className="form_login">
                <form method="post">
                    <div className="img_container">
                        <img src="img_avatar2.png" Alt="Avatar" className="img_avatar"></img>
                    </div>

                    <div className="container">
                        <label for="uname">Username</label>
                        <input className="input_container" type="text" placeholder="Enter Username" required></input>
                        <label for="uname">Username</label>
                        <input className="input_container" type="text" placeholder="Enter Username" required></input>
                        <button className="input_btn" type="submit">Login</button>
                        <label>
                            <input className="input_container" type="checkbox" checked="cheked">
                                Remember Me
                            </input>
                        </label>
                    </div>

                    <div className="container">
                        <button type="button" className="cancelbtn">Cancel</button>
                    </div>
                </form>

            </div>
        </Layout>

    )
}