import Link from 'next/link'

const Background = props => {
    return (
        <div className="background">
            <div>
                <div className="zoom_wrapper">
                    <h1 className="zoom">Reswara Digital Printing</h1>
                    {/* <p> Reswara menyediakan berbagai macam fasilitas untuk printing seperti printer dari segala merk, service</p> */}
                </div>
                <img className="bg_img" src="img/bg3.png"></img>

                <h1> Our values </h1>
                <div className="header_inner">
                    <div className="header_item_right">
                        <h3>Reason for choosing</h3>
                        <h4>Reswara Printing</h4>
                    </div>

                    <div className="header_item_left">
                        <h5>TEPAT WAKTU</h5>
                        <p>Deadline Kami Selalu Tepat Pada Waktunya</p>
                        <h5>HARGA BERSAING</h5>
                        <p>Harga Yang Kami Tawarkan Akan Membuat Anda Kembali</p>
                        <h5>BERKUALITAS</h5>
                        <p>Kualitas Yang Kami Berikan Kepada Anda Selalu Nomor 1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background