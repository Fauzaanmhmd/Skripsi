import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";


const InputProduct = () => {
    const [showModal, setShowModal] = useState(false)
    const [namaProduct, setnamaProduct] = useState("")
    const [deskripsiGambar, setdeskripsiGambar] = useState("")
    const [Gambar, setGambar] = useState("")
    const handleSubmit = () => {
        const dataProcducts = JSON.parse(localStorage.getItem("dataProducts"))
        console.log(dataProducts);
        // const dataProcducts[dataProcducts.length+1]
        // localStorage.setItem()
    }
    return (
        <Layout>
            <div className="feedback">
                <section>
                    <h3 className="form">Form Input Data Product</h3>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Nama Produk</label>
                        </div>
                        <div class="col-75">
                            <input onChange={(e) => setnamaProduct(e.target.value)} type="text" id="fname" name="namaProduct" placeholder="Your name.."></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Deskripsi</label>
                        </div>
                        <div class="col-75">
                            <textarea onChange={(e) => setdeskripsiGambar(e.target.value)} id="subject" name="deskripsiGambar" placeholder="Write something.."></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="bukti" >Gambar</label>
                        </div>
                        <div class="col-75">
                            <input onChange={(e) => setGambar(e.target.value)} type="file" name="Gambar" id="filegambar"></input>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        {/* <input type="submit" value="Submit"></input> */}
                        <button className="form_button" onClick={() => setShowModal(true)}>Submit</button>
                    </div>
                </section>
            </div>

            {
                showModal &&
                <div className="modal">
                    <div className="modal_container">
                        <div className="button_click" onClick={() => setShowModal(false)}>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                            <i className="fa fa-check-square"></i>
                        </div>
                        <p>
                            Produk berhasil di input
                        </p>
                    </div>
                </div>
            }
        </Layout>
    )

}
export default InputProduct
