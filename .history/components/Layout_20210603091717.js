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
              <a target="blank" href="https://wa.link/74wpl7">
                <li className="footer_listItem">Whats App</li>
              </a>
              <a target="blank" href="http://www.instagram.com/fauzaan.mhmd/">
                <li className="footer_listItem">Instagram</li>
              </a>
            </ul>
          </div>
          <div className="footer_item">
            <h3>Legal</h3>
            <ul className="footer_list">
              <Link href={`/catalogue/privacypolicy`}>
                <li className="footer_listItem">Privacy & Policy</li>
              </Link>
              <Link href={`/catalogue/termofuse`}>
                <li className="footer_listItem">Term Of Use</li>
              </Link>
            </ul>
          </div>
          <div className="footer_item">
            <h3>Informasi
              <img src="img/location.png">
                <p>
                  GEDUNG SETIABUDI 2
                  ESTUBIZI BUSINESS CENTER, LT 2, SUITE 207B-C
                  JL. HR RASUNA SAID, KAV 62 RT.018 RW.002 KARET, SETIABUDI
            </p>
              </img>
              <p>
                021 87973384
            </p>
              <p>
                08.30 – 18.00 WIB.
                </p>
              <p>
                reswaraarvinjaya@gmail.com
            </p>
              <p>
                Senin - Sabtu
                </p>
            </h3>
          </div>
        </div>
        <div className="icon_wa">
          <a target="blank" href="https://wa.link/74wpl7">
            <img className="icon_waImg" src="/img/wa.png" alt="" />
          </a>
        </div>
      </footer>
    </div >
  )
}