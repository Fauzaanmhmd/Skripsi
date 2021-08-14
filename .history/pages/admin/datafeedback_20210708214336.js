import Link from 'next/link'
import LayoutAdmin from './LayoutAdmin'
import { useEffect, useState } from 'react'

export default function DataFeedback({ Feedback }) {
    const [dataFeedbacks, setDataFeedbacks] = useState([
        {
            namaCustomer: "Aulia Hakam",
            Keterangan: "Proses pengiriman sangat cepat",
            tgl_feedback: " 4 April 2021"
        },
        {
            namaCustomer: "Naufal Ahmad",
            Keterangan: "Material Produk sangat bagus",
            tgl_feedback: " 13 April 2021"
        },
        {
            namaCustomer: "Nazilla Geubrina",
            Keterangan: "Pelayanan sangat ramah",
            tgl_feedback: " 20 April 2021"
        },
        {
            namaCustomer: "Aulia Hakam",
            Keterangan: "Proses pengiriman sangat cepat",
            tgl_feedback: " 4 April 2021"
        },
        {
            namaCustomer: "Aulia Hakam",
            Keterangan: "Proses pengiriman sangat cepat",
            tgl_feedback: " 4 April 2021"
        }

    ])
    return (
        <LayoutAdmin>
            <div className="recent_grid_table">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Customer</th>
                                    <th>Keterangan</th>
                                    <th>Tgl_Feedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Aulia Hakam</td>
                                    <td>Proses pengiriman sangat cepat</td>
                                    <td>4 April 2021</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Naufal Ahmad</td>
                                    <td>Material Produk sangat bagus</td>
                                    <td>13 April 2021</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Nazilla Geubrina</td>
                                    <td>Pelayanan sangat ramah</td>
                                    <td>20 April 2021</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Nurholis</td>
                                    <td>Proses transaksi pembayaran cukup mudah</td>
                                    <td>29 April 2021</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Rafi Nabil</td>
                                    <td>Good Job</td>
                                    <td>1 Mei 2021</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Firdaus Agustha</td>
                                    <td>Proses pengiriman sangat cepat</td>
                                    <td>14 Mei 2021</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}