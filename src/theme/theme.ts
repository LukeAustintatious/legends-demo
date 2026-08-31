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
      main: '#fbb040', // Orange-gold
      light: '#fcc878',
      dark: '#d97e0d',
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
    fontFamily: '"Lora", serif',
    h1: {
      fontFamily: '"League Gothic", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: 1,
      color: '#ffffff',
    },
    h2: {
      fontFamily: '"League Gothic", sans-serif',
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: 1,
      color: '#fbb040',
    },
    h3: {
      fontFamily: '"League Gothic", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: 1,
      color: '#ffffff',
    },
    body1: {
      fontFamily: '"Lora", serif',
      fontSize: '1rem',
      color: '#e0e0e0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"League Gothic", sans-serif',
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          backgroundColor: '#fbb040',
          color: '#0f1419',
          '&:hover': {
            backgroundColor: '#fcc878',
          },
        },
        outlined: {
          borderColor: '#fbb040',
          color: '#fbb040',
          '&:hover': {
            borderColor: '#fcc878',
            color: '#fcc878',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a2332',
          borderColor: '#fbb040',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a3a52',
          borderBottom: '2px solid #fbb040',
        },
      },
    },
  },
});
