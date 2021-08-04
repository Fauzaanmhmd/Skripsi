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
            <h3>Find Us On</h3>
            <ul className="footer_list">
              <a target="blank" href="https://wa.link/74wpl7"></a>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              <i class="fa fa-whatsapp" style="font-size:48px;color:red"></i>
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
          <h3>Legal</h3>
          <ul className="footer_list">
            <Link href={`/catalogue/privacypolicy`}>
              <li className="footer_listItem">Privacy & Policy</li>
            </Link>
            <Link href={`/catalogue/privacypolicy`}>
              <li className="footer_listItem">Term Of Use</li>
            </Link>
          </ul>
        </div>
        </div>
      <div className="icon_wa">
        <img className="icon_waImg" src="../public/img/wa.png" alt="" />
        <a target="blank" href="https://wa.link/74wpl7"></a>
      </div>
      </footer>
    </div >
  )
}