import { Typography, Box, Chip } from '@mui/material';
import { SlideUp } from '../animations';

const SectionTitle = ({ overline, title, subtitle, align = 'center', chip, sx = {} }) => (
  <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: align, ...sx }}>
    <SlideUp>
      {chip && (
        <Chip
          label={chip}
          size="small"
          sx={{
            mb: 2.5,
            bgcolor: 'rgba(22, 163, 74, 0.06)',
            color: 'primary.main',
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.04em',
            border: '1px solid rgba(22, 163, 74, 0.12)',
            borderRadius: '8px',
            height: 28,
          }}
        />
      )}
      {overline && !chip && (
        <Typography
          variant="overline"
          component="p"
          sx={{ color: 'primary.main', mb: 2 }}
        >
          {overline}
        </Typography>
      )}
      <Typography
        variant="h2"
        component="h2"
        sx={{ color: 'text.primary', mb: 2.5 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            maxWidth: align === 'center' ? 580 : 'none',
            mx: align === 'center' ? 'auto' : 0,
            fontSize: '1.1rem',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </SlideUp>
  </Box>
);

export default SectionTitle;
