import Button from '@mui/material/Button';
import { useState} from 'react';
import './Card.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import { CardActionArea } from '@mui/material';
import { height, style } from '@mui/system';


const Item = ({tittle, image, price, stock, id, description}) => {
    const [showButton, setShowButton] = useState(false)
    const [showProduct, setShowProduct] = useState()


    const getShowProduct = ()  => {
        return setShowProduct (
            <>
            <Card sx={{ minWidth: 175, minHeight: 330, maxHeight: 514 , width: 224, height: 450}} className='card-item-container'>
                {/* <CardActionArea>  */}
                    <div className='cardDiv'>
                        <div className='card-item-img'>
                            <img src={`/img/${image[0]}`} alt={"producto"}/> 
                        </div>
                        <div className='card-item'>
                            <Typography sx={{ fontSize: 15 }} variant="overline" display="block" color="text.secondary" gutterBottom>
                            {tittle}
                            </Typography>
                            <h3>${price}</h3>
                            <h6>{description}</h6>
                        </div>
                        <div className='show-product-button'>
                            <Button variant={'text'}>
                                <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>Ver Producto</Link>
                            </Button>
                        </div>
                        <div className='add-product-button'>
                            {!showButton ?
                                <ItemCount title = {tittle} image = {image} price = {price} id = {id} stock ={stock} description = {description} setShowButton={setShowButton} />
                                :
                                <Button  variant="text"> <Link to={'/cart'} style={{ textDecoration: 'none', backgroundColor: 'black', color: 'white', borderRadius: 20, border: 5, fontFamily: 'system-ui',  fontSize: 14, paddingRight: 10, paddingLeft: 10 }}>Finalizar Compra</Link></Button>
                                }
                        </div>
                </div>
            </Card>
            </>
        )
    }
    

    
    return (
        <div  onMouseEnter={() => (getShowProduct())} onMouseLeave={() => (setShowProduct())}>
            {!showProduct ? (<Card sx={{ minWidth: 175, minHeight: 330, maxHeight: 514 , width: 224, height: 330}} className='card-item-container-default'>
                    <div className='cardDiv'>
                        <div className='card-item-img'>
                            <img src={`/img/${image[0]}`} alt={"producto"}/> 
                        </div>
                        <div className='card-item'>
                            <Typography sx={{ fontSize: 15 }} variant="overline" display="block" color="text.secondary" gutterBottom>
                            {tittle}
                            </Typography>
                            <h3>${price}</h3>
                            <h6>{description}</h6>
                        </div>
                    </div>
            </Card>)
            :
            showProduct
            }
            
        </div>
    )
}

export default Item
