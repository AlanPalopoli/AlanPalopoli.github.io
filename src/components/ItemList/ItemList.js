import Card from '../CardsItems/Card.js';
import { Grid } from '@mui/material';

const ItemList = ({products}) => {

    return (
        <div>
            <Grid container spacing={2}>
                {
                    products.map( ({tittle, price, image, id, stock}) => {
                        return (
                            <Grid item md={3} key={id}>
                                <Card tittle = {tittle} price= {price} image = {image} stock= {stock} id = {id}/>
                            </Grid>
                        )
                    })
                }   
            </Grid>
        </div>
    )
}

export default ItemList