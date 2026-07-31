import { Box, Typography, Grid } from '@mui/material';
import { ScrollReveal } from '../animations';

const PlaceholderScreen = ({ label, aspectRatio = '16/10' }) => (
  <Box
    sx={{
      width: '100%',
      aspectRatio,
      borderRadius: '16px',
      bgcolor: '#F1F5F9',
      border: '1px solid #E2E8F0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 1,
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    {/* Fake browser chrome */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 32,
        bgcolor: '#E2E8F0',
        display: 'flex',
        alignItems: 'center',
        px: 1.5,
        gap: 0.75,
      }}
    >
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FCA5A5' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FDE047' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#86EFAC' }} />
    </Box>
    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
      {label}
    </Typography>
  </Box>
);

const ScreenshotGallery = ({ screens }) => (
  <Grid container spacing={3}>
    {screens.map((screen, index) => (
      <Grid size={{ xs: 12, md: 6 }} key={index}>
        <ScrollReveal delay={index * 0.1}>
          <PlaceholderScreen label={screen.label} aspectRatio={screen.aspectRatio || '16/10'} />
        </ScrollReveal>
      </Grid>
    ))}
  </Grid>
);

export default ScreenshotGallery;
