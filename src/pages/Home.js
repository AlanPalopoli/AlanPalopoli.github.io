import ItemList from "../components/ItemList/ItemList"
import { useEffect, useState } from "react"
import productos from "../utils/productsMocks"


const Home = () => {
    const [products, setProducts] = useState([])
        
    useEffect( () => {
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
    }, [])
    
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000)
        })
    }  

    return(
        <div className='general-container'>
            <ItemList title={'Productos Destacados'} products={products}/>
            <ItemList title={'Productos Recomendados'} products={products}/>
        </div>
    )
}

export default Home