import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Navigation.scss';

export const Navigation = () => {
  return (
    <AppBar position="sticky" className="navbar"> // todo: check with Leah
      <Toolbar>
        <Box className="nav-brand">
          <Link to="/" className="brand-link">
            <h1>Legends Never Die</h1>
          </Link>
        </Box>
        <Box className="nav-links">
          <Button component={Link} to="/" color="inherit" className="nav-button">
            Welcome
          </Button>
          <Button component={Link} to="/demo" color="inherit" className="nav-button">
            Demo
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
