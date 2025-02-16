// src/components/Merchandise.js
import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';

// Sample Merchandise Data
const merchandiseItems = [
  {
    id: 1,
    name: 'Event T-Shirt',
    description: 'High-quality cotton T-shirt with event logo.',
    price: '₹499',
    image: '/assets/merchandise/tshirt.png',
  },
  {
    id: 2,
    name: 'Event Cap',
    description: 'Stylish cap to show your event spirit.',
    price: '₹299',
    image: '/assets/merchandise/cap.png',
  },
  {
    id: 3,
    name: 'Event Mug',
    description: 'Ceramic mug with event design.',
    price: '₹199',
    image: '/assets/merchandise/mug.png',
  },
  {
    id: 4,
    name: 'Event Hoodie',
    description: 'Warm and comfortable hoodie with event logo.',
    price: '₹999',
    image: '/assets/merchandise/hoodie.png',
  },
];

const Merchandise = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Event Merchandise
      </Typography>
      <Grid container spacing={4}>
        {merchandiseItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card
              sx={{
                maxWidth: 345,
                margin: 'auto',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={item.image}
                alt={item.name}
                sx={{
                  objectFit: 'contain',
                  padding: '10px',
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                  {item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="secondary" fullWidth>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Merchandise;
