import { Container, Button, TableFooter } from "@mui/material"
import CartContext from '../context/CartContext'
import { useContext } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Cart = () => {
    const {cartListItems} = useContext(CartContext)
    const {totalPrice} = useContext(CartContext)
    const {deleteProductToCart} = useContext(CartContext)
    
    return (
        <>
            <Container>
            <div className='container-item-list-cart'>
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
                      <footer className="cart-footer">Precio Total: ${totalPrice}</footer>
                    </TableContainer>
                    }
                   
            </div>
            </Container>
        </>
    )
}

export default Cart

/* import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} */