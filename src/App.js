// src/App.js
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import RaceTrackBorder from './components/RaceTrackBorder';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Event from './components/Event';
import RacingTrackTimeline from './components/RacingTrackTimeline';
import Merchandise from './components/Merchandise';
import Introduction from './components/Introduction';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Duration of the loading screen

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <RaceTrackBorder />
      <Header />
      <Container sx={{ py: 5, textAlign: 'center' }}>
        <Introduction/>
        <Event />
        <Gallery />
        <Merchandise />
        <RacingTrackTimeline/>
        <Typography variant="h3" color="secondary" gutterBottom sx={{ mt: 5 }}>
          Upcoming Events
        </Typography>
        
        
        <FAQ />
      </Container>
      <Footer />
    </>
  );
}

export default App;
