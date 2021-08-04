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
    }
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

      {/* <div className="page-content">
        {children}
      </div> */}

      <div className="image">
        <div>
          <img className="img" src="../img/gambar1.png" alt="" />
          <div className="img-bg">
            <button class="button"> Details</button>
          </div>
        </div>
        <img
          src="../img/gambar2.png" alt="" />
        <img
          src="../img/gambar4.png" alt="" />
        <img
          src="../img/gambar6.png" alt="" />
        <img
          src="../img/gambar8.png" alt="" />
        <img
          src="../img/gambar9.png" alt="" />
        <img
          src="../img/gambar10.png" alt="" />
        <img
          src="../img/gambar11.png" alt="" />
        <img
          src="../img/gambar12.png" alt="" />
      </div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div >
  )
}