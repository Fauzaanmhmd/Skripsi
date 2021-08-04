import { createClient } from "contentful"
import Layout from '../components/Layout'

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

export default function Recipes({ recipes }) {
  console.log(recipes)
  return (
    <Layout>
      Ini beranda
    </Layout>

  )
}