import ItemList from '../ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import productos from '../../utils/productsMocks.js';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({title}) => {
    const [products , setProducts] = useState([])
    const { category } = useParams()
    
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000)
        })
    }
    
    useEffect( () => {
        setProducts([])
        getProducts()
        .then((response) => {
            //setProducts(response)
            filterProducts(response)
            console.log("ENTRO EN USE EFFECT")
        })
        .catch((err) => {
            console.log("Fallo la llamada de products" , err)
        })
    }, [category])


    const filterProducts = (arrayProducts) => {
        return arrayProducts.map((product) => { 
            if(product.category == category){
                return setProducts(products => [...products, product])
            }
        })
    }


    return (
        <div>
        <Typography variant="overline" component="div" sx={{fontSize: 15, flexGrow: 1 , marginTop: 2, textAlign:'left', marginLeft: 2, paddingTop:4}}>{title}</Typography>
        <ItemList  products={products} />
        </div>
    )
}

export default ItemListContainer


