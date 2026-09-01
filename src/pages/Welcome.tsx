import { Container, Box, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Disclaimer } from '../components/Disclaimer';
import { RevisionStepper } from '../components/RevisionStepper';
import logoColour from '../assets/logo-colour.svg';
import '../styles/pages/Welcome.scss';

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Box className="welcome-page">
      <Container maxWidth="lg" className="welcome-container">
        <Box className="welcome-header">
          <img src={logoColour} alt="Legends Never Die Logo" className="logo" />
          <Typography variant="h3" className="welcome-subtitle">
              A Community-Driven Rules Repository for Warhammer Legends
          </Typography>
        </Box>

        <Box className="welcome-content">
          <Paper elevation={3} className="concept-card">
            <Typography variant="h2" className="section-heading">
              The Concept
            </Typography>
            <Typography variant="body1" className="concept-text">
              The Legends Never Die project is intended to be a community-driven site that hosts structured,
              version-controlled datasheets for Legends units. On a linked community Discord server, 
              members can propose a specific change like "<em>give this unit +1 attacks</em>", the community 
              would discuss and vote on it, and if approved it becomes the next revision.
            </Typography>
            <Typography variant="body1" className="concept-text">
              Rather than a wiki where anyone can just silently changes a number,
              this site would contain complete history, diffs, attribution and rollback.
            </Typography>
            <Typography variant="body1" className="concept-text">
              <strong>Think GitHub for Warhammer Legends datasheets.</strong>
            </Typography>
            <Typography variant="body1" className="concept-text">
              Under the hood, the intention is that datasheets are schema-driven, so we're building a rules engine/database rather 
              than a hard-coded 40K website. That means it could eventually support new editions or even other games.
            </Typography>
          </Paper>

          <RevisionStepper />

          <Paper elevation={3} className="features-card">
            <Typography variant="h2" className="section-heading">
              Planned Features
            </Typography>
            <ul className="features-list">
              <li>
                <Typography variant="body1">
                  <strong>Version Control:</strong> Complete history of every change with full attribution.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Community Voting:</strong> Transparent, democratic process for balance changes.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Schema-Driven:</strong> Extensible design supporting multiple games and editions.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Official vs Community:</strong> Clear distinction between Games Workshop rules and community modifications.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Transparent:</strong> Every change, discussion, and decision is tracked and attributable.
                </Typography>
              </li>
            </ul>
          </Paper>

          <Box className="next-steps-content">
            <Paper elevation={3} className="cta-card">
              <Typography variant="h2" className="section-heading">
                Join the Community
              </Typography>
              <Typography variant="body1" className="cta-text">
                Get updates on our Discord server and show your support for this project.
              </Typography>
              <Button
                variant="contained"
                size="large"
                className="cta-button"
                href="https://discord.gg/XbmMvvTtb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </Button>
            </Paper>

            <Paper elevation={3} className="cta-card">
              <Typography variant="h2" className="section-heading">
                Ready to See It in Action?
              </Typography>
              <Typography variant="body1" className="cta-text">
                Check out our demo page to see how datasheets could look.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/demo')}
                className="cta-button"
              >
                View Demo
              </Button>
            </Paper>
          </Box>
        </Box>
      </Container>

      <Disclaimer />
    </Box>
  );
};
