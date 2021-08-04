import { createClient } from "contentful"

export async function getStaticProps() {

  const client = createClient({
    space: 'haw6t80hsim6',
    accessToken: 'ToDVxg7mEkQNjnLWW3LZuvp3I3wDUdGMma7GT9G_58Y',
  })

}

export default function Recipes() {
  return (
    <div className="recipe-list">
      Recipe List
    </div>
  )
}