import './ToolBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import { Button, Link  } from '@mui/material';

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
                                        Televisores
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        Computadoras
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        Celulares
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        Hardware
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