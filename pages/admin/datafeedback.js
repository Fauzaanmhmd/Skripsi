import LayoutAdmin from './LayoutAdmin'
import { useEffect, useState } from 'react'

export default function DataFeedback({ Feedback }) {
    const [dataFeedbacks, setDataFeedbacks] = useState([
        {
            namaCustomer: "Aulia Hakam",
            keterangan: "Proses pengiriman sangat cepat",
        },
        {
            namaCustomer: "Naufal Ahmad",
            keterangan: "Material Produk sangat bagus",
        },
        {
            namaCustomer: "Nazilla Geubrina",
            keterangan: "Pelayanan sangat ramah",
        }

    ])
    const handledelete = (i) => {
        let dataRest = JSON.parse(localStorage.getItem("dataFeedbacks"))
        delete dataRest[i]
        var filtered = dataRest.filter(function (el) {
            return el != null;
        });
        localStorage.setItem('dataFeedbacks', JSON.stringify(filtered));
        setDataFeedbacks(filtered)
    }
    useEffect(() => {
        if (!localStorage.getItem("dataFeedbacks"))
            localStorage.setItem('dataFeedbacks', JSON.stringify(dataFeedbacks))
        else
            setDataFeedbacks(JSON.parse(localStorage.getItem("dataFeedbacks")))
    }, [])

    return (
        <LayoutAdmin>
            <div className="recent_grid_table">
                <div className="card_body">
                    <div className="table-responsive">
                        <table className="table table_bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Customer</th>
                                    <th>Keterangan</th>
                                    <th>Aksi</th>
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