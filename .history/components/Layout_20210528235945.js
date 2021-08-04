import Link from 'next/link'
import Navbar from './Navbar'

export default function Layout({ children }) {

  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>

      <Background />

      <div className="page-content">
        {children}
      </div>

      <footer>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="foot">
          <div className="content">
            <h3>Contact us</h3>

            <ul className="ul_foot">
              <li><a href="">About</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>

          <div className="content">
            <h3>Social Media</h3>
            <div className="socmed">
              <a href=""><i className="fa fa-facebook-square"></i></a>
              <a href=""><i className="fa fa-instagram"></i></a>
              <a href=""><i className="fa fa-whatsapp"></i></a>
            </div>
          </div>

          <div className="content">
            <h3>Available On</h3>
          </div>
        </div>
      </footer>
    </div >
  )
}