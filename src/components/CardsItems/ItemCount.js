import Button from '@mui/material/Button';
import { useState } from 'react';
import './ItemCount.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ItemCount = ({stock, tittle}) => {
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
        <Card sx={{ minWidth: 275 }}>
            <CardContent className="card-item">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {tittle}
                </Typography>
            </CardContent>
            <div className='countItem'>
                <Button onClick={removeItem} variant="outlined" className='button-count'>-</Button>
                <p>{countItem}</p>
                <Button onClick={addItem} variant="outlined">+</Button>
            </div>
            <Button /* onClick={addItem} */ variant="outlined" className='button-cart'>Agregar al carrito</Button>
        </Card>
    )
}

export default ItemCount
