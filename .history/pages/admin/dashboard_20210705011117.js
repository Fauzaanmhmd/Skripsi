import Link from 'next/link'
import React, { useEffect } from "react"
import SidebarAdmin from './SidebarAdmin'
import NavbarAdmin from './NavbarAdmin'

export default function Dashboard({ children, withBackground }) {
    useEffect(() => {
        document.querySelector("body").classList.add("light")
    })
    return (
        <div>
            <title>Admin</title>
            <link href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" rel="stylesheet" type="text/css" />
            <link
                href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                rel="stylesheet" />
            <div id="page-top">
                <NavbarAdmin />
                <SidebarAdmin />
                <div className="main_content">
                    {/* aslinya header */}
                    <main>
                        <div className="cards">
                            <div className="card_single">
                                <div>
                                    <h3>54</h3>
                                    <span>Customer</span>
                                </div>
                                <div>
                                    <span className="las la-users"></span>
                                </div>
                            </div>
                            <div className="card_single">
                                <div>
                                    <h3>54</h3>
                                    <span>Customer</span>
                                </div>
                                <div>
                                    <span className="las la-clipboard"></span>
                                </div>
                            </div>
                            <div className="card_single">
                                <div>
                                    <h3>54</h3>
                                    <span>Customer</span>
                                </div>
                                <div>
                                    <span className="las la-shopping-bag"></span>
                                </div>
                            </div>
                        </div>
                        <div className="recent_grid">
                            <div className="projects">
                                <div className="card">
                                    <div className="card_header">
                                        <h3>Recent Projects</h3>
                                        <Link href={`./recentorder`}>
                                            <button className="card_recent">See all <span className="las la-arrow-right"></span></button>
                                        </Link>
                                    </div>
                                    <div className="card_body">
                                        <div className="table_responsive">
                                            <table class="table table-bordered" id="dataTable" cellspacing="0" width="100%">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Nama Produk</th>
                                                        <th>Nama Pelanggan</th>
                                                        <th>Pesanan</th>
                                                        <th>Uang Muka</th>
                                                        <th>Alamat</th>
                                                        <th>Status</th>
                                                        <th>Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Business Card</td>
                                                        <td> Aulia Hakam</td>
                                                        <td> 3 Pack Business Card</td>
                                                        <td>Rp. 1.000.000</td>
                                                        <td>Jl. Swadaya No 4 RT 03 RW 011 Mampang, Jakarta Selatan, Jakarta</td>
                                                        <td>Sedang Proses</td>
                                                        <td>
                                                            <button>Hapus</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td> Brochure</td>
                                                        <td>Naufal Ahmad</td>
                                                        <td> 10 Rim Brochure</td>
                                                        <td>Rp. 1.000.000</td>
                                                        <td>Jl. Nilam No 13 RT 05 RW 010 Cawang Atas, Jakarta Timur, Jakarta</td>
                                                        <td>Sedang Proses</td>
                                                        <td>
                                                            <button>Hapus</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Envelope</td>
                                                        <td>Nazilla Geubrina</td>
                                                        <td>15 Pack Envelope </td>
                                                        <td>Rp. 750.000</td>
                                                        <td>Jl. Budaya No 25 RT 09 RW 015 Jagakarsa, Jakarta Selatan, Jakarta</td>
                                                        <td>Sedang Proses</td>

                                                        <td>
                                                            <button>Hapus</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* aslinya header */}
                    <NavbarAdmin />
                    <main>
                        {children}
                    </main>
                </div>
            </div >



            <input type="checkbox" id="nav_toggle" />
            <div id="page-top">
            </div>
        </div >
    )
}