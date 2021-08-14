import Link from 'next/link'
import LayoutAdmin from './LayoutAdmin'
import { useEffect, useState } from 'react'

export default function DataFeedback({ Feedback }) {
    const [dataFeedbacks, setDataFeedbacks] = useState([
        {
            namaCustomer: "Aulia Hakam",
            keterangan: "Proses pengiriman sangat cepat",
            tgl_feedback: " 4 April 2021"
        },
        {
            namaCustomer: "Naufal Ahmad",
            keterangan: "Material Produk sangat bagus",
            tgl_feedback: " 13 April 2021"
        },
        {
            namaCustomer: "Nazilla Geubrina",
            keterangan: "Pelayanan sangat ramah",
            tgl_feedback: " 20 April 2021"
        },
        {
            namaCustomer: "Aulia Hakam",
            keterangan: "Proses pengiriman sangat cepat",
            tgl_feedback: " 4 April 2021"
        },
        {
            namaCustomer: "Aulia Hakam",
            keterangan: "Proses pengiriman sangat cepat",
            tgl_feedback: " 4 April 2021"
        }

    ])
    const handledelete = (i) => {
        let dataRest = JSON.parse(localStorage.getItem("dataFeedbacks"))
        delete dataRest[i]
        var filtered = dataRest.filter(function (el) {
            return el != null;
        });
        localStorage.setItem('dataFeedbacks', JSON.stringify(filtered));
        setDataProducts(filtered)
    }
    useEffect(() => {
        if (!localStorage.getItem("dataFeedbacks"))
            localStorage.setItem('dataFeedbacks', JSON.stringify(dataFeedbacks))
        else
            setDataProducts(JSON.parse(localStorage.getItem("dataFeedbacks")))
    }, [])

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
                                {
                                    dataFeedbacks.map((dataFeedback, i) => {
                                        if (dataFeedbacks !== null)
                                            return (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{dataFeedback?.namaCustomer}</td>
                                                    <td>{dataFeedback?.keterangan}</td>
                                                    <td>{dataFeedback?.tgl_feedback}</td>
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