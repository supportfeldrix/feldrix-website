import { Container, Box, Typography, Button } from '@mui/material';
import SectionTitle from '../../../components/common/SectionTitle';
import { StaggerContainer } from '../../../components/animations';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const benefits = [
  {
    icon: <RocketLaunchOutlinedIcon />,
    title: 'Early Access',
    description: 'Early access to new features before they go live.',
    color: '#16A34A',
    bgColor: '#DCFCE7',
  },
  {
    icon: <MapOutlinedIcon />,
    title: 'Shape the Roadmap',
    description: 'Direct influence on the product roadmap.',
    color: '#3B82F6',
    bgColor: '#DBEAFE',
  },
  {
    icon: <SupportAgentOutlinedIcon />,
    title: 'Priority Support',
    description: 'Priority support from the Feldrix team.',
    color: '#8B5CF6',
    bgColor: '#EDE9FE',
  },
  {
    icon: <EmojiEventsOutlinedIcon />,
    title: 'Success Story',
    description: 'Opportunity to be featured as a Feldrix success story.',
    color: '#F59E0B',
    bgColor: '#FEF3C7',
  },
];

const Testimonials = () => (
  <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
    <Container maxWidth="lg">
      <SectionTitle
        chip="Early Adopter Programme"
        title="Help Shape the Future of Farming"
        subtitle="We're working with early adopters across South Africa to build the smartest farm management platform together."
      />

      <StaggerContainer stagger={0.06}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
            mb: 6,
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
            >
              <Box
                sx={{
                  p: 4,
                  borderRadius: '20px',
                  border: '1px solid rgba(15,23,42,0.06)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: '#16A34A',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.08)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    bgcolor: benefit.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: benefit.color,
                    mb: 2.5,
                    '& .MuiSvgIcon-root': { fontSize: '1.5rem' },
                  }}
                >
                  {benefit.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', mb: 1, color: 'text.primary' }}>
                  {benefit.title}
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', lineHeight: 1.7 }}>
                  {benefit.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </StaggerContainer>

      {/* CTA */}
      <Box sx={{ textAlign: 'center' }}>
        <Button
          component={Link}
          to="/register"
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 1.8,
            fontWeight: 700,
            fontSize: '1rem',
            borderRadius: '14px',
            textTransform: 'none',
            boxShadow: '0 8px 24px rgba(22,163,74,0.25)',
            '&:hover': {
              boxShadow: '0 12px 32px rgba(22,163,74,0.35)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Start Free
        </Button>
      </Box>
    </Container>
  </Box>
);

export default Testimonials;
