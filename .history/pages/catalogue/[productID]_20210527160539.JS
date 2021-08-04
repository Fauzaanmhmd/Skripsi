import { useRouter } from 'next/router'
import Layout from "../../components/Layout"
import SweetAlert from "react-bootstrap-sweetalert";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/nextjs-material-dashboard-pro/views/sweetAlertStyle.js";


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

    const useStyles = makeStyles(styles);
    const sweetAlertStyle = { display: "block", marginTop: "-100px" }

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
                    <button
                        onclick="alert('Pesanan anda di proses')" className="form_button">Pesan</button>
                </div>

            </section>
        </Layout >
    )
}


export default Product
export default function SweetAlertDemo() {
    const classes = useStyles();
    const [alert, setAlert] = React.useState(null);
    const hideAlert = () => {
        setAlert(null);
    }
    const successAlert = () => {
        setAlert(
            <SweetAlert
                success
                style={sweetAlertStyle}
                title="Good job!"
                onConfirm={() => this.hideAlert()}
                onCancel={() => this.hideAlert()}
                confirmBtnCssClass={
                    classes.button + " " + classes.success
                }
            >
                You clicked the button!
        </SweetAlert>
        );
    }
}
