import { useRouter } from 'next/router'

const Product = () => {
    const router = useRouter()
    console.log("🚀 ~ file: [productID].JS ~ line 5 ~ Product ~ router", router)

    return (
        <div>
            Product Detail Mantap
        </div>
    )
}