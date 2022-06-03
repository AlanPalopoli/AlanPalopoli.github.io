import './ToolBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import { Button} from '@mui/material';
import { Link } from 'react-router-dom'

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
                        <Toolbar style={toolbarStyle}>
                            <ul className='toolbar'>
                                <li>
                                    <Button>
                                        <Link to={`/`}>Inicio</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Link to={`/products/televisores`}>Televisores</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Link to={`/products/computadoras`}>Computadoras</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Link to={`/products/celulares`}>Celulares</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Link to={`/products/consolas`}>Consolas</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Link to="/contact">Contacto</Link> 
                                    </Button>
                                </li>
                            </ul>
                            
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </ThemeProvider>

    )
}

export default ToolBar