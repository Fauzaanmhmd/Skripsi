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
          </div>
          <div className="footer_item">
            <h3>Contact</h3>
            <ul className="footer_list">
              <Link href={`/catalogue/privacypolicy`}>
                <li>Privacy & Policy</li>
              </Link>
              <Link href={`/catalogue/privacypolicy`}>
                <li>Term Of Use</li>
              </Link>
              <Link href={`/catalogue/privacypolicy`}>
                <li>FAQ</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
      {/* <footer>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="foot">
          <div className="content">
            <h3>Contact us</h3>

            <ul className="ul_foot">
              <li>
                <Link href={`/catalogue/privacypolicy`}>
                  <button className="button">
                    <h3>Privacy Policy</h3>
                  </button>
                </Link>
              </li>
              <li><a href="">Contact Us</a></li>
              <li>
                <Link href={`/catalogue/termofuse`}>
                  <button className="button">
                    <h3>Termofuse</h3>
                  </button>
                </Link>
              </li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>

          <div className="content">
            <h3>Social Media</h3>
            <div className="socmed">
              <a href=""><i className="fa fa-facebook-square"></i></a>
              <a href=""><i className="fa fa-instagram"></i></a>
              <div className="tester">
                <a href="https://wa.link/74wpl7"><i className="fa fa-whatsapp" target="blank"></i></a>
              </div>
            </div>
          </div>

          <div className="content">
            <h3>Available On</h3>
          </div>
        </div>
      </footer> */}
    </div >
  )
}