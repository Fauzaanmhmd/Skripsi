import LayoutAdmin from "./LayoutAdmin"

export default function DataProduct({ Product }) {
    return (
        <LayoutAdmin>
            <div className="recent_grid_table">
                <div class="card-body">
                    <div class="table-responsive">
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
                                <tr>
                                    <td>1</td>
                                    <td>Business Card</td>
                                    <td> Paper - Art Carton 260 GSM, Nettuno, BW, Splendorge</td>
                                    <td class="dataBarang">
                                        <img src="../img/bisnis1.png" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Brochure</td>
                                    <td> Paper - Art Paper 120 GSM, Art Paper 150 GSM, HVS 80 GSM</td>
                                    <td class="dataBarang">
                                        <img src="../img/brochure.png" />

                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Envelope</td>
                                    <td> Type - Jaya 100 GSM, Jaya 80 GSM, Jendela Jaya 100 GSM, Samson 100 GSM
                                        Size - Jaya 23 x 11 cm, Jendela Jaya 23 x 11 cm, Samson 23 x 11 cm</td>
                                    <td class="dataBarang">
                                        <img src="../img/envelope.png" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Id card</td>
                                    <td> PVC White, PVC Magnetic, PVC Transparan, PVC RFID Mifare</td>
                                    <td class="dataBarang">
                                        <img src="../img/idcard.png" />
                                    </td>
                                </tr>
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