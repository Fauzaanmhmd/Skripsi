import Link from 'next/link'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Navbar />
        <Link href="/">
          <div class="container">
            <div class="glitch" data-text="CYBERCOUNTESS">Reswara Product Catalogue</div>
            <div class="glow">Reswara Product Catalogue</div>
            <p class="subtitle">Engineer﹒Gamer﹒Shenaniganizer</p>
          </div>
          <div class="scanlines"></div>
          /* <a>
            <h1>
              <span>Reswara Product Catalogue</span>
            </h1>
          </a> */
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