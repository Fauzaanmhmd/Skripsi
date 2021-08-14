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
                            Dashboard
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
                                        <button>See all <span className="las la-arrow-right"></span></button>
                                    </div>
                                    <div className="card_body">
                                        <div className="table_responsive">
                                            <table width="100%">
                                                <thead>
                                                    <tr>
                                                        <td>Project Title</td>
                                                        <td>Department</td>
                                                        <td>Status</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>UI/UX Desain</td>
                                                        <td>Web Development</td>
                                                        <td>
                                                            <span className="status"></span>
                                                            Review
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Web Development</td>
                                                        <td>Web Development</td>
                                                        <td>
                                                            <span className="status"></span>
                                                            Review
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Web Development</td>
                                                        <td>Web Development</td>
                                                        <td>
                                                            <span className="status"></span>
                                                            Review
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