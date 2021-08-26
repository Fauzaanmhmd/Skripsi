import LayoutAdmin from "./LayoutAdmin"
import { useEffect, useState } from "react"

export default function RecentOrder({ Order }) {
    const [dataRecentOrders, setDataRecentOrders] = useState([
        //Object
        {
            //properti
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

        <LayoutAdmin>
            <div className="recent_grid_table">
                <div class="card_body">
                    <div class="table_responsive">
                        <table class="table table_bordered" id="dataTable" width="100%" cellspacing="0">
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
                                                        <button onClick={() => handledelete(i)}>Hapus</button>
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
        </LayoutAdmin>

    )
}