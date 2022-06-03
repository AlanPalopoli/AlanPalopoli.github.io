import ItemDetail from "../ItemDetail/ItemDetail"
import  productos  from "../../utils/productsMocks"
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";



const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    
/*     const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    } */

    useEffect( () => {
        /* getItem()
        .then((response) => {
            setProduct(response)
        })
        .catch((err) => {
            console.log("Fallo la llamada de products" , err)
        }) */
        if(filterProduct === undefined){
            navigate('/NotFound')
        }
        else {
            setProduct(filterProduct)
        }
    }, [id])

    const filterProduct = productos.find( (product) => {
        return product.id == id
    })

    return (
        <>
        {/* <div> Contenedor Item</div> */}
        <ItemDetail info ={product} />
        </>
    )
}

export default ItemDetailContainer