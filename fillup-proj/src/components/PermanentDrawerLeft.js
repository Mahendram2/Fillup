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
import Win from "./Win";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import Info from "./Info";

// import {Link} from 'react-router-dom'

const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
  console.log(props)
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
            backgroundColor:"#C1D9FB"
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <div className="flex gap-12 flex-col">
          <div className="">
          <h1><Link style={{fontFamily:"Bad Script",fontSize: "64px", lineHeight: "126px"}} to="/">Fill Up</Link></h1>
          <Divider />
        </div>
        <div>
          
                  <List >
                  {[<Link to="/Game"> <div className="flex justify-between"> <p className="text-lg"> Game </p><BsFillArrowRightCircleFill/></div> </Link>, <Link to="/Mission"> <div className="flex justify-between"> <p className="text-lg"> Mission </p><BsFillArrowRightCircleFill/></div> </Link>,<Link to="/Info"> <div className="flex justify-between"> <p className="text-lg"> Learn More </p><BsFillArrowRightCircleFill/></div> </Link>].map((text) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText  primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    
                    
                  </List>

        </div>
           <div className="mt-8">
            <img src={props.bottle} />
          </div>
        </div>
        
        
       
        
       
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        bottle ={props.bottle}
        setBottle ={props.setBottle}
      >
        <Toolbar />
        <Typography paragraph>
        <Routes>
          <Route path="/" element={<Home bottle={props.bottle} setBottle={props.setBottle} />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Village" element={<Village />} />
          <Route path="/Mission" element={< Mission/>} />
          <Route path="/Info" element={<Info bottle={props.bottle}/>} />
          <Route path="/Win/:score" element={<Win/>} />
        </Routes>
        </Typography>
        
            
        
        
      </Box>
    </Box>
  );
}
