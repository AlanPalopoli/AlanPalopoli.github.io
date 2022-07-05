import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from '../Widgets/CartWidget/CartWidget.js';
import LogoWidget from '../Widgets/LogoWidget/LogoWidget.js';
import LogInWidget from '../Widgets/LogInWidget/LogInWidget.js';
import './NavBar.css'
import { createTheme , ThemeProvider } from '@mui/material/styles';

import ToolbarChildren from '../ToolsBar/ToolBar';


const theme = createTheme({
  palette: {
    primary: {
         main: '#5c75da'
    },
    secondary: {
        main: '#d32f2f',
    },
    third: {
        main: 'transparent'
      }
  },
});

const NavBar = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="navbar">
                <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
                    <AppBar position="static" color='third' elevation={0}>
                        <Toolbar className='navbar-toolbar'>
                            <LogoWidget/>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 , marginTop: 2}}>
                                <a href="/">
                                    <img 
                                        className='imgTitulo' 
                                        src="img/TODOELECTRONICA2.png" 
                                        alt={"Foto Titulo"}
                                    />
                                </a>
                            </Typography>
                            <LogInWidget/>
                            <CartWidget/>
                        </Toolbar>
                        <ToolbarChildren />
                    </AppBar>
                </Box>
            </div>
        </ThemeProvider>
    )
}

export default NavBar