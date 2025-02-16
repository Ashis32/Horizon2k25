import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import driftVideo from '../assets/videos/drift.mp4';

// Animation for fading in text
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Introduction = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after video ends
    const timer = setTimeout(() => {
      setShowText(true);
    }, 5000); // Adjust timing as per video length

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative', backgroundColor: '#000' }}>
      {/* Video Background */}
      <video 
        src={driftVideo} 
        autoPlay 
        muted 
        loop 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }} 
      />

      {/* Animated Text */}
      {showText && (
        <Typography 
          variant="h1" // Increased size using variant
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
            animation: `${fadeIn} 2s ease-in-out forwards`,
            fontWeight: 'bold',
            letterSpacing: '6px',
            fontSize: { xs: '2rem', md: '5rem', lg: '7rem' }, // Responsive font size
          }}
        >
          HORIZON 2k25
        </Typography>
      )}
    </Box>
  );
};

export default Introduction;
