import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import Home from './pages/Home';
import PromotionPage from './pages/PromotionPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Box, CssBaseline, Container } from '@mui/material';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Box display="flex" minHeight="100vh">
          <Sidebar />
          <Box flexGrow={1} overflow="auto">
            <Header />
            <Container maxWidth="lg" style={{ padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/promotion" element={<PromotionPage />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </Provider>
  </ThemeProvider>
);

export default App;
