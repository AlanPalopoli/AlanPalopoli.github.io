import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

const CartWidget = () => {
    return (
        <Button color="inherit">
            <ShoppingCartIcon style={{ fontSize: 60 }}/>
        </Button>
    )
}

export default CartWidget