import ItemDetail from "../ItemDetail/ItemDetail"
import { producto } from "../../utils/productsMocks"
import { useState, useEffect } from 'react';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    
    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(producto)
            }, 2000)
        })
    }

    useEffect( () => {
        getItem()
        .then((response) => {
            setProduct(response)
        })
        .catch((err) => {
            console.log("Fallo la llamada de products" , err)
        })
    }, [])

    return (
        <>
        {/* <div> Contenedor Item</div> */}
        <ItemDetail info ={product} />
        </>
    )
}

export default ItemDetailContainer