import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { FadeIn } from '../../components/animations';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

const NotFound = () => (
  <>
    <SEO title="404 - Page Not Found | Feldrix" description="The page you're looking for doesn't exist." />
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <FadeIn>
          <SentimentDissatisfiedOutlinedIcon
            sx={{ fontSize: 120, color: 'primary.main', opacity: 0.6, mb: 3 }}
          />
          <Typography variant="h1" sx={{ mb: 2, fontSize: '4rem' }}>
            404
          </Typography>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Page not found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
            The page you're looking for doesn't exist or has been moved.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            size="large"
            sx={{ borderRadius: '12px', px: 5, py: 1.5 }}
          >
            Return Home
          </Button>
        </FadeIn>
      </Container>
    </Box>
  </>
);

export default NotFound;
