import { useState } from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';

const ItemCount = ({stock, setShowButton}) => {
    const [countItem, setCount] = useState(1)
    
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
                <Button  onClick={() => setShowButton(true)}  variant="outlined" >Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount