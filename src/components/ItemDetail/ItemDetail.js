import './ItemDetail.css';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data, images}) => {
    const [showButton, setShowButton] = useState(false)
    
    
    return (
        <div> 
            <section className='sectionItemDetail'>
                <Grid container>
                    <Grid item md={2}></Grid>
                    <Grid item md={8}>
                        <Grid container spacing={1}>
                            {/* <h1>{info.tittle}</h1> */}
                            <Grid item md ={2}>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}} > 
                                    <img src={`/img/${data.image}`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}} > 
                                    <img src={`/img/${data.image2}`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}} > 
                                    <img src={`/img/${data.image3}`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}} > 
                                    <img src={`/img/${data.image4}`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}} > 
                                    <img src={`/img/${data.image5}`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>

                                {/* <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}} key={data.id}> 
                                    <img src={`/img/${data.image[0]}`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}} key={data.id}> 
                                    <img src={`/img/${data.image[1]}`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}} key={data.id}> 
                                    <img src={`/img/${data.image[2]}`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}} key={data.id}> 
                                    <img src={`/img/${data.image[3]}`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box>
                                <Box sx={{width: 98, height: 98, border: '1px dashed grey', marginBottom: 1}} key={data.id}> 
                                    <img src={`/img/${data.image[4]}`} alt="Imagen Producto" className="imgProductoDetailMini"/> 
                                </Box> */}
                                

                            </Grid>
                            <Grid item md={6}>
                                <div>
                                    {/* <img src={`/img/${data.image}`} alt="Imagen Producto" className="imgProductoDetail1"/>  */}
                                    <img src={`/img/${data.image}`} alt="Imagen Producto" className="imgProductoDetail1"/>              
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className='itemDetailBrand'> 
                                    <h2>
                                        {data.brand}
                                    </h2>
                                </div>
                                <div className='itemDetailTittle'>
                                    {/* <h2>{info.tittle}</h2> */}
                                    <h2>{data.description}</h2>
                                </div>
                                <div className='itemDetailPrice'>
                                    <h1>{data.price}</h1>
                                </div>
                                <div>
                                    {!showButton ?
                                    <ItemCount stock ={data.stock} setShowButton={setShowButton} />
                                    :
                                    <Button  variant="outlined"> <Link to={'/cart'} style={{ textDecoration: 'none' }} >Finalizar compra</Link></Button>
                                    }

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