import { useRouter } from 'next/router'
import Layout from "../../components/Layout"
import Link from 'next/link'

const Product = () => {
    const router = useRouter()
    console.log("🚀 ~ file: [productID].JS ~ line 5 ~ Product ~ router", router)

    const Products = [
        {
            imageUrl: "gambar1.png",
            judulProduct: "Tester"
        },
        {
            imageUrl: "gambar2.png"
        }
    ]

    const Product = Products.filter(product => product.imageUrl == router.query.productID)
    console.log("🚀 ~ file: [productID].JS ~ line 20 ~ Product", Product[0].judulProduct)

    return (
        <div>
            <h1>Product Detail Manta</h1>
            <p>Redurectubg to <Link href="/">Homepage</Link> for more our Products</p>
            <img className="img" src={`../img/${router.query.productID}`} alt="" />
        </div>
    )
}

export default Product