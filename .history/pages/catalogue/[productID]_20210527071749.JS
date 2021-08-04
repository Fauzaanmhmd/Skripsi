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
            </section>


        </Layout >
    )
}

export default Product