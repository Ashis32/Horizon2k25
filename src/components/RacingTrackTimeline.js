// src/components/Road.js
import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag'; // Import Flag icon

// Event Data
const events = [
  {
    name: 'Race Day',
    date: '2023-11-05',
    flagPosition: 10, // Position on the road (0% to 100%)
  },
  {
    name: 'Qualifying',
    date: '2023-11-04',
    flagPosition: 40,
  },
  {
    name: 'Practice',
    date: '2023-11-03',
    flagPosition: 70,
  },
  {
    name: 'Press Conference',
    date: '2023-11-02',
    flagPosition: 90,
  },
];

const Road = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '40vh',
        background: '#E10600', // F1 Red theme
        overflow: 'hidden',
        position: 'relative',
        padding: '20px',
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: '#FFF',
          fontWeight: 'bold',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Event Timeline
      </Typography>

      {/* Road Container */}
      <Box
        sx={{
          width: '100%', // Maintained the reduced width for better layout
          height: '60px', // Reduced height for a slimmer road
          background: '#000', // Black road
          position: 'relative',
          zIndex: 2,
          borderRadius: '10px', // Rounded edges for a smoother look
        }}
      >
        {/* White Center Lines */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '4px', // Thicker center lines
            background: 'repeating-linear-gradient(to right, #FFF 0%, #FFF 50%, transparent 50%, transparent 100%)',
            backgroundSize: '40px 4px', // Larger dashes for better visibility
            transform: 'translateY(-50%)',
          }}
        />

        {/* Event Flags */}
        {events.map((event, index) => (
          <Tooltip
            key={index}
            title={
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {event.name}
                </Typography>
                <Typography variant="body2">Date: {event.date}</Typography>
              </Box>
            }
            arrow
            placement="top"
          >
            <Box
              sx={{
                position: 'absolute',
                left: `${event.flagPosition}%`,
                bottom: '35px', // Adjusted position above the slimmer road
                cursor: 'pointer',
                zIndex: 3,
                color: '#FFF', // White color for the flag icon
                '&:hover': {
                  color: '#FFD700', // Gold color on hover
                },
              }}
            >
              <FlagIcon sx={{ fontSize: '30px' }} /> {/* Adjusted flag icon size */}
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default Road;