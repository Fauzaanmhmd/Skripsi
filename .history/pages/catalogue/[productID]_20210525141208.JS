import { useRouter } from 'next/router'
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"

export default function Product({ produduct }) {
    return <Layout>

    </Layout>
}
const Product = () => {
    const router = useRouter()
    console.log("🚀 ~ file: [productID].JS ~ line 5 ~ Product ~ router", router)

    return (
        <div>
            Product Detail Mantap
            <img className="img" src={`../img/${router.query.productID}`} alt="" />
        </div>
    )
}

export default Product