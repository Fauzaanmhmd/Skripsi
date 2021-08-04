import Layout from "../../components/Layout"
import About from "../about/index"
import Link from 'next/link'


export default function Catalogue({ recipes }) {
    const Products = [
        {
            imageUrl: "bisnis1.png",
            judulProduct: "tester"
        },
        {
            imageUrl: "brochure.png"
        },
        {
            imageUrl: "envelope.png"
        },
        {
            imageUrl: "idcard.png"
        },
        {
            imageUrl: "nota.png"
        },
        {
            imageUrl: "popup.png"
        },
        {
            imageUrl: "poster.png"
        },
        {
            imageUrl: "roll-up-banner.png"
        },
        {
            imageUrl: "x-banner.png"
        },
        {
            imageUrl: "hardbox.png"
        },
    ]

    return (
        <Layout>
            <div className="zoom_wrapper">
                <h1 className="zoom">Find Your Product Needs!</h1>
            </div>


            <div className="image">
                {
                    Products.map((Product, i) => {
                        return (
                            <div className="image_wrapper">
                                <img className="img_product" src={`../img/${Product.imageUrl}`} alt="" />
                                <div className="img_product_bg">
                                    <Link href={`/catalogue/${Product.imageUrl}`}>
                                        <button className="product_button">Details</button>
                                    </Link>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <h3>Office Needs</h3>

        </Layout>
    )
}