import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";
const Feedback = () => {
    const [showModal, setShowModal] = useState(false)
    const [namaCustomer, setnamaCustomer] = useState("")
    const [keterangan, setketerangan] = useState("")
    const [tgl_feedback, settgl_feedback] = useState("")
    const handleSubmit = () => {
        let dataFeedbacks = JSON.parse(localStorage.getItem("dataFeedbacks"))
        const productLength = dataFeedbacks.length
        dataFeedbacks.push({

        })
        dataFeedbacks[productLength]["namaCustomer"] = namaCustomer
        dataFeedbacks[productLength]["keterangan"] = keterangan
        dataFeedbacks[productLength]["tgl_feedback"] = tgl_feedback
        localStorage.setItem('dataFeedbacks', JSON.stringify(dataFeedbacks));
        setShowModal(true)
        // Router.push(`../admin/datafeedback`);
    }
    return (
        <Layout>
            <div className="feedback">
                <section>
                    <h3 className="form">Feedback From Customer</h3>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Nama Lengkap</label>
                        </div>
                        <div class="col-75">
                            <input onChange={(e) => setnamaCustomer(e.target.value)} type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Keterangan</label>
                        </div>
                        <div class="col-75">
                            <textarea onChange={(e) => setketerangan(e.target.value)} id="subject" name="subject" placeholder="Write something.."></textarea>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <button className="form_button" onClick={handleSubmit}>Submit</button>
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
                            Thank you for your feedback
                        </p>
                    </div>
                </div>
            }
        </Layout>
    )

}
export default Feedback
