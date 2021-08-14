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
                                        <button>Hapus</button>
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

        </LayoutAdmin>
    )
}