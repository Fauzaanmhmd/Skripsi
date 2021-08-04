import { createClient } from "contentful"
import RecipeCard from '../components/RecipeCard'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getsStaticPaths = asyc() => {
  const res = await client.getEntries({
    content_type: 'recipe'
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export default function getStaticProps() {

}

export default function RecipeDetails() {
  return (
    <div>
      Recipe Details
    </div>
  )
}