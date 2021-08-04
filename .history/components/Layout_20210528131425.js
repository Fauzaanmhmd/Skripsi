import Link from 'next/link'
import Navbar from './Navbar'

export default function Layout({ children }) {

  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>

      <div className="page-content">
        {children}
      </div>

      <footer>
        <div className="footer">
          <div className="content">
            <h3>Contact us</h3>

            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>

          <div className="content">
            <h3>Social Media</h3>
            <a href=""><i className="fa fa-facebook-square"></i></a>
          </div>

          <div className="content">
            <h3>Available On</h3>
          </div>
        </div>
      </footer>
    </div >
  )
}