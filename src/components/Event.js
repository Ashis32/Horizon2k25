import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { keyframes } from '@emotion/react';
import wheelImage from '../assets/wheel.png';  // Import the wheel image

// Animation for rotating wheel
const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
`;

// Animation for card carousel
const cardCycle = keyframes`
  0% { transform: scale(1); opacity: 1; z-index: 3; }
  25% { transform: scale(0.8); opacity: 0.7; z-index: 2; }
  50% { transform: scale(0.6); opacity: 0.5; z-index: 1; }
  75% { transform: scale(0.8); opacity: 0.7; z-index: 2; }
  100% { transform: scale(1); opacity: 1; z-index: 3; }
`;

// Sample Event Data
const events = [
  { title: 'Event 1', description: 'Details of Event 1' },
  { title: 'Event 2', description: 'Details of Event 2' },
  { title: 'Event 3', description: 'Details of Event 3' }
];

const Events = () => {
  return (
    <Box sx={{ overflow: 'hidden', width: '100%', py: 5, backgroundColor: '#111', color: '#fff' }}>
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
        Events
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Rotating Wheel Image (Left Side) */}
        <Box
          component="img"
          src={wheelImage}
          alt="Rotating Wheel"
          sx={{
            width: '300px',
            height: '300px',
            animation: `${rotateAnimation} 8s linear infinite`,
            mr: 4
          }}
        />

        {/* Event Cards (Right Side) */}
        <Box sx={{ position: 'relative', width: '300px', height: '250px' }}>
          {events.map((event, index) => (
            <Card
              key={index}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#222',
                color: '#fff',
                animation: `${cardCycle} 10s linear infinite`,
                animationDelay: `${index * 5}s`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <CardContent>
                <Typography variant="h5">{event.title}</Typography>
                <Typography variant="body2">{event.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
