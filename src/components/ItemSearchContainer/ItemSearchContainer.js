import ItemSearch from '../ItemSearch/ItemSearch.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import db from '../../utils/firebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemSearchContainer = ({}) => {
    const [products , setProducts] = useState([])
    const { filter } = useParams()
    
    const getProducts = async () => {
        const productCollection = collection(db, "productos")
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    const brandFirebase = async () => {
        const productRef = collection(db, 'productos')
        const queryResult = query(productRef,  where("brand", "==", filter));
        const querySnapshot = await getDocs(queryResult);
        const productList = querySnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return setProducts(productList)
    }
    
    useEffect( () => {
        setProducts([])
        getProducts()
        .then( (productos) => {
            filter ?  brandFirebase() : setProducts(productos)
        })
    }, [filter])

    return (
        <div>
            <ItemSearch products={products} filter ={filter} />
        </div>
    )
}

export default ItemSearchContainer