import './ItemDetail.css';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';
import ButtonGroup from '@mui/material/ButtonGroup';

const ItemDetail = ({data, images}) => {
    const [showButton, setShowButton] = useState(false)
    const [showImage, setShowImage] = useState()
    const [arrayImage, setArrayImage] = useState()


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
                    {/* <Grid item md={2}></Grid> */}
                    <Grid className="item-detail-grid-container">
                        <Grid container spacing={1}>
                            <Grid item md ={2} className='container-product-mini'>
                                <Box sx={{width: 98, height: 98, marginBottom: 1}} >
                                    {arrayImage}
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <div>
                                    <img src={`/img/${showImage}`} alt="Imagen Producto" className="imgProductoDetail1"/>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className='itemDetailBrand'> 
                                    <h2>
                                        {data.brand}
                                    </h2>
                                </div>
                                <div className='itemDetailTittle'>
                                    {/* <h2>{data.tittle}</h2> */}
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
                    {/* <Grid item md={2}></Grid> */}
                </Grid>
            </section>
        </div>
    )
}

export default ItemDetail