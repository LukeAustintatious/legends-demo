import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faKoFi } from '@fortawesome/free-brands-svg-icons';
import { EXTERNAL_LINKS } from '../constants/links';
import '../styles/Navigation.scss';

export const Navigation = () => {
  return (
    <AppBar position="static" className="navbar">
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
          <IconButton
            href={EXTERNAL_LINKS.DISCORD_SERVER}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-button"
            title="Join our Discord"
            size="large"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </IconButton>
          <IconButton
            href={EXTERNAL_LINKS.KO_FI_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-button"
            title="Support on Ko-fi"
            size="large"
          >
            <FontAwesomeIcon icon={faKoFi} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
