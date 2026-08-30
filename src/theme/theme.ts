import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1a3a52', // Dark blue
      light: '#2d5a7b',
      dark: '#0f2438',
    },
    secondary: {
      main: '#d4af37', // Gold
      light: '#e8c547',
      dark: '#aa8c27',
    },
    background: {
      default: '#0f1419', // Very dark grey-blue
      paper: '#1a2332', // Slightly lighter for cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#ffffff',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#d4af37',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#ffffff',
    },
    body1: {
      fontSize: '1rem',
      color: '#e0e0e0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          backgroundColor: '#d4af37',
          color: '#0f1419',
          '&:hover': {
            backgroundColor: '#e8c547',
          },
        },
        outlined: {
          borderColor: '#d4af37',
          color: '#d4af37',
          '&:hover': {
            borderColor: '#e8c547',
            color: '#e8c547',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a2332',
          borderColor: '#d4af37',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a3a52',
          borderBottom: '2px solid #d4af37',
        },
      },
    },
  },
});
