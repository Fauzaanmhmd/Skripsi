import Link from 'next/link'

const Background = props => {
    return (
        <div className="background">
            <div>
                <div className="zoom_wrapper">
                    <h1 className="zoom">RESWARA DIGITAL PRINTING</h1>
                    {/* <p> Reswara menyediakan berbagai macam fasilitas untuk printing seperti printer dari segala merk, service</p> */}
                </div>
                <img className="bg_img" src="img/bg3.png"></img>

                <h1> OUR VALUES </h1>
                <div className="header_inner">
                    <div className="header_item_right">
                        <h3>Reason for choosing</h3>
                        <h2>Reswara Digital Printing</h2>
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

                <h1>FEEDBACK FROM CUSTOMER</h1>
                <div className="header_review">
                    <div className="header_review_item">
                        <img src="img/helmi.jpeg"></img>
                        <p>Service fast response, staff are very helpfull</p>
                    </div>
                    <div className="header_review_item">
                        <img src="img/olis.jpeg"></img>
                        <p>Service was quick and flexible All staff very helpfull.</p>
                    </div>
                    <div className="header_review_item">
                        <img src="img/hakam.jpeg"></img>
                        <p>Good job</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background