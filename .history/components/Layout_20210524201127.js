import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import Link from 'next/link'
import Navbar from './Navbar'

export default function Layout({ children }) {
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
    <div className="layout">
      <header>
        <Navbar />
        <Link href="/">
          <a>
            <h1 className="zoom">Reswara Product Catalogue</h1>
          </a>
        </Link>
      </header>

      <div className="page-content">
        {children}
      </div>



      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div >
  )
}