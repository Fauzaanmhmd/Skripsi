import Link from 'next/link'
import { useEffect, useState } from "react"
import SidebarAdmin from './SidebarAdmin'

import NavbarAdmin from './NavbarAdmin'
export default function Dashboard({ children, withBackground }) {
    useEffect(() => {
        document.querySelector("body").classList.add("light")
    })
    const [dataRecentOrders, setDataRecentOrders] = useState([
        {
            namaCustomer: "Nazilla Geubrina",
            jumlahPesanan: "15",
            buktiPembayaran: "",
            alamat: "serengseng sawah"
        }
    ])

    const handledelete = (i) => {
        let dataRest = JSON.parse(localStorage.getItem("dataRecentOrders"))
        delete dataRest[i]
        var filtered = dataRest.filter(function (el) {
            return el != null;
        });
        localStorage.setItem('dataRecentOrders', JSON.stringify(filtered));
        setDataRecentOrders(filtered)
    }

    useEffect(() => {
        if (!localStorage.getItem("dataRecentOrders"))
            localStorage.setItem('dataRecentOrders', JSON.stringify(dataRecentOrders))
        else
            setDataRecentOrders(JSON.parse(localStorage.getItem("dataRecentOrders")))
    }, [])


    return (
        <div>
            <NavbarAdmin />
            <SidebarAdmin />
            <div className="main_content">
                <main>
                    <div className="cards">
                        <div className="card_single">
                            <div>
                                <h3>14</h3>
                                <span>Customer</span>
                            </div>
                            <div>
                                <span className="las la-users"></span>
                            </div>
                        </div>
                        <div className="card_single">
                            <div>
                                <h3>15</h3>
                                <span>Data Of Product</span>
                            </div>
                            <div>
                                <span className="las la-clipboard"></span>
                            </div>
                        </div>
                        <div className="card_single">
                            <div>
                                <h3>12</h3>
                                <span>Feedback From Customer</span>
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
                                    <h3>Recent Order</h3>
                                    <Link href={`./recentorder`}>
                                        <button className="card_recent">See all <span className="las la-arrow-right"></span></button>
                                    </Link>
                                </div>
                                <div className="card_body">
                                    <div className="table_responsive">
                                        <table className="table table_bordered" id="dataTable" cellspacing="0" width="100%">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Nama Customer</th>
                                                    <th>Jumlah Pesanan</th>
                                                    <th>Uang Muka</th>
                                                    <th>Alamat</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    dataRecentOrders.map((dataRecentOrder, i) => {
                                                        if (dataRecentOrders !== null)
                                                            return (
                                                                <tr>
                                                                    <td>{i + 1}</td>
                                                                    <td>{dataRecentOrder?.namaCustomer}</td>
                                                                    <td>{dataRecentOrder?.jumlahPesanan}</td>
                                                                    <td className="dataUangMuka"><img src={`../img/${dataRecentOrder?.buktiPembayaran}`} /></td>
                                                                    <td>{dataRecentOrder?.alamat}</td>
                                                                    <td>
                                                                        <center>
                                                                            <button onClick={() => handledelete(i)}>Hapus</button>
                                                                        </center>
                                                                    </td>
                                                                </tr>
                                                            )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <NavbarAdmin />
                <main>
                    {children}
                </main>
            </div>
        </div >
    )
}