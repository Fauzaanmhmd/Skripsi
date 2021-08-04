import { useRouter } from 'next/router'
import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";



const Product = () => {
    const [showModal, setShowModal] = useState(false)
    const router = useRouter()
    console.log("🚀 ~ file: [productID].JS ~ line 5 ~ Product ~ router", router)

    const Products = [
        {
            imageUrl: "gambar1.png",
            judulProduct: "Tester",
            harga: "250rb",
            deskripsi: "Helmi & Jannah"
        },
        {
            imageUrl: "gambar2.png",
            judulProduct: "Choliss"
        },
        {
            imageUrl: "gambar4.png",
            judulProduct: "Tboss"
        },
        {
            imageUrl: "gambar6.png",
            judulProduct: "Choliss"
        },
        {
            imageUrl: "gambar8.png",
            judulProduct: "helmi"
        },
        {
            imageUrl: "gambar9.png",
            judulProduct: "printer"
        },
        {
            imageUrl: "gambar10.png",
            judulProduct: "tomo"
        },
        {
            imageUrl: "gambar11.png",
            judulProduct: "toni"
        },
        {
            imageUrl: "gambar12.png",
            judulProduct: "janzz"
        }
    ]

    const Product = Products.filter(product => product.imageUrl == router.query.productID)
    console.log("🚀 ~ file: [productID].JS ~ line 20 ~ Product",)

    return (
        <Layout>
            <img className="img_product" src={`../img/${router.query.productID}`} alt="" />
            <div className="filter">
                <p> ini judul product :
                {
                        Product[0]?.judulProduct
                    }
                </p>
                <p>
                    harga :
                {
                        Product[0]?.harga
                    }
                </p>
                <p>
                    deskripsi:
                {
                        Product[0]?.deskripsi
                    }
                </p>
            </div>
            <section>

                <h2 className="form">Pesan Disini</h2>
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
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                                <i className="fa-check-square"></i>
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