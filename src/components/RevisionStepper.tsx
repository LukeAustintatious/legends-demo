import { useState } from 'react';
import {
  Stepper,
  Step,
  StepButton,
  Typography,
  Paper,
  Box,
  Button,
} from '@mui/material';
import '../styles/RevisionStepper.scss';

export const RevisionStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: 'GW Creates Legend',
      description:
        'Games Workshop moves a unit to Legends and publishes the final datasheet.',
    },
    {
      label: 'Revision Proposal',
      description:
        'A Legends Never Die contributor proposes a specific revision on the community Discord.',
    },
    {
      label: 'Community Voting',
      description:
        'The community votes on the revision, requiring a minimum number of votes and a high percentage of approval. Moderators have the final say.',
    },
    {
      label: 'Revision Published',
      description:
        'If accepted, the revised datasheet is published to the site.',
    },
    {
      label: 'Iterate & Maintain',
      description:
        'Repeat steps 2-4 as many times as needed to keep the datasheet balanced and playable. A history of all prior revisions remains accessible for auditing.',
    },
    {
      label: 'Archive on Revival',
      description:
        'If Games Workshop ever revives the unit, the revisions are archived on the website.',
    },
  ];

  const handleStep = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <Paper elevation={3} className="revision-stepper-card">
      <Typography variant="h2" className="section-heading">
        The Revision Process
      </Typography>
      <Stepper activeStep={activeStep} nonLinear className="revision-stepper">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepButton
              color="inherit"
              onClick={() => handleStep(index)}
              className="step-button"
            >
              {step.label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <Box className="step-content-wrapper">
        <Typography variant="body1" className="step-description">
          {steps[activeStep].description}
        </Typography>
      </Box>
      <Box className="stepper-controls">
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className="nav-button"
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={activeStep === steps.length - 1}
          onClick={handleNext}
          className="nav-button next-button"
        >
          Next
        </Button>
      </Box>
    </Paper>
  );
};
