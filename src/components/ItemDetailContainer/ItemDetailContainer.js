import ItemDetail from "../ItemDetail/ItemDetail"
//import  productos  from "../../utils/productsMocks"
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore'
import db from "../../utils/firebaseConfig"



const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    
/*     const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
    } */

    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnaptshop = await getDoc(docRef)
        console.log("docSnaptshop: ", docSnaptshop)
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        console.log("producto unico: ", product)
        return product
    }

    useEffect( () => {
         /* getItem() */
         getProduct()
        .then((prod) => {
            setProduct(prod)
           /*  if(filterProduct === undefined){
                navigate('/notFound')
            } 
            else {
                console.log("FilterProduct: ",filterProduct)
                setProduct(filterProduct)
            } */
        })
        .catch((err) => {
            console.log("Fallo la llamada de products" , err)
        }) 
        
    }, [id])

/*     const filterProduct = productos.find( (product) => {
        return product.id == id
    }) */

    return (
        <>
        {/* <div> Contenedor Item</div> */}
        <ItemDetail data ={product} images = {product.image}/>
        </>
    )
}

export default ItemDetailContainer