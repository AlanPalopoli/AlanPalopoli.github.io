import { useState , useContext  } from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';
import CartContext from '../../context/CartContext'

const ItemCount = ({ image, title, price, stock, id,  description, setShowButton}) => {

    const [countItem, setCount] = useState(1)
    const { addProductToCart } = useContext(CartContext)
    
    const addItem = () => {
        if(countItem < stock){
            setCount (countItem + 1)
        }
    }
    
    const removeItem = () => {
        if(countItem > 1){
            setCount (countItem - 1)
        }
    }
    return (
        <div>
            <div className='countItem'>
                <Button onClick={removeItem} variant="outlined" className='button-count' sx={{minWidth:'34px'}}>-</Button>
                <p>{countItem}</p>
                <Button onClick={addItem} variant="outlined" sx={{minWidth:'34px'}}>+</Button>
            </div>
            <div className='button-cart'>
                <Button  onClick={() => (addProductToCart({ image, title, price, stock, id, countItem,  description}), setShowButton(true)) }  variant="text" >Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount