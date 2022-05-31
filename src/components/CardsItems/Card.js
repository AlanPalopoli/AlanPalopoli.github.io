import Button from '@mui/material/Button';
import { useState } from 'react';
import './Card.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const Item = ({tittle, image, price, stock }) => {
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
        <Card sx={{ minWidth: 275 }} className='cardContainer'>
            <div className='card-item'>
                <Typography sx={{ fontSize: 15 }} variant="overline" display="block" color="text.secondary" gutterBottom>
                {tittle}
                </Typography>
            </div>
            <div className='card-item-img'>
                <img src={`/img/${image}`} alt={"producto"}/> 
            </div>
            <div>
                <h3>${price}</h3>
            </div>
            <div className='countItem'>
                <Button onClick={removeItem} variant="outlined" className='button-count'>-</Button>
                <p>{countItem}</p>
                <Button onClick={addItem} variant="outlined">+</Button>
            </div>
            <div className='button-cart'>
                <Button /* onClick={addItem} */ variant="outlined" >Agregar al carrito</Button>
            </div>
        </Card>
    )
}

export default Item
