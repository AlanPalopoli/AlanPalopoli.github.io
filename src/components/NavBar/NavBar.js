import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './NavBar.css'
import { createTheme , ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5c75da'
    },
    secondary: {
        main: '#d32f2f',
      },
  },
});

const NavBar = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="navbar">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color='primary'>
                        <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <a href="localhost:3000" className="navIconTel">
                                <img 
                                className='imgLogo' 
                                src="img/telefono-movil.png" 
                                alt={"Foto Celular"}
                                />
                            </a>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img 
                                className='imgTitulo' 
                                src="img/TODOCELULARES.png" 
                                alt={"Foto Titulo"}
                            />
                        </Typography>
                        <Button color="inherit">    
                            <a href="" className="">
                                <img 
                                class="imgCarrito" 
                                src="img/carrito-de-compras.png"
                                alt={'Foto Carrito'}
                                />
                            </a>
                        </Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </ThemeProvider>
    )
}

export default NavBar