import { Route, Routes, Link } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import Home from "./Home";
import Game from "./Game";
import Village from "./Village";
import Mission from "./Mission";
import Customize from "./Customize";
// import {Link} from 'react-router-dom'

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' ,justifyContent: 'center' }}>
      <CssBaseline />
      <div>
        
      </div>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <div className="">
          <h1><Link to="/">Fill Up</Link></h1>
        </div>
        
        <Divider />
        <List>
          {[<Link to="/Game"> Game</Link>, <Link to="/Village">Village</Link>,<Link to="/Mission">Mission</Link>,<Link to="/Customize">Customize</Link>].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
       
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Village" element={<Village />} />
          <Route path="/Mission" element={< Mission/>} />
          <Route path="/Customize" element={< Customize/>} />
        </Routes>
        </Typography>
        
            
        
        
      </Box>
    </Box>
  );
}