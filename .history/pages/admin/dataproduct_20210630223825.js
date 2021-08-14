import LayoutAdmin from "./LayoutAdmin"
import Link from 'next/link'

export default function DataProduct({ Product }) {
    const dataProducts = [
        {
            namaProduct: "Business Card",
            deskripsiGambar: "Paper - Art Carton 260 GSM, Nettuno, BW, Splendorge",
            Gambar: "../img/bisnis1.png"
        },
        {
            namaProduct: "Brochure",
            deskripsiGambar: "Paper - Art Paper 120 GSM, Art Paper 150 GSM, HVS 80 GSM",
            Gambar: "../img/brochure.png"
        },
        {
            namaProduct: "Envelope",
            deskripsiGambar: "Type - Jaya 100 GSM, Jaya 80 GSM, Jendela Jaya 100 GSM, Samson 100 GS Size - Jaya 23 x 11 cm, Jendela Jaya 23 x 11 cm, Samson 23 x 11 cm",
            Gambar: "../img/envelope.png"
        }
    ]
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataProducts.map((dataProduct, i) => {
                                        return (
                                            <tr>
                                                <td>4</td>
                                                <td>Id card</td>
                                                <td> PVC White, PVC Magnetic, PVC Transparan, PVC RFID Mifare</td>
                                                <td class="dataBarang">
                                                    <img src="../img/idcard.png" />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td>5</td>
                                    <td>Nota</td>
                                    <td>Size : Folio (21.5 x 33 cm), 1/2 Folio (21 x 16 cm), 10 x 16 cm. Piles :
                                        1 rangkap s/d 5 rangkap</td>
                                    <td class="dataBarang">
                                        <img src="../img/nota.png" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </LayoutAdmin>
    )
}