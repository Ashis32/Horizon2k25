// src/components/Header.js
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/Navlogo.png'; // Importing logo

// Navbar Component
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('black');

  // Toggle Drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const backgroundColor =
        window.scrollY > 50 ? 'rgba(0, 0, 0, 0.8)' : 'black';
      setNavbarBg(backgroundColor);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar Links
  const navLinks = [
    'Home',
    'Events',
    'Timeline',
    'Merchandise',
    'Gallery',
    'FAQ',
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: navbarBg,
        transition: 'background-color 0.3s',
        boxShadow: 'none',
        padding: '10px 20px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: '70px', objectFit: 'contain' }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Register Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#E10600',
              color: '#FFF',
              fontWeight: 'bold',
              mr: 1,
              '&:hover': {
                backgroundColor: '#ff2e1f',
              },
            }}
          >
            Register
          </Button>

          {/* Hamburger Menu */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ color: '#FFF' }} />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer for Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              backgroundColor: '#000',
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ height: '30px', objectFit: 'contain' }}
            />
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon sx={{ color: '#FFF' }} />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={index} onClick={toggleDrawer(false)}>
                <ListItemText primary={link} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
