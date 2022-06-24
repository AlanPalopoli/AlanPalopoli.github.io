import './ToolBar.css';
import { Button, TextField } from "@mui/material"
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import Drawer from '../../components/ToolsBar/Drawer/Drawer'

const toolbarStyle = {
    minHeight: '30px',
    maxHeight: '40px'
  };

const theme = createTheme({
    palette: {
      primary: {
        main: '#E7E6EF'
      },
      secondary: {
          main: '#d32f2f',
        },
    }
  });

const ToolBar = () => {
    

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color='primary'>
                        <Toolbar style={toolbarStyle}  className="toolbar-style">
                            <Drawer/>
                            {/* <ul className='toolbar'>
                                <li>
                                    <Button>
                                        <Link to={`/`} style={{ textDecoration: 'none' }}>Inicio</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Link to={`/products/televisores`} style={{ textDecoration: 'none' }}>Televisores</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Link to={`/products/computadoras`} style={{ textDecoration: 'none' }}>Computadoras</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Link to={`/products/celulares`} style={{ textDecoration: 'none' }}>Celulares</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Link to={`/products/consolas`} style={{ textDecoration: 'none' }}>Consolas</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Link to="/contact" style={{ textDecoration: 'none' }}>Contacto</Link> 
                                    </Button>
                                </li>
                            </ul> */}
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </ThemeProvider>

    )
}

export default ToolBar