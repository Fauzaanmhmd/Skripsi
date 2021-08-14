import Layout from "../../components/Layout"
import Link from 'next/link'

export default function About({ recipes }) {
    return (
        <Layout>
            <div className="about">
                <h2>Tentang Kami</h2>
                Reswara Digital Printing kini hadir semakin dekat dengan anda dengan menyediakan jasa cetak berbasis online. Untuk memenuhi kebutuhan Pelanggan kami yang membutuhkan Cetak Kartu Nama, Cetak Poster, Cetak Brosur, Cetak Pin, Serta Cetak X-Banner & Roll-Up Banner, Print Warna A4, A3, A3+, Cetak Spanduk, Hiasan Dinding, Cetak Tripod Banner, Cetak Flyer & Postcard dengan waktu cetak yang sangat cepat namun tetap mengutamakan kualitas. Kami hadir atas permintaan pelanggan kami yang mempunyai keterbatasan waktu & jarak, dalam menyelesaikan pekerjaan cetaknya. Kami hadir untuk memudahkan anda melakukan percetakan tanpa harus datang ke toko.

                <h2>Mengapa memilih Reswara?</h2>
                <h3>Produksi Cepat & Kualitas Tinggi</h3>
                Tidak hanya layanan cetak kami memiliki kualitas cetak yang luar biasa, tapi kami juga menawarkan harga yang terbaik.

                <h3>Digital dan Offset Print tersedia</h3>
                Percetakan kami dapat mengakomodasi pekerjaan besar atau kecil. Kami bisa melakukan digital printing dan offset untuk memenuhi kebutuhan pencetakan anda. Harga dan kualitas tinggi dan harga ekonomis kami dapat membantu anda beriklan.

                <Link href={`../../components/footer/privacypolicy`}>
                    <button>
                    </button></Link>

                <h3>Digital dan Offset Print tersedia</h3>
                Tidak tahu harus mulai dari mana? Kami memiliki desainer untuk membantu a
                anda membuat pilihan desain untuk semua jenis materi promosi dari kartu nama hingga brosur. Juga tersedia Online Design Tool yang memudahkan anda mendesign brosur atau kartu nama anda sendiri.

            </div>
        </Layout>

    )
}