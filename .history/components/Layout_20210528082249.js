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
      <button type="button" id="tombol" onclick="Swal('Pesanan anda di proses')" className="form_button">Pesan</button>
      <script src="dist/sweetalert2.all.min.js"></script>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div >
  )
}