import Layout from "../../components/Layout"

export default function Admin({ recipes }) {
    return (
        <Layout>
            <div className="form_login">
                <form method="post">
                    <div className="img_container">
                        <img src="/img/img_avatar2.png" Alt="Avatar" className="img_avatar"></img>
                    </div>

                    <div className="container">
                        <label for="uname">Username</label>
                        <input className="input_container" type="text" placeholder="Enter Username" />
                        <label for="uname">Username</label>
                        <input className="input_container" type="text" placeholder="Enter Password" />
                        <button className="input_btn" type="submit">Login</button>
                    </div>
                </form>

            </div>
        </Layout>

    )
}