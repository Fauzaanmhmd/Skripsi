import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";


const InputProduct = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="feedback">
            <section>
                <h3 className="form">Feedback From Customer</h3>
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
                        <label for="subject">Keterangan</label>
                    </div>
                    <div class="col-75">
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    {/* <input type="submit" value="Submit"></input> */}
                    <button className="form_button" onClick={() => setShowModal(true)}>Submit</button>
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
                            Thank you for your feedback
                        </p>
                    </div>
                </div>
            }
        </div>
    )

}
export default InputProduct
