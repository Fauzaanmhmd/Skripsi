import { useRouter } from 'next/router'
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"

const Product = () => {
    const router = useRouter()
    console.log("🚀 ~ file: [productID].JS ~ line 5 ~ Product ~ router", router)

    return (
        <div>
            <h1>Product Detail Manta</h1>
            <p>Redurectubg to <Link href="/">Homepage</Link> for more our Products</p>
            <img className="img" src={`../img/${router.query.productID}`} alt="" />
        </div>
    )
}

export default Product