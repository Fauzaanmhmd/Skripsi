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

            <div id="page-top">
                <div className="sidebar">
                    <div className="sidebar_brand">
                        <h3><span className="lab la-accusof"></span> Accusoft</h3>
                    </div>

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
                            Dashboarad
                        </h3>
                        <div className="search_wrapper">
                            <span className="las la-search"></span>
                            <input type="search" placeholder="Search Here"></input>
                        </div>

                        <div className="user_wrapper">
                            <img src="img/2.jpg" width="30px" height="30px"></img>
                            <div>
                                <h5>Fauzan Muhammad</h5>
                                <small>Super Admin</small>
                            </div>
                        </div>
                    </div>
                    <main>
                        <div className="recent_grid_table">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama Produk</th>
                                                <th>Nama Pelanggan</th>
                                                <th>Pesanan</th>
                                                <th>Uang Muka</th>
                                                <th>Alamat</th>
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
                                                <td>
                                                    <i class="fa fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td> Brochure</td>
                                                <td>Naufal Ahmad</td>
                                                <td> 10 Rim Brochure</td>
                                                <td>Rp. 1.000.000</td>
                                                <td>Jl. Nilam No 13 RT 05 RW 010 Cawang Atas, Jakarta Timur, Jakarta</td>
                                                <td>
                                                    <i class="fa fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Envelope</td>
                                                <td>Nazilla Geubrina</td>
                                                <td>15 Pack Envelope </td>
                                                <td>Rp. 750.000</td>
                                                <td>Jl. Buadaya No 25 RT 09 RW 015 Jagakarsa, Jakarta Selatan, Jakarta</td>
                                                <td>
                                                    <i class="fa fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Id Card</td>
                                                <td>Nurholis</td>
                                                <td>10 Pack Id Card</td>
                                                <td>Rp. 800.000</td>
                                                <td>Jl. Merah Delima No 14 RT 13 RW 01 Pengadegan, Jakarta Selatan, Jakarta
                                                </td>
                                                <td>
                                                    <i class="fa fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Nota</td>
                                                <td>Rafi Nabil</td>
                                                <td>13 Pack Nota</td>
                                                <td>Rp. 1.000.000</td>
                                                <td>Jl. Kehakiman No 2 RT 02 RW 07 Rawamangun, Jakarta Timur, Jakarta</td>
                                                <td>
                                                    <i class="fa fa-trash"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        </div >
    )
}