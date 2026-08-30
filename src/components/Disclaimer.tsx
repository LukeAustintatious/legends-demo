import { Box, Typography } from '@mui/material';
import '../styles/Disclaimer.scss';

export const Disclaimer = () => {
  return (
    <Box component="footer" className="disclaimer">
      <Typography variant="body2" className="disclaimer-text">
        Unofficial community project. Not affiliated with or endorsed by Games Workshop. <br />
        Warhammer 40,000 and associated names are trademarks of Games Workshop Ltd.
      </Typography>
    </Box>
  );
};
