import { createClient } from "contentful"
import RecipeCard from '../../components/RecipeCard'



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
        <div className="recipe-list">



            </style>
        </div >
    )
}