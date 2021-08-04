import Link from 'next/link'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Navbar />
        <Link href="/">

          <span href="http://www.thismanslife.co.uk" target="_blank">Reswara Product</span>

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