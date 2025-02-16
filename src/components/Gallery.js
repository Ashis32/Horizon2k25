import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import { keyframes } from '@emotion/react';
import img1 from '../assets/gallery/image1.jpg';
import img2 from '../assets/gallery/image2.jpg';
import img3 from '../assets/gallery/image3.jpg';
import img4 from '../assets/gallery/image4.jpg';

const images = [img1, img2, img3, img4];

// Infinite scrolling animation for Left to Right
const scrollLeftToRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// Infinite scrolling animation for Right to Left
const scrollRightToLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(50%); }
`;

const Gallery = () => {
  return (
    <Box sx={{ overflow: 'hidden', width: '100%', py: 5, backgroundColor: '#000', color: '#fff' }}>
      {/* Section Title */}
      <Typography 
        variant="h3" 
        align="center" 
        sx={{ 
          mb: 4, 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          letterSpacing: '2px' 
        }}
      >
        Event Gallery
      </Typography>

      {/* Row 1 - Left to Right */}
      <Box
        sx={{
          display: 'flex',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          animation: `${scrollLeftToRight} 20s linear infinite`,
        }}
      >
        {/* Repeat images infinitely by duplicating them */}
        {[...images, ...images, ...images].map((image, index) => (
          <CardMedia
            key={`top-${index}`}
            component="img"
            image={image}
            alt={`Gallery ${index}`}
            sx={{
              width: '300px',
              height: '200px',
              objectFit: 'cover',
              mx: 1,
              borderRadius: '10px',
            }}
          />
        ))}
      </Box>

      {/* Row 2 - Right to Left */}
      <Box
        sx={{
          display: 'flex',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          animation: `${scrollRightToLeft} 20s linear infinite`,
        }}
      >
        {/* Repeat images infinitely by duplicating them */}
        {[...images, ...images, ...images].map((image, index) => (
          <CardMedia
            key={`bottom-${index}`}
            component="img"
            image={image}
            alt={`Gallery ${index}`}
            sx={{
              width: '300px',
              height: '200px',
              objectFit: 'cover',
              mx: 1,
              borderRadius: '10px',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
