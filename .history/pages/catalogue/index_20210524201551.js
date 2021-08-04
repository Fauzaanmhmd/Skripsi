import { createClient } from "contentful"
import Layout from "../../components/Layout"


export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({ content_type: 'recipe' })


    return {
        props: { recipes: res.items },
        revalidate: 1
    }

}

export default function Catalogue({ recipes }) {
    const Products = [
        {
            imageUrl: "gambar1.png"
        },
        {
            imageUrl: "gambar2.png"
        },
        {
            imageUrl: "gambar4.png"
        },
        {
            imageUrl: "gambar6.png"
        },
        {
            imageUrl: "gambar8.png"
        },
        {
            imageUrl: "gambar9.png"
        },
        {
            imageUrl: "gambar10.png"
        },
        {
            imageUrl: "gambar11.png"
        },
        {
            imageUrl: "gambar12.png"
        },
    ]

    return (
        <Layout>
            <div className="image">
                {
                    Products.map((Product, i) => {
                        return (
                            <div>
                                <img className="img" src={`../img/${Product.imageUrl}`} alt="" />
                                <div className="img-bg">
                                    <button class="button"> Details</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </Layout>
    )
}