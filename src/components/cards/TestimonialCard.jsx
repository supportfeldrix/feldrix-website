import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialCard = ({ quote, name, role, avatar }) => (
  <Card
    sx={{
      height: '100%',
      bgcolor: 'background.surface',
      border: '1px solid',
      borderColor: 'divider',
      '&:hover': { transform: 'none', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' },
    }}
  >
    <CardContent sx={{ p: 4 }}>
      <FormatQuoteIcon sx={{ color: 'primary.main', fontSize: '2rem', mb: 2, opacity: 0.6 }} />
      <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', lineHeight: 1.8 }}>
        {quote}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          src={avatar}
          sx={{ width: 44, height: 44, bgcolor: 'primary.main' }}
        >
          {name?.[0]}
        </Avatar>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {role}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default TestimonialCard;
