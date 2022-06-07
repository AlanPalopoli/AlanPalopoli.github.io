import Button from '@mui/material/Button';
import { useState } from 'react';
import './Card.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({tittle, image, price, stock, id}) => {
    const [showButton, setShowButton] = useState(false)

    return (
        <Card sx={{ minWidth: 275, minHeight: 514 }} className='cardContainer'>
            <div className='card-item'>
                <Typography sx={{ fontSize: 15 }} variant="overline" display="block" color="text.secondary" gutterBottom>
                {tittle}
                </Typography>
            </div>
            <div className='card-item-img'>
                <img src={`/img/${image}`} alt={"producto"}/> 
            </div>
            <div>
                <Button variant={'text'}>
                    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>Ver Producto</Link>
                </Button>
            </div>
            <div>
                <h3>{price}</h3>
            </div>
            <div>
            {!showButton ?
                <ItemCount stock ={stock} setShowButton={setShowButton} />
                :
                <Button  variant="outlined"> <Link to={'/cart'} style={{ textDecoration: 'none' }}>Finalizar compra</Link></Button>
                }
            </div>
        </Card>
    )
}

export default Item
