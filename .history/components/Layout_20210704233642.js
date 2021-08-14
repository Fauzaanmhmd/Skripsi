import Navbar from './Navbar'
import Background from './background'
import Footer from '

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
        <Footer />
      </footer>
    </div >


  )
}