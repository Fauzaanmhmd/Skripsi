import Link from 'next/link'
import React, { useEffect } from "react"

export default function Dashboard({ Dashboard }) {
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


            <input type="checkbox" id="nav_toggle" />
            <div id="page-top">
                <div className="sidebar">
                    <div className="sidebar_brand">
                        <h3><span className="lab la-accusof"></span>Reswara Digital </h3>
                        <h3><span className="lab la-accusof"></span>Printing</h3>
                    </div>
                    <br></br>

                    <div className="sidebar_menu">
                        <ul>
                            <li>
                                <a href="" className="active"><span className="las la-igloo"></span>
                                    <span>Dashboard</span></a>
                            </li>
                            <li>
                                <Link href={`./datafeedback`}>
                                    <a href=""><span className="las la-users"></span>
                                        <span>Feedback From Customer</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`./dataproduct`}>
                                    <a href=""><span className="las la-clipboard-list"></span>
                                        <span>Data Of Product</span> </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`./recentorder`}>
                                    <a><span className="las la-shopping-bag"></span>
                                        <span>Recent Orders</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`../index`}>
                                    <a><span className="las la-shopping-bag"></span>
                                        <span>Menu</span></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main_content">
                    {/* aslinya header */}
                    <div className="main_content_nav">
                        <h3>
                            <label for="nav_toggle">
                                <span className="las la-bars"></span>
                            </label>
                            Dashboard
                        </h3>
                        <div className="search_wrapper">
                            <span className="las la-search"></span>
                            <input type="search" placeholder="Search Here"></input>
                        </div>

                        <div className="user_wrapper">
                            <img src="../img/ojan.jpeg" width="30px" height="30px"></img>
                            <div>
                                <h5>Fauzan Muhammad</h5>
                                <small>Super Admin</small>
                            </div>
                        </div>
                    </div>
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
                                            <table width="100%">
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
                </div>
            </div>
        </div >
    )
}