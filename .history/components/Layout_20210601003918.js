import Link from 'next/link'
import Navbar from './Navbar'
import Background from './background'

export default function Layout({ children, withBackground, judul }) {

  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>

      {
        withBackground &&
        <>
          <Background />
          {
            judul
          }
        </>
      }

      <div className="page-content">
        {children}
      </div>

      <footer>
        <div className="footer_inner">
          <div className="footer_item">
            <h3>SOsmed</h3>
            <ul className="footer_list">
              <Link href={`/catalogue/privacypolicy`}>
                <li className="footer_listItem">Privacy & Policy</li>
              </Link>
              <Link href={`/catalogue/privacypolicy`}>
                <li className="footer_listItem">Term Of Use</li>
              </Link>
              <Link href={`/catalogue/privacypolicy`}>
                <li className="footer_listItem">FAQ</li>
              </Link>
            </ul>
          </div>
          <div className="footer_item">
            <h3>Contact</h3>
            <ul className="footer_list">
              <Link href={`/catalogue/privacypolicy`}>
                <li className="footer_listItem">Privacy & Policy</li>
              </Link>
              <Link href={`/catalogue/privacypolicy`}>
                <li className="footer_listItem">Term Of Use</li>
              </Link>
              <Link href={`/catalogue/privacypolicy`}>
                <li className="footer_listItem">FAQ</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
      <div className="icon_wa">
        <a href="https://wa.link/74wpl7"><i className="fa fa-whatsapp" target="blank"></i>wa</a>
      </div>
    </div >
  )
}