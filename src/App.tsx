import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { theme } from './theme/theme';
import { Navigation } from './components/Navigation';
import { Welcome } from './pages/Welcome';
import { Demo } from './pages/Demo';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box className="app-wrapper" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
