import { useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { DatasheetViewer } from '../components/DatasheetViewer';
import { Disclaimer } from '../components/Disclaimer';
import { rhinoDatasheet, firstDreadnoughtDatasheet, secondDreadnoughtDatasheet } from '../data/sampleDatasheets';
import '../styles/pages/Demo.scss';

type Datasheets = 'Rhino' | 'Dreadnought1' | 'Dreadnought2';

export const Demo = () => {
  const [selectedDatasheet, setSelectedDatasheet] = useState<Datasheets>('Rhino');

  const getDatasheetData = (type: Datasheets) => {
    switch (type) {
      case 'Dreadnought1':
        return firstDreadnoughtDatasheet;
      case 'Dreadnought2':
        return secondDreadnoughtDatasheet;
      case 'Rhino':
      default:
        return rhinoDatasheet;
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
            Explore how datasheet could be updated and modified
          </Typography>
        </Box>

        <Box className="demo-controls">
          <Typography variant="body1" className="description-text">
            This is a proof-of-concept demonstration. These datasheets are intentionally simplified for
            demonstration purposes, and are not intended to represent a complete or balanced datasheet.
            As the project develops, you'll be able to view complete datasheet revision histories, see 
            exactly what changed in each revision, and participate in community voting on proposed changes.
          </Typography>
          <Typography variant="body1" className="controls-label">
            Select a datasheet to view:
          </Typography>
          <Box className="button-group">
            <Button
              variant={selectedDatasheet === 'Rhino' ? 'contained' : 'outlined'}
              onClick={() => setSelectedDatasheet('Rhino')}
              className="datasheet-button"
            >
              Updated Rhino
            </Button>
            <Button
              variant={selectedDatasheet === 'Dreadnought1' ? 'contained' : 'outlined'}
              onClick={() => setSelectedDatasheet('Dreadnought1')}
              className="datasheet-button"
            >
              Dreadnought Revision 1
            </Button>
            <Button
              variant={selectedDatasheet === 'Dreadnought2' ? 'contained' : 'outlined'}
              onClick={() => setSelectedDatasheet('Dreadnought2')}
              className="datasheet-button"
            >
              Dreadnought Revision 2
            </Button>
          </Box>
          
          <Box className="highlighting-key">
            <Box className="key-item">
              <Box className="key-indicator inherited"></Box>
              <Typography variant="body2">Inherited from live profile</Typography>
            </Box>
            <Box className="key-item">
              <Box className="key-indicator community"></Box>
              <Typography variant="body2">Community voted change</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="datasheet-display">
          <DatasheetViewer
            title={currentDatasheet.title}
            description={currentDatasheet.description}
            source={currentDatasheet.source}
            revision={currentDatasheet.revision}
            data={currentDatasheet.data}
          />
        </Box>
      </Container>

      <Disclaimer />
    </Box>
  );
};
