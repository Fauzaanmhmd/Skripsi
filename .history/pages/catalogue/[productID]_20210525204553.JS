import { useRouter } from 'next/router'
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"

export default function Product() {
    const Product = () => {
        const router = useRouter()
        console.log("🚀 ~ file: [productID].JS ~ line 5 ~ Product ~ router", router)

        return (
            <Layout>
                <div>
                    <h1>
                        Product Detail Mantap
            </h1>
                    <img className="img" src={`../img/${router.query.productID}`} alt="" />
                </div>
    )
}
            </Layout>
    }
    export default Product