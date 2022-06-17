import './ItemDetail.css';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';
import ButtonGroup from '@mui/material/ButtonGroup';

const ItemDetail = ({data, images}) => {
    const [showButton, setShowButton] = useState(false)
    const [showImage, setShowImage] = useState()
    
    return (
        <div> 
            <section className='sectionItemDetail'>
                <Grid container>
                    <Grid item md={2}></Grid>
                    <Grid item md={8}>
                        <Grid container spacing={1}>
                            {/* <h1>{info.tittle}</h1> */}
                            <Grid item md ={2} className='container-product-mini'>
                                <Box sx={{width: 98, height: 98, marginBottom: 1}} > 
                                    <ButtonGroup
                                        orientation="vertical"
                                        aria-label="vertical outlined button group"
                                    >
                                        <Button onClick={() => setShowImage(data.image)}>
                                            <img src={`/img/${data.image}`} alt="Imagen Producto" className="imgProductoDetailMini"/>
                                        </Button>
                                    </ButtonGroup>
                                </Box>
                                <Box sx={{width: 98, height: 98, marginBottom: 1}} > 
                                    <ButtonGroup
                                        orientation="vertical"
                                        aria-label="vertical outlined button group"
                                    >
                                        <Button onClick={() => setShowImage(data.image2)}>
                                            <img src={`/img/${data.image2}`} alt="Imagen Producto" className="imgProductoDetailMini"/>
                                        </Button>
                                    </ButtonGroup>
                                </Box>
                                <Box sx={{width: 98, height: 98, marginBottom: 1}} > 
                                    <ButtonGroup
                                        orientation="vertical"
                                        aria-label="vertical outlined button group"
                                    >
                                        <Button onClick={() => setShowImage(data.image3)}>
                                            <img src={`/img/${data.image3}`} alt="Imagen Producto" className="imgProductoDetailMini"/>
                                        </Button>
                                    </ButtonGroup>
                                </Box>
                                <Box sx={{width: 98, height: 98, marginBottom: 1}} > 
                                    <ButtonGroup
                                        orientation="vertical"
                                        aria-label="vertical outlined button group"
                                    >
                                        <Button onClick={() => setShowImage(data.image4)}>
                                            <img src={`/img/${data.image4}`} alt="Imagen Producto" className="imgProductoDetailMini"/>
                                        </Button>
                                    </ButtonGroup>
                                </Box>
                                <Box sx={{width: 98, height: 98, marginBottom: 1}} > 
                                    <ButtonGroup
                                        orientation="vertical"
                                        aria-label="vertical outlined button group"
                                    >
                                        <Button onClick={() => setShowImage(data.image5)}>
                                            <img src={`/img/${data.image5}`} alt="Imagen Producto" className="imgProductoDetailMini"/>
                                        </Button>
                                    </ButtonGroup>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <div>
                                    {/* <img src={`/img/${data.image}`} alt="Imagen Producto" className="imgProductoDetail1"/>  */}
                                    {showImage ?
                                        <img src={`/img/${showImage}`} alt="Imagen Producto" className="imgProductoDetail1"/>
                                        :
                                        <img src={`/img/${data.image}`} alt="Imagen Producto" className="imgProductoDetail1"/>
                                    }
                                                  
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
                                    <h1>${data.price}</h1>
                                </div>
                                <div>
                                    {!showButton ?
                                    <ItemCount title = {data.tittle} image = {data.image} price = {data.price} id = {data.id} stock ={data.stock} description = {data.description} setShowButton={setShowButton} />
                                    :
                                    <Button  variant="text"> <Link to={'/cart'}style={{ textDecoration: 'none', backgroundColor: 'black', color: 'white', borderRadius: 20, border: 5,  fontFamily: 'system-ui', fontSize: 14, paddingRight: 10, paddingLeft: 10 }} >Finalizar compra</Link></Button>
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