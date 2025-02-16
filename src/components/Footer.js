
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import logo from '../assets/Navlogo.png'; // Import the logo

const Footer = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        backgroundColor: '#000', // Black background for F1 theme
        color: '#FFF', // White text color
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Logo Section */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <img 
              src={logo} 
              alt="Website Logo" 
              style={{ width: '80px', height: 'auto' }} // Small logo size
            />
          </Grid>

          {/* Address Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <Typography variant="body2">
              Formula One Event Management<br />
              International Circuit<br />
              Race City, Fast Lane, 123456
            </Typography>
          </Grid>

          {/* Event Coordinators Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Event Coordinators
            </Typography>
            <Typography variant="body2">
              John Doe - +123 456 7890<br />
              Jane Smith - +098 765 4321
            </Typography>
          </Grid>

          {/* Developed By Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Developed By
            </Typography>
            <Typography variant="body2">
              Codex Crew
            </Typography>
            <Typography variant="body2">
              © {new Date().getFullYear()} Formula One Racing. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', mt: 3, fontSize: '0.8rem' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Formula One Racing. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
