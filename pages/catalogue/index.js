import Layout from "../../components/Layout"
import Link from 'next/link'


export default function Catalogue({ catalogue }) {
    const Products = [
        {
            imageUrl: "bisnis1.png",
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
                    //menciptakan array dengan memanggil fungsi spesifik pada setiap item di arrray induk
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


        </Layout>
    )
}