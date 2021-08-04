import Layout from "../../components/Layout"

export default function Admin({ recipes }) {
    return (
        <Layout>
            <div className="form_login">
                <form>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type="text" placeholder="useremail@domain.com" className="mr-sm-2" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password <Link href="/"><a>Forgot Password?</a></Link></FormLabel>
                        <FormControl type="password" className="mr-sm-2" />
                    </FormGroup>
                    <Button className="btn-lg btn-block" variant="primary">Sign In</Button>
                </form>

            </div>
        </Layout>

    )
}