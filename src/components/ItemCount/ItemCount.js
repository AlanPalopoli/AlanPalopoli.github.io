import { useState , useContext  } from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';
import CartContext from '../../context/CartContext'
import Toastify from '../Toastify/Toastify'
import Snackbar from '@mui/material/Snackbar';
import { ToastContainer, toast } from 'react-toastify';


const ItemCount = ({ image, title, price, stock, id,  description, color, storage, colorPick, storagePick,  setShowButton}) => {

    const [countItem, setCount] = useState(1)
    const { addProductToCart } = useContext(CartContext)
    const [showToastify, setShowToastify] = useState()

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };



    const getToastify = ()  => {
        return (
            !color || !storage ? 
            addProductToCart(({ image, title, price, stock, id, countItem,  description}), setShowButton(true))
            :
            (color || storage) && (!colorPick  || !storagePick) ?
            (
            <>
            {openSnackBar()}
            {console.log("entro aca")}
            
            
            {/* <Toastify typeError={"Ingrese todas las opciones para agregar el producto"}/> */}
            </>
            )
            :
            addProductToCart(({ image, title, price, stock, id, countItem,  description, colorPick, storagePick}), setShowButton(true))
        )
    }

    const openSnackBar = () => {
        return (
            <div>
            {handleClick}
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
            />
            </div>
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
        </div>
    )
}

export default ItemCount





/* export default function CustomizedSnackbars() {
  
  return (
    
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert>
    </Stack>
  );
} */