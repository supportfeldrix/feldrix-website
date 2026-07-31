import { Card, CardContent, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const MotionCard = motion.create(Card);

const PricingCard = ({ plan, price, period, features, buttonText, buttonHref, highlighted = false, sx = {} }) => (
  <MotionCard
    whileHover={{ y: -8 }}
    sx={{
      height: '100%',
      position: 'relative',
      border: highlighted ? '2px solid' : '1px solid',
      borderColor: highlighted ? 'primary.main' : 'divider',
      overflow: 'visible',
      ...sx,
    }}
  >
    {highlighted && (
      <Box
        sx={{
          position: 'absolute',
          top: -14,
          left: '50%',
          transform: 'translateX(-50%)',
          bgcolor: 'primary.main',
          color: 'white',
          px: 3,
          py: 0.5,
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        Most Popular
      </Box>
    )}
    <CardContent sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
        {plan}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: highlighted ? 'primary.main' : 'secondary.main' }}>
          {price}
        </Typography>
        {period && (
          <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
            {period}
          </Typography>
        )}
      </Box>
      <List sx={{ mb: 3 }}>
        {features.map((feature, index) => (
          <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
            </ListItemIcon>
            <ListItemText
              primary={feature}
              primaryTypographyProps={{ variant: 'body2', color: 'text.primary' }}
            />
          </ListItem>
        ))}
      </List>
      <Button
        variant={highlighted ? 'contained' : 'outlined'}
        color="primary"
        fullWidth
        size="large"
        href={buttonHref}
        sx={{ borderRadius: '12px', py: 1.5 }}
      >
        {buttonText}
      </Button>
    </CardContent>
  </MotionCard>
);

export default PricingCard;
