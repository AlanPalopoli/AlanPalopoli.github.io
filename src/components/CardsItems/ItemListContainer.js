import ItemCount from './ItemCount.js';
import { Grid } from '@mui/material';


const ItemListContainer = () => {
    return (
        <div>
             <Grid container spacing={2}>
                <Grid item md={3}>
                    <ItemCount tittle = {"Iphone 7"}  stock = {"5"}/>
                </Grid>
                <Grid item md={3}>
                    <ItemCount tittle = {"Samsung Galaxy"}  stock = {"5"}/>
                </Grid>
                <Grid item md={3}>
                    <ItemCount tittle = {"Xiaomi 1000"} stock = {"5"}/>
                </Grid>
                <Grid item md={3}>
                    <ItemCount tittle = {"Motorola"}  stock = {"2"}/>
                </Grid>
                </Grid>
        </div>
        
    )
}

export default ItemListContainer


