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
          </div>

          <div className="content">
            <h3>Social Media</h3>
          </div>

          <div className="content">
            <h3>Available On</h3>
          </div>
        </div>
      </footer>
    </div >
  )
}