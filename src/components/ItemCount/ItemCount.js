import { useState , useContext  } from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';
import CartContext from '../../context/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ({ image, title, price, stock, id,  description, color, storage, colorPick, storagePick,  setShowButton}) => {

    const [countItem, setCount] = useState(1)
    const { addProductToCart } = useContext(CartContext)

    const getToastify = ()  => {
        return (
            ((color && !colorPick)  || (storage && !storagePick)) ?
            (
            <>
            {
                toast.error('Ingrese todas las opciones para agregar el producto', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
            }
            </>
            )
            :
            addProductToCart(({ image, title, price, stock, id, countItem,  description, colorPick, storagePick}), setShowButton(true))
        )
    }

    
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
        <div style={{textAlign:'center'}}>
            <div className='countItem'>
                <Button onClick={removeItem} variant="outlined" className='button-count' sx={{minWidth:'34px'}}>-</Button>
                <p>{countItem}</p>
                <Button onClick={addItem} variant="outlined" sx={{minWidth:'34px'}}>+</Button>
            </div>
            <div className='button-cart'>
                <Button  onClick={() => (getToastify())} variant="text"> Agregar al carrito </Button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ItemCount