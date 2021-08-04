import Layout from "../../components/Layout"

export default function Admin({ recipes }) {
    return (
        <Layout>
            <div className="form_login">
                <form method="post">
                    <div img_container>
                        <img src="img_avatar2.png" Alt="Avatar" className="avatar"></img>
                    </div>

                    <div className="container">
                        <label for="uname">Username</label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>
                        <label for="uname">Username</label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>
                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="cheked" name="remember">
                                Remember Me
                            </input>
                        </label>
                    </div>
                </form>

            </div>
        </Layout>

    )
}