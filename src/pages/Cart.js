import { Container, Button } from "@mui/material"
import CartContext from '../context/CartContext'
import { useContext } from "react"
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    const {cartListItems} = useContext(CartContext)
    return (
        <>
            <Container>
            <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod-image'>
                                <img src={`/img/${item.image}`} alt="prod carrito" />
                            </div>
                            <div className='cart-prod-info'>
                                <span>{item.title}</span>
                                <span>${item.price}</span>
                                <span>Cantidad: {item.countItem}</span>
                                {/* <span>Precio Total: {`${totalPrice * item.countItem}`}</span> */}
                            </div>
                            <div className='cart-icon-delete'>
                                <button>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                        )
                    })}
            </div>
            </Container>
        </>
    )
}

export default Cart