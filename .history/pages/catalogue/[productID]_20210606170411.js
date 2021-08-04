import { useRouter } from 'next/router'
import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";



const Product = () => {
    const [showModal, setShowModal] = useState(false)
    const router = useRouter()
    console.log("🚀 ~ file: [productID].JS ~ line 5 ~ Product ~ router", router)

    const Products = [
        {
            imageUrl: "bisnis1.png",
            judulProduct: "Business Card",
            deskripsi: " Paper - Art Carton 260 GSM, Nettuno, BW, Splendorge"
        },
        {
            imageUrl: "brochure.png",
            judulProduct: "Brochure",
            deskripsi: " Paper - Art Paper 120 GSM, Art Paper 150 GSM, HVS 80 GSM"
        },
        {
            imageUrl: "envelope.png",
            judulProduct: "envelope",
            deskripsi: " Type - Jaya 100 GSM, Jaya 80 GSM, Jendela Jaya 100 GSM, Samson 100 GSM Size - Jaya 23 x 11 cm, Jendela Jaya 23 x 11 cm, Samson 23 x 11 cm"
        },
        {
            imageUrl: "idcard.png",
            judulProduct: "ID Card",
            deskripsi: " PVC White, PVC Magnetic, PVC Transparan, PVC RFID Mifare"
        },
        {
            imageUrl: "nota.png",
            judulProduct: "Nota",
            deskripsi: " Size : Folio (21.5 x 33 cm), 1/2 Folio (21 x 16 cm), 10 x 16 cm. Piles : 1 rangkap s/d 5 rangkap"
        },
        {
            imageUrl: "popup.png",
            judulProduct: "Pup Up Counter",
            deskripsi: " Size & Model : By request. Finishing : Matte, Glossy"
        },
        {
            imageUrl: "poster.png",
            judulProduct: " Poster",
            deskripsi: " Paper : Art Paper 120 GSM, Art Paper 150 GSM, HVS 80 GSM"
        },
        {
            imageUrl: "gambar11.png",
            judulProduct: "toni"
        },
        {
            imageUrl: "gambar12.png",
            judulProduct: "janzz"
        },
        {
            imageUrl: "jam.png",
            judulProduct: "janzz"
        }
    ]

    const Product = Products.filter(product => product.imageUrl == router.query.productID)
    console.log("🚀 ~ file: [productID].JS ~ line 20 ~ Product",)

    return (
        <Layout>
            <img className="img_product" src={`../img/${router.query.productID}`} alt="" />
            <div className="form_catalogue">
                <h3> Product :
                {
                        Product[0]?.judulProduct
                    }
                </h3>
                <p>
                    Deskripsi:
                {
                        Product[0]?.deskripsi
                    }
                </p>
            </div>
            <section>
                <h3 className="form">Pesan Disini</h3>
                <div class="row">
                    <div class="col-25">
                        <label for="fname">Nama Lengkap</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="fname">Jumlah Pesanan</label>
                    </div>
                    <div class="col-75">
                        <input type="number" id="fname" name="firstname" placeholder="Jumlah"></input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="bukti" >Bukti Pembayaran</label>
                    </div>
                    <div class="col-75">
                        <input type="file" id="lname" name="lastname" placeholder="Your last name.."></input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="subject">Alamat</label>
                    </div>
                    <div class="col-75">
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    {/* <input type="submit" value="Submit"></input> */}
                    <button className="form_button" onClick={() => setShowModal(true)}>Pesan</button>
                </div>

            </section>

            {
                showModal &&
                <div className="modal">
                    <div className="modal_container">
                        <div className="button_click" onClick={() => setShowModal(false)}>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                            <i className="fa fa-check-square"></i>
                        </div>
                        <p>
                            Pesanan anda sedang di proses...
                            </p>
                    </div>
                </div>
            }
        </Layout >
    )
}


export default Product