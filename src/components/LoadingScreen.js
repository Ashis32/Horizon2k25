// src/components/LoadingScreen.js
import React, { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.png';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery('(min-width:900px)'); // Show only on desktop

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Duration of the loading screen

    return () => clearTimeout(timer);
  }, []);

  // Hide on mobile and tablet
  if (!loading || !isDesktop) return null;

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <motion.img
        src={logo}
        alt="F1 Logo"
        style={{ width: '700px', height: 'auto' }}
        initial={{ x: '-100vw' }}
        animate={{ x: '0vw' }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      />
    </Box>
  );
};

export default LoadingScreen;
