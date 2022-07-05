import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
/* import Button from '@mui/material/Button'; */
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../../context/CartContext'
import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { createTheme , ThemeProvider } from '@mui/material/styles';
import './CartWidget.css';

const CartWidget = () => {
    const { cartListItems, totalPrice, deleteProductToCart } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = createTheme({
        palette: {
          primary: {
               main: '#000000'
          }
        }
      });

    return(
        <div className='cart-container-icon'>
            <ShoppingCartIcon
                style={{fontSize:40}} 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    <h3 className='cart-title'>Mi carrito</h3>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod-image'>
                                <img src={`/img/${item.image[0]}`} alt="prod carrito" />
                            </div>
                            <div className='cart-prod-info'>
                                <span>{item.title}</span>
                                <span>${item.price}</span>
                                <span>Cantidad: {item.countItem}</span>
                            </div>
                            <div className='cart-icon-delete'>
                                <button onClick={() => deleteProductToCart(item)}>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                        )
                    })
                    }
                    {cartListItems.length !== 0 && (
                        <>
                            <div className='cart-widget-footer'> 
                                <h5> Unidades: </h5>
                                <h3 className='cart-footer-price'>Precio Total: ${`${totalPrice}`}</h3>
                            </div>
                            <ThemeProvider theme={theme}>
                                <Button variant='contained'><Link to={'/cart'} style={{ textDecoration: 'none',  color:"inherit"}} color='primary'>Ver articulos en tu carrito</Link></Button>
                            </ThemeProvider>
                        </>
                    )}


                    
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget