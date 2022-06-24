import { Container, Button, TextField } from "@mui/material"
import { useState } from 'react';
import CartContext from '../../context/CartContext'
import { useContext } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '../../components/Modal/Modal'
import { addDoc, collection } from 'firebase/firestore'
import db from "../../utils/firebaseConfig"
import { useNavigate } from "react-router-dom"
import './Cart.css';

const Cart = () => {
    const {cartListItems} = useContext(CartContext)
    const {totalPrice} = useContext(CartContext)
    const {deleteProductToCart} = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
            }
        } ),
        total: totalPrice
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const finishOrder = () => {
        navigate('/')
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccess(orderDoc.id)
        /* cleanCartProducts() */
    }
        
    return (
        <>
            <Container>
                <div className='container-item-list-cart-prod'>
                        {cartListItems.length === 0 ? (
                            <>
                                <p>No hay productos agregados al carrito</p>
                            </>
                        )
                        :
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, marginTop: 1 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Producto</TableCell>
                                        <TableCell align="right">Nombre</TableCell>
                                        <TableCell align="right">Descripción</TableCell>
                                        <TableCell align="right">Precio</TableCell>
                                        <TableCell align="right">Cantidad</TableCell>
                                        <TableCell align="right">Borrar</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className="table-body-container">
                                    {cartListItems.map( (item) => {
                                        return(
                                            <TableRow
                                            key={item.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <img src={`/img/${item.image}`} alt="prod carrito" style={{width : '15%'}} />
                                                </TableCell>
                                                <TableCell align="right">{item.title}</TableCell>
                                                <TableCell align="right">{item.description}</TableCell>
                                                <TableCell align="right">{item.price}</TableCell>
                                                <TableCell align="right">{item.countItem}</TableCell>
                                                <TableCell align="right"> <Button  onClick={() => deleteProductToCart(item)}> <DeleteIcon /> </Button> </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                            <footer className="cart-footer">
                            Precio Total: ${totalPrice}
                            <div>
                                <button onClick={() => setShowModal(true)} className="cart-footer-button"> Terminar Compra </button>
                            </div>
                            
                            </footer>
                        </TableContainer>
                        }
                    <Modal title={success ? <h3 style={{textAlign: "center"}}>Compra realizada</h3> : 'Formulario de contacto'} open={showModal} handleClose={() => setShowModal(false)}>
                    {success ? (
                        <div className="order-success-text">
                            <h5>¡La compra ha sido realizada!<br />
                                Numero de orden: {success}</h5>
                                <div className="order-success-form">
                                    <button onClick={finishOrder}>Aceptar</button>
                                </div>
                            
                        </div>
                    ) : (
                        <form className="form-contact-submit" onSubmit={handleSubmit}>
                            <TextField 
                                id="outlined-basic" 
                                name="name"
                                label="Nombre y Apellido" 
                                variant="outlined" 
                                value={formValue.name}
                                onChange={handleChange}
                            />
                            <TextField 
                                id="outlined-basic" 
                                name="phone"
                                label="Telefono" 
                                variant="outlined" 
                                value={formValue.phone}
                                onChange={handleChange}
                            />
                            <TextField 
                                id="outlined-basic" 
                                name="email"
                                label="Mail" 
                                value={formValue.email}
                                variant="outlined" 
                                onChange={handleChange}
                            />
                            <button type="submit">Terminar</button>
                        </form>
                    )}
                    </Modal>
                        
                </div>
            </Container>
        </>
    )
}

export default Cart
