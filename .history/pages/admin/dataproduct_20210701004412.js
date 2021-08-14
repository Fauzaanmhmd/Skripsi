import LayoutAdmin from "./LayoutAdmin"
import Link from 'next/link'
import { useEffect, useState } from "react"
import { set } from "date-fns"

export default function DataProduct({ Product }) {
    const [dataProducts, setDataProducts] = useState([
        {
            namaProduct: "Business Card",
            deskripsiGambar: "Paper - Art Carton 260 GSM, Nettuno, BW, Splendorge",
            Gambar: "bisnis1.png"
        },
        {
            namaProduct: "Brochure",
            deskripsiGambar: "Paper - Art Paper 120 GSM, Art Paper 150 GSM, HVS 80 GSM",
            Gambar: "brochure.png"
        },
        {
            namaProduct: "Envelope",
            deskripsiGambar: "Type - Jaya 100 GSM, Jaya 80 GSM, Jendela Jaya 100 GSM, Samson 100 GS Size - Jaya 23 x 11 cm, Jendela Jaya 23 x 11 cm, Samson 23 x 11 cm",
            Gambar: "envelope.png"
        }
    ])

    useEffect(() => {
        if (!localStorage.getItem("dataProducts"))
            localStorage.setItem('dataProducts', JSON.stringify(dataProducts));
        else
            setDataProducts(JSON.parse(localStorage.getItem("dataProducts")))
    }, [])


    return (

        <LayoutAdmin>
            <div className="recent_grid_table">
                <div class="card-body">
                    <div class="table-responsive">
                        <Link href={`./inputproduct`}>
                            <button className="input_button">Input Product</button>
                        </Link>
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Produk</th>
                                    <th>Deskripsi</th>
                                    <th>Gambar</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataProducts.map((dataProduct, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{dataProduct.namaProduct}</td>
                                                <td>{dataProduct.deskripsiGambar}</td>
                                                <td className="dataBarang"><img src={`../img/${dataProduct.Gambar}`} /></td>
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