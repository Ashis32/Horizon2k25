// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',  // Ferrari Red
    },
    secondary: {
      main: '#000000',  // Black
    },
    background: {
      default: '#f0f0f0',  // Light gray for contrast
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#ff0000',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0',  // Sharp edges for a bold look
          textTransform: 'none',  // Normal case
        },
      },
    },
  },
});

export default theme;
