import Button from '@mui/material/Button';
import { useState} from 'react';
import './Card.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';


const Item = ({tittle, image, price, stock, id}) => {
    const [showButton, setShowButton] = useState(false)
    

    return (
        <div className='cardDiv'>
            <Card sx={{ minWidth: 175, minHeight: 514/* , width: 235, height: 464  */}} className='cardContainer'>
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
                    <ItemCount tittle = {tittle} image = {image} price = {price} id = {id} stock ={stock} setShowButton={setShowButton} />
                    :
                    <Button  variant="outlined"> <Link to={'/cart'} style={{ textDecoration: 'none' }}>Agregar Producto</Link></Button>
                    }
                </div>
            </Card>
        </div>
    )
}

export default Item
