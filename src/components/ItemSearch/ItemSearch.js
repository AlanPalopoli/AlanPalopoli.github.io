import Card from '../CardsItems/Card.js';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const ItemSearch = ({ title ,products, filter}) => {

    return (
        <div>
            <Typography variant="overline" component="div" sx={{fontSize: 16, flexGrow: 1 , marginTop: 2, textAlign:'center', marginLeft: 6, paddingTop:4}}>{title}</Typography>
            <Grid container spacing={0}>
            {!filter ? (<Swiper
                spaceBetween={0}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                modules={[Pagination, Navigation]}
                navigation={true}
            >
                {
                    products.map( ({tittle, price, image, stock, id, description}) => {
                        return (
                            <SwiperSlide key={id}>
                                <Card tittle = {tittle} price= {price} image = {image} stock= {stock} id = {id} description = {description}/>
                           </SwiperSlide>
                        )
                    })
                }  
            </Swiper>
            ): <div className='card-item-container-category'>{products.map(  ({tittle, price, image, stock, id, description}, index) => <Card  key={index} tittle = {tittle} price= {price} image = {image} stock= {stock} id = {id} description = {description}/>)}</div>}
            </Grid>
        </div>
    )
}

export default ItemSearch