import { useState } from 'react';
import './Drawer.css';
import { Button } from "@mui/material"
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MouseIcon from '@mui/icons-material/Mouse';
import TvIcon from '@mui/icons-material/Tv';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import TabletIcon from '@mui/icons-material/Tablet';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import RouterIcon from '@mui/icons-material/Router';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom'

const Drawer = () => {
    const [showDrawer, setDrawer] = useState({
        left: false
      });
    
    const categorias = [
        {
            Nombre : "Ordenadores",
            Icon :  <ComputerIcon />
        },
        {
            Nombre : "Smartphones y telefonía",
            Icon :  <PhoneIphoneIcon />
        },
        {
            Nombre : "Audio, foto y video",
            Icon :  <CameraAltIcon />
        },
        {
            Nombre : "Perifericos",
            Icon :  <MouseIcon />
        },
        {
            Nombre : "Televisores",
            Icon :  <TvIcon />
        },
        {
            Nombre: "Tablets",
            Icon :  <TabletIcon />
        },
        {
            Nombre : "Consolas y gaming",
            Icon :  <VideogameAssetIcon />
        },
        {
            Nombre : "Redes",
            Icon :  <RouterIcon />
        }
    ];
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setDrawer({ ...showDrawer, [anchor]: open });
      };

      const list = (anchor) => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {categorias.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {text.Icon}
                    <Link to={`/products/${text.Nombre}`} style={{ textDecoration: 'none', color: "black", marginLeft: 5 }}>{text.Nombre}</Link>
                  </ListItemIcon>
                  <ListItemText/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    return (
        <div className='container-drawer'>
            <Button onClick={toggleDrawer('left', true)}> <DehazeIcon className='dehaze-icon'/>Todas las categorias</Button>
            <SwipeableDrawer
                anchor='left'
                open={showDrawer['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {list('left')}
            </SwipeableDrawer>
        </div>
    )
}

export default Drawer