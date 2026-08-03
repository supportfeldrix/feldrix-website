import { Container, Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Chip } from '@mui/material';
import SectionTitle from '../../../components/common/SectionTitle';
import { ScrollReveal } from '../../../components/animations';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const plans = [
  {
    name: 'Starter',
    price: 'FREE',
    period: null,
    description: 'Everything you need to get started.',
    features: ['Basic livestock tracking', 'Crop records', 'Task planner', 'Up to 50 animals', 'Single user', 'Community support'],
    buttonText: 'Start Free',
    buttonHref: 'https://app.feldrix.com/register',
    highlighted: false,
  },
  {
    name: 'PRO',
    price: 'R99',
    period: '/mo',
    description: 'Full power for serious farmers.',
    features: ['Unlimited records', 'Finance module', 'Advanced reports & analytics', 'AI Assistant', 'Multi-user access', 'Priority support', 'Breeding module', 'Data export'],
    buttonText: 'Upgrade to PRO',
    buttonHref: 'https://app.feldrix.com/register',
    highlighted: true,
  },
];

const PricingPreview = () => (
  <Box component="section" sx={{ py: { xs: 10, md: 16 } }}>
    <Container maxWidth="md">
      <SectionTitle
        chip="Pricing"
        title="Simple, honest pricing"
        subtitle="Start free. Upgrade when you're ready. No hidden fees."
      />
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <ScrollReveal delay={index * 0.12}>
              <Box
                sx={{
                  p: { xs: 3.5, md: 5 },
                  borderRadius: '28px',
                  bgcolor: '#FFFFFF',
                  border: plan.highlighted ? '2px solid' : '1px solid',
                  borderColor: plan.highlighted ? 'primary.main' : 'rgba(15,23,42,0.06)',
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: plan.highlighted ? '0 28px 80px rgba(22,163,74,0.1)' : '0 4px 16px rgba(0,0,0,0.02)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: plan.highlighted ? '0 36px 100px rgba(22,163,74,0.14)' : '0 16px 48px rgba(0,0,0,0.06)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {plan.highlighted && (
                  <Chip
                    label="MOST POPULAR"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: -14,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.65rem',
                      letterSpacing: '0.06em',
                      px: 1.5,
                      height: 28,
                    }}
                  />
                )}

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>{plan.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: plan.highlighted ? 'primary.main' : 'text.primary', letterSpacing: '-0.03em' }}>
                    {plan.price}
                  </Typography>
                  {plan.period && (
                    <Typography variant="body2" sx={{ ml: 0.5, color: 'text.secondary' }}>{plan.period}</Typography>
                  )}
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>{plan.description}</Typography>

                <List sx={{ flex: 1, mb: 4 }}>
                  {plan.features.map((feature, i) => (
                    <ListItem key={i} disablePadding sx={{ py: 0.7 }}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <CheckCircleIcon sx={{ color: 'primary.main', fontSize: '1.1rem' }} />
                      </ListItemIcon>
                      <ListItemText primary={feature} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                    </ListItem>
                  ))}
                </List>

                <Button
                  variant={plan.highlighted ? 'contained' : 'outlined'}
                  color="primary"
                  fullWidth
                  size="large"
                  href={plan.buttonHref}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ borderRadius: '50px', py: 1.8, fontSize: '0.95rem', fontWeight: 600 }}
                >
                  {plan.buttonText}
                </Button>
              </Box>
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default PricingPreview;
