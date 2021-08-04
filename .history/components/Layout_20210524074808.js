import Link from 'next/link'
import Navbar from './Navbar'

export default function Layout({ children }) {
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
    </div>
  )
}