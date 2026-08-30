import { useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { DatasheetViewer } from '../components/DatasheetViewer';
import { Disclaimer } from '../components/Disclaimer';
import { sampleOfficialDatasheet, sampleCommunityDatasheet, sampleUpcomingDatasheet } from '../data/sampleDatasheets';
import { type DatasheetType } from '../data/sampleDatasheets';
import '../styles/pages/Demo.scss';

export const Demo = () => {
  const [selectedDatasheet, setSelectedDatasheet] = useState<DatasheetType>('official');

  const getDatasheetData = (type: DatasheetType) => {
    switch (type) {
      case 'community':
        return sampleCommunityDatasheet;
      case 'upcoming':
        return sampleUpcomingDatasheet;
      case 'official':
      default:
        return sampleOfficialDatasheet;
    }
  };

  const currentDatasheet = getDatasheetData(selectedDatasheet);

  return (
    <Box className="demo-page">
      <Container maxWidth="lg" className="demo-container">
        <Box className="demo-header">
          <Typography variant="h1" className="demo-title">
            Datasheet Demo
          </Typography>
          <Typography variant="h3" className="demo-subtitle">
            Explore how different datasheet sources are displayed
          </Typography>
        </Box>

        <Box className="demo-controls">
          <Typography variant="body1" className="controls-label">
            Select a datasheet to view:
          </Typography>
          <Box className="button-group">
            <Button
              variant={selectedDatasheet === 'official' ? 'contained' : 'outlined'}
              onClick={() => setSelectedDatasheet('official')}
              className="datasheet-button"
            >
              Official Legends
            </Button>
            <Button
              variant={selectedDatasheet === 'community' ? 'contained' : 'outlined'}
              onClick={() => setSelectedDatasheet('community')}
              className="datasheet-button"
            >
              Community Modified
            </Button>
            <Button
              variant={selectedDatasheet === 'upcoming' ? 'contained' : 'outlined'}
              onClick={() => setSelectedDatasheet('upcoming')}
              className="datasheet-button"
            >
              Upcoming Release
            </Button>
          </Box>
        </Box>

        <Box className="datasheet-display">
          <DatasheetViewer
            title={currentDatasheet.title}
            description={currentDatasheet.description}
            source={currentDatasheet.source}
            data={currentDatasheet.data}
          />
        </Box>

        <Box className="demo-footer">
          <Typography variant="body1" className="footer-text">
            This is a proof-of-concept demonstration. As the project develops, you'll be able to view 
            complete datasheet histories, see exactly what changed in each revision, and participate in 
            community voting on proposed changes.
          </Typography>
        </Box>
      </Container>

      <Disclaimer />
    </Box>
  );
};
