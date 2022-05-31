import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from '../Widgets/CartWidget/CartWidget.js';
import LogoWidget from '../Widgets/LogoWidget/LogoWidget.js';
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
                            <LogoWidget/>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 , marginTop: 2}}>
                            <img 
                                className='imgTitulo' 
                                src="img/TODOELECTRONICA.png" 
                                alt={"Foto Titulo"}
                            />
                        </Typography>
                            <CartWidget/>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </ThemeProvider>
    )
}

export default NavBar