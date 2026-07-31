import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import { Box, CircularProgress } from '@mui/material';
import theme from './theme';
import router from './routes';

const LoadingFallback = () => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CircularProgress color="primary" />
  </Box>
);

const App = () => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<LoadingFallback />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
