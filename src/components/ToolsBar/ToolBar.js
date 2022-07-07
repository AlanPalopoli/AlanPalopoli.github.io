import './ToolBar.css';
import { Button } from "@mui/material"
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import Drawer from '../../components/ToolsBar/Drawer/Drawer';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

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
        third: {
             main: 'transparent'
        }
    }
  });

const ToolbarChildren = () => {
    const [textSearch, setTextSearch] = useState('');
    let navigate = useNavigate();

    const CustomizedInputBase = () => {
      return (
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: 'floralwhite'}}
          elevation={0}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar productos, marcas y más..."
            inputProps={{ 'aria-label': 'Buscar productos, marcas y más...' }}
            onChange={handleChange}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleSubmit}>
            <SearchIcon />
          </IconButton>
        </Paper>
      );
    }
  


    const handleChange = (e) => {
        setTextSearch(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/search/${textSearch}`, { replace: true });
  }


    return (
        <ThemeProvider theme={theme}>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color='third' elevation={0}>
                        <Toolbar style={toolbarStyle}  className="toolbar-style">
                            <div className='toolbar'>
                                <div className='div-drawer'>
                                  <Drawer/> 
                                </div>
                                <div className='div-search-toolbar'>
                                  {CustomizedInputBase()}
                                </div>
                                <div className='div-button-ofertas'>
                                  <Button><Link to={'/ofertas'} style={{ textDecoration: 'none',  color:"inherit" }}>  Ofertas Top </Link></Button>
                                </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </ThemeProvider>

    )
}

export default ToolbarChildren