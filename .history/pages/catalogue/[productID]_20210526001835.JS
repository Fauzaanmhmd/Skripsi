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

                <div class='container'>
                    <div class='window'>
                        <div class='order-info'>
                            <div class='order-info-content'>
                                <h2>Order Summary</h2>
                                <div class='line'></div>
                                <table class='order-table'>
                                    <tbody>
                                        <tr>
                                            <td><img src='https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG'
                                                class='full-width'></img>
                                            </td>
                                            <td>
                                                <br> <span class='thin'>Nike</span>
                                                    <br> Free Run 3.0 Women<br> <span class='thin small'> Color: Grey/Orange, Size:
                                    10.5<br><br></span>
                            </td>

                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class='price'>$99.95</div>
                                                            </td>
                                                        </tr>
                    </tbody>

                </table>
                                                    <div class='line'></div>
                                                    <table class='order-table'>
                                                        <tbody>
                                                            <tr>
                                                                <td><img src='https://dl.dropboxusercontent.com/s/qbj9tsbvthqq72c/Vintage-20L-Backpack-by-Fj%C3%A4llr%C3%A4ven.jpg'
                                                                    class='full-width'></img>
                                                                </td>
                                                                <td>
                                                                    <br> <span class='thin'>Fjällräven</span>
                                                                        <br>Vintage Backpack<br> <span class='thin small'> Color: Olive, Size: 20L</span>
                            </td>
                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div class='price'>$235.95</div>
                                                                            </td>
                                                                        </tr>
                    </tbody>
                </table>
                                                                <div class='line'></div>
                                                                <table class='order-table'>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><img src='https://dl.dropboxusercontent.com/s/nbr4koso8dpoggs/6136C1p5FjL._SL1500_.jpg'
                                                                                class='full-width'></img>
                                                                            </td>
                                                                            <td>
                                                                                <br> <span class='thin'>Monobento</span>
                                                                                    <br>Double Lunchbox<br> <span class='thin small'> Color: Pink, Size: Medium</span>
                            </td>

                        </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div class='price'>$25.95</div>
                                                                                        </td>
                                                                                    </tr>
                    </tbody>
                </table>
                                                                            <div class='line'></div>
                                                                            <div class='total'>
                                                                                <span style='float:left;'>
                                                                                    <div class='thin dense'>VAT 19%</div>
                                                                                    <div class='thin dense'>Delivery</div>
                        TOTAL
                    </span>
                                                                                <span style='float:right; text-align:right;'>
                                                                                    <div class='thin dense'>$68.75</div>
                                                                                    <div class='thin dense'>$4.95</div>
                        $435.55
                    </span>
                                                                            </div>
            </div>
        </div>
                                                                    <div class='credit-info'>
                                                                        <div class='credit-info-content'>
                                                                            <table class='half-input-table'>
                                                                                <tr>
                                                                                    <td>Please select your card: </td>
                                                                                    <td>
                                                                                        <div class='dropdown' id='card-dropdown'>
                                                                                            <div class='dropdown-btn' id='current-card'>Visa</div>
                                                                                            <div class='dropdown-select'>
                                                                                                <ul>
                                                                                                    <li>Master Card</li>
                                                                                                    <li>American Express</li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' height='80'
                                                                                class='credit-card-image' id='credit-card-image'></img>
                Card Number
                <input class='input-field'></input>
                Card Holder
                <input class='input-field'></input>
                                                                            <table class='half-input-table'>
                                                                                <tr>
                                                                                    <td> Expires
                            <input class='input-field'></input>
                                                                                    </td>
                                                                                    <td>CVC
                            <input class='input-field'></input>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <button class='pay-btn'>Checkout</button>

                                                                        </div>

                                                                    </div>
    </div>
</div>
                </section>


        </Layout >
    )
}

export default Product