import './ItemDetail.css';
import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';

const ItemDetail = ({info}) => {
    const buttonStyle = {
        minWidth: '34px'
    };
    const [countItem, setCount] = useState(1)

    const addItem = () => {
        if(countItem < info.stock){
            setCount (countItem + 1)
        }
    }

    const removeItem = () => {
        if(countItem > 1){
            setCount (countItem - 1)
        }
    }

    return (
        <div> 
            <section className='sectionItemDetail'>
                <Grid container>
                    <Grid item md={2}></Grid>
                    <Grid item md={8}>
                        <Grid container spacing={1}>
                            {/* <h1>{info.tittle}</h1> */}
                            <Grid item md ={2}>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}}> 
                                    <img src={`/img/iphone13Detail2.png`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}}> 
                                    <img src={`/img/iphone13Detail3.png`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}}> 
                                    <img src={`/img/iphone13Detail4.png`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}}> 
                                    <img src={`/img/iphone13Detail5.png`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}}> 
                                    <img src={`/img/iphone13Detail6.png`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <div>
                                    <img src={`/img/${info.image}`} alt="Imagen Producto" className="imgProductoDetail1"/>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className='itemDetailBrand'> 
                                    <h2>
                                        {info.brand}
                                    </h2>
                                </div>
                                <div className='itemDetailTittle'>
                                    {/* <h2>{info.tittle}</h2> */}
                                    <h2>{info.description}</h2>
                                </div>
                                <div className='itemDetailPrice'>
                                    <h1>{info.price}</h1>
                                </div>
                                <div className='itemDetailCount'>
                                    <Button onClick={removeItem} variant="outlined" style={buttonStyle}>-</Button>
                                    <h3>{countItem}</h3>
                                    <Button onClick={addItem} variant="outlined" style={buttonStyle}>+</Button>
                                </div>
                                <div className='buttonBuyItemDetail'>
                                <Button variant="contained">Comprar</Button>
                                </div>

                            </Grid>
                            
                        </Grid>
                    </Grid>
                    <Grid item md={2}></Grid>
                </Grid>
            </section>
        </div>
    )
}

export default ItemDetail