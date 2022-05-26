import ItemList from './ItemList.js';
import { useState, useEffect } from 'react';


const ItemListContainer = () => {
    const [products , setProducts] = useState([])

    const productos = [
        {
            tittle : 'Iphone 7',
            price : 2000,
            image: 'iphone13.png',
            description: '',
            stock: 4,
            id: 1
        },
        {
            tittle : 'Samsung J7',
            price : 2000,
            image: 'samsungj7.png',
            description: '',
            stock: 6,
            id: 2
        },
        {
            tittle : 'Iphone 11',
            price : 2000,
            image: 'iphone13.png',
            description: '',
            stock: 2,
            id: 3
        },
        {
            tittle : 'Iphone 13',
            price : 2000,
            image: 'iphone13.png',
            description: '',
            stock: 10,
            id: 4
        }
    ]

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
        <ItemList  products={products} />
    )
}

export default ItemListContainer


