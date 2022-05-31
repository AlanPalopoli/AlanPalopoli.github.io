import ItemList from '../ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import productos from '../../utils/productsMocks.js';
const ItemListContainer = ({title}) => {
    const [products , setProducts] = useState([])

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

    useEffect( () => {
        getProducts()
        .then((response) => {
            setProducts(response)
        })
        .catch((err) => {
            console.log("Fallo la llamada de products" , err)
        })
    })

    return (
        <div>
        <Typography variant="overline" component="div" sx={{fontSize: 15, flexGrow: 1 , marginTop: 2, textAlign:'left', marginLeft: 2, paddingTop:4}}>{title}</Typography>
        <ItemList  products={products} />
        </div>
    )
}

export default ItemListContainer


