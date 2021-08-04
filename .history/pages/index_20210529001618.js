import { createClient } from "contentful"
import Layout from '../components/Layout'

export default function Recipes({ recipes }) {
  console.log(recipes)
  return (
    <Layout
      judul="judullah"
      withBackground>
    </Layout>
  )
}