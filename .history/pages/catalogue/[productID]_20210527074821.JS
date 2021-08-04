import { useRouter } from 'next/router'
import Layout from "../../components/Layout"
import Link from 'next/link'
import Navbar from '../../components/Navbar'

const Product = () => {
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
                pesan disini

                <div>
                    <label for="Nama">Nama Lengkap
                    <input className="Nama" placeholder="Nama" type="text"></input>
                    </label>
                    <input className='input-field' placeholder="Nomer Telepon" type="text"></input>
                    <input className='input-field' placeholder="Email" type="text"></input>
                    <textarea name="message" cols="40" rows="6" placeholder="Alamat"></textarea>
                    <input className='input-field' placeholder="Jumlah" type="number"></input>
                </div>

                <div class="container">
                    <form action="/action_page.php">
                        <div class="row">
                            <div class="col-25">
                                <label for="fname">First Name</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="fname" name="firstname" placeholder="Your name..">
    </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="lname">Last Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name..">
    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                        <label for="country">Country</label>
                                    </div>
                                    <div class="col-75">
                                        <select id="country" name="country">
                                            <option value="australia">Australia</option>
                                            <option value="canada">Canada</option>
                                            <option value="usa">USA</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                        <label for="subject">Subject</label>
                                    </div>
                                    <div class="col-75">
                                        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <input type="submit" value="Submit">
  </div>
  </form>
                            </div>
            </section>


        </Layout >
    )
}

export default Product