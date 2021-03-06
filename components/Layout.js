import Navbar from './Navbar'
import Background from './background'
import Footer from './Footer'

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
        </>
      }

      <div className="page_content">
        {children}
      </div>


      <footer>
        <Footer />
      </footer>
    </div >

  )
}