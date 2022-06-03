import ItemList from "../components/ItemList/ItemList"
import { useEffect, useState } from "react"
import productos from "../utils/productsMocks"
import Typography from '@mui/material/Typography';

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
            <Typography variant="overline" component="div" sx={{fontSize: 15, flexGrow: 1 , marginTop: 2, textAlign:'left', marginLeft: 2, paddingTop:4}}>Productos Destacados</Typography>
            <ItemList title={'Productos Recomendados'} products={products}/>
        </div>
    )
}

export default Home