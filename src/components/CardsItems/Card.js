import Button from '@mui/material/Button';
import { useState } from 'react';
import './Card.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

const Item = ({tittle, image, price, stock, id}) => {
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
                <Button variant={'contained'}>
                    <Link to={`/product/${id}`}>Ver Producto</Link>
                </Button>
            </div>
            <div>
                <h3>${price}</h3>
            </div>
            <div className='countItem'>
                <Button onClick={removeItem} variant="outlined" className='button-count' sx={{minWidth:'34px'}}>-</Button>
                <p>{countItem}</p>
                <Button onClick={addItem} variant="outlined" sx={{minWidth:'34px'}}>+</Button>
            </div>
            <div className='button-cart'>
                <Button /* onClick={addItem} */ variant="outlined" >Agregar al carrito</Button>
            </div>
        </Card>
    )
}

export default Item
