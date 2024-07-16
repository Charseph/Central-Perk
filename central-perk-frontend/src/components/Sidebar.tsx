import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemText, IconButton, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          position: 'absolute',
          left: 15,
          top: 10,
          zIndex: 1,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '200px',
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)', 
          },
        }}
      >
        <List>
          <div style={{ textAlign: 'center', padding: '16px' }}>
            <Typography variant="h5" fontWeight="bold" color={theme.palette.primary.main}>
              Dashboard
            </Typography>
          </div>
          <div style={{ borderBottom: '2px solid brown', marginTop: '-8px' }}></div>
          <ListItemButton component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Home" sx={{textAlign: 'center', color: "brown" }} />
          </ListItemButton>
          <Divider />
          <ListItemButton component={Link} to="/promotion" onClick={toggleDrawer}>
            <ListItemText primary="Promotion" sx={{textAlign: 'center', color: "brown" }} />
          </ListItemButton>
          <Divider />
        </List>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          width: '200px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '200px',
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)', 
          },
          display: { xs: 'none', md: 'block' },
        }}
        open
      >
        <List>
          <div style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '22px' }}>
            <Typography variant="h5" fontWeight="bold" color={theme.palette.primary.main}>
              Dashboard
            </Typography>
          </div>
          <div style={{ borderBottom: '2px solid brown', marginTop: '-8px' }}></div>
          <ListItemButton component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Home" sx={{textAlign: 'center', color: "brown" }} />
          </ListItemButton>
          <Divider />
          <ListItemButton component={Link} to="/promotion" onClick={toggleDrawer}>
            <ListItemText primary="Promotion" sx={{textAlign: 'center', color: "brown" }} />
          </ListItemButton>
          <Divider />
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
