import ItemList from '../ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import db from '../../utils/firebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({title}) => {
    const [products , setProducts] = useState([])
    const { category } = useParams()
    
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

    const filterFirebase = async () => {
        const productRef = collection(db, 'productos')
        const queryResult = query(productRef, where("category", "==", category));
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
            category ?  filterFirebase() : setProducts(productos)
        })
    }, [category])

   
/*     const filterProducts = (arrayProducts) => {
        return arrayProducts.map((product) => { 
            if(product.category == category){
                return setProducts(products => [...products, product])
            }
        })
    }
 */

    return (
        <div>
            {/* <Typography variant="overline" component="div" sx={{fontSize: 30, flexGrow: 1 , marginTop: 2, textAlign:'center', marginLeft: 2, paddingTop:4}}>{title}</Typography> */}
            <ItemList title={title} products={products} category ={category} />
        </div>
    )
}

export default ItemListContainer


