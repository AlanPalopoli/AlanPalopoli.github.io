import Button from '@mui/material/Button';
import './Card.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';

const Item = ({tittle, image, price, stock, id, description}) => {
   
    return (
        <Card elevation={0} className='card-item-container'>
            <CardContent>
                <div className='cardDiv'>
                    <div className='card-item-img'>
                        <img src={`/img/${image[0]}`} alt={"producto"}/> 
                    </div>
                    <div className='card-description-item'>
                            <Typography sx={{ fontSize: 15 }} variant="overline" display="block" color="text.secondary" gutterBottom>
                            {tittle}
                            </Typography>
                            <h3>${price}</h3>
                            <h6>{description}</h6>
                    </div>
                    <div className='card_div_button'>
                        <Button variant={'contained'} className='card-btn-details'>
                            <Link to={`/product/${id}`} style={{ textDecoration: 'none',  color:"inherit" }} >Ver Producto</Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Item
