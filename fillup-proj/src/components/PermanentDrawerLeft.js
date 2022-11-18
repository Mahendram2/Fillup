import { Route, Routes, Link } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Home from "./Home";
import Game from "./Game";
import Village from "./Village";
import Mission from "./Mission";
// import {Link} from 'react-router-dom'

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' ,justifyContent: 'center' }}>
      <CssBaseline />
      <div>
        
      </div>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <h2>Customize your Bottle</h2>
      </AppBar>
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
          <h1>Fill Up</h1>
        </div>
        
        <Divider />
        {/* <List>
          {[<Link to="/Game"> Game</Link>, 'My Village', 'Todays Mission'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Game">Game</Link></li>
        <li><Link to="/Village">Village</Link></li>
        <li><Link to="/Mission">Missionn</Link></li>
        </ul>
       
        
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
        </Routes>
        </Typography>
        
            
        
        
      </Box>
    </Box>
  );
}