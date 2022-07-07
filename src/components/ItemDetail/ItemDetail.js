import './ItemDetail.css';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ItemDetail = ({data}) => {
    const [showButton, setShowButton] = useState(false)
    const [showImage, setShowImage] = useState()
    const [arrayImage, setArrayImage] = useState()
    const [showColor, setColor] = useState('');
    const [showStorage, setStorage] = useState('');
    const [showToastifyValue, setToastifyValue] = useState(false)

    const getImage = ()  => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                if(data.image != undefined) {
                    resolve(
                        data.image.map( (item, index) => {  
                            return (
                                <ButtonGroup
                                    orientation="vertical"
                                    aria-label="vertical outlined button group"
                                    key={index}
                                >
                                    <Button onClick={() => setShowImage(item)}>
                                        <img src={`/img/${item}`} alt="Imagen Producto" className="imgProductoDetailMini"/>
                                    </Button>
                                </ButtonGroup>
                            )
                        }),
                        setShowImage(data.image[0])
                )
            }
            }, 1000)
        })
    }

    useEffect( () => {
        getImage()
        .then((img) => {
            setArrayImage(img)
        })
        .catch((err) => {
            console.log("Fallo la llamada de products" , err)
        })
    }, [data])
    
    return (
        <div> 
            <section className='sectionItemDetail'>
                <Grid container>
                    <Grid className="item-detail-grid-container">
                        <Grid container spacing={1}>
                            <Grid item md ={2} className='container-product-mini border-bottom-line'>
                                <Box sx={{width: 98, height: 98, marginBottom: 1}} >
                                    {arrayImage}
                                </Box>
                            </Grid>
                            <Grid item md={6} className='image-product-detail border-bottom-line'>
                                <div>
                                    <img src={`/img/${showImage}`} alt="Imagen Producto" className="imgProductoDetail1"/>
                                </div>
                            </Grid>
                            <Grid item md={4} className='description-product-detail'>
                                <Grid container className='container-border-detail'>
                                    <Grid item md={12}>
                                        <div className='itemDetailTittle'>
                                            {/* <h2>{data.tittle}</h2> */}
                                            <h4>{data.description}</h4>
                                        </div>
                                    </Grid>
                                    <Grid item md ={12}>
                                        <div className='itemDetailPrice'>
                                            <span>${data.price}</span>
                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div className='itemDetailDues'>
                                            <span>en 12 cuotas de ${(data.price)/12}</span>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className='container-ficha-products container-border-detail'>
                                    <Grid container>
                                        <Grid container className='product-detail-spacing'>
                                            <Grid item md ={12}>
                                                <span className='text-tittles'>
                                                    <b>Marca:</b> {data.brand}
                                                </span>
                                            </Grid>
                                        </Grid>
                                        {data.color &&
                                        <Grid container className='product-detail-spacing'>
                                            <Grid item md ={12}>
                                                <span className='text-tittles'>
                                                    <b> Color: </b> {showColor}
                                                </span>
                                            </Grid>
                                            <Grid item md = {12}>
                                                    <div style={{paddingTop:5}}>
                                                {data.color.map((itemColor, index)  => {
                                                    return (
                                                        <Button key={index} variant='outlined' style={{marginRight:10, marginBottom:5, color:'black', borderColor:"gainsboro", fontFamily:'sans-serif', fontWeight:400}}  onClick={() => setColor(itemColor)}> {itemColor}  </Button>
                                                    )
                                                })
                                                }
                                                </div>
                                            </Grid>
                                        </Grid>
                                        }
                                        {data.color &&
                                        <Grid container className='product-detail-spacing'>
                                            <Grid item md ={12}>
                                                <span className='text-tittles'>
                                                    <b>Almacenamiento: </b> {showStorage}
                                                </span>
                                            </Grid>
                                            <Grid item md = {12}>
                                                <div style={{paddingTop:5}}>
                                                {data.storage.map((itemMemory, index)  => {
                                                    return (
                                                            <Button key={index} variant='outlined' style={{marginRight:10, marginBottom:5, color:'black', borderColor:"gainsboro", fontFamily:'sans-serif', fontWeight:400}} onClick={() => setStorage(itemMemory)}> {itemMemory}  </Button>
                                                    )
                                                })
                                                }
                                                </div>
                                            </Grid>
                                        </Grid>
                                        }
                                        {data.stock ? 
                                        <Grid item md = {12}>
                                            <div className='div-stock-detail'>
                                                <b>
                                                    <h4>
                                                        Stock disponible
                                                    </h4>
                                                </b>
                                            </div>
                                        </Grid>
                                        :
                                        <Grid item md = {12}>
                                            <div className='div-stock-detail'>
                                                <b>
                                                    <h4>
                                                        Stock no disponible
                                                    </h4>
                                                </b>
                                            </div>
                                        </Grid>
                                        }
                                        <Grid container>
                                            <Grid item md={12}>
                                                <span className='text-tittles'>
                                                    <b>Cantidad:</b> ({data.stock} disponibles)
                                                </span>
                                            </Grid>
                                            <Grid item md={12}>
                                                {!showButton ?
                                                <ItemCount 
                                                    title = {data.tittle}
                                                    image = {data.image} 
                                                     price = {data.price} 
                                                    id = {data.id} 
                                                    stock = {data.stock}
                                                    description = {data.description}
                                                    color = {data.color}
                                                    storage = {data.storage}
                                                    colorPick = {showColor}
                                                    storagePick = {showStorage}
                                                    setShowButton={setShowButton}
                                                    />
                                                :
                                                <div style={{textAlign:'center'}}>
                                                    <Button  variant="text" > <Link to={'/cart'} style={{ textDecoration: 'none', backgroundColor: 'black', color: 'white', borderRadius: 20, border: 5,  fontFamily: 'system-ui', fontSize: 14, paddingRight: 10, paddingLeft: 10 }} >Finalizar compra</Link></Button>
                                                </div>
                                                }
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={12} >
                                        <FormControlLabel
                                            control={<Checkbox value="garantía" color="primary"/>}
                                            label= {`Garantía por rotura y daño accidental + 1 año por ${(15 / 100) * data.price}`}
                                        />
                                    </Grid>
                                </div>  
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </div>
    )
}

export default ItemDetail