// src/components/RaceTrackBorder.js
import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';

// Animation for scrolling effect
const scrollAnimation = keyframes`
  0% { background-position-y: 0; }
  100% { background-position-y: 100%; }
`;

const RaceTrackBorder = () => {
  return (
    <>
      {/* Left Border */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '20px',
          height: '100vh',
          backgroundImage: 'linear-gradient(180deg, #fff 25%, #000 25%, #000 50%, #fff 50%, #fff 75%, #000 75%, #000)',
          backgroundSize: '100% 40px',
          animation: `${scrollAnimation} 6s linear infinite`,
          zIndex: 9998,
          display: { xs: 'none', sm: 'block' }, // Hide on mobile
        }}
      />

      {/* Right Border */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '20px',
          height: '100vh',
          backgroundImage: 'linear-gradient(180deg, #fff 25%, #000 25%, #000 50%, #fff 50%, #fff 75%, #000 75%, #000)',
          backgroundSize: '100% 40px',
          animation: `${scrollAnimation} 6s linear infinite`,
          zIndex: 9998,
          display: { xs: 'none', sm: 'block' }, // Hide on mobile
        }}
      />
    </>
  );
};

export default RaceTrackBorder;
