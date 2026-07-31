import { Container, Grid, Box, Typography } from '@mui/material';
import { StaggerContainer } from '../../../components/animations';
import { motion } from 'framer-motion';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import FlagIcon from '@mui/icons-material/Flag';

const trustItems = [
  { icon: <AgricultureOutlinedIcon sx={{ fontSize: 32 }} />, title: 'Built for Modern Farmers', description: 'Designed by farmers who understand your needs.' },
  { icon: <CloudOutlinedIcon sx={{ fontSize: 32 }} />, title: 'Cloud Based', description: 'Access your farm data anywhere, anytime.' },
  { icon: <PhoneIphoneOutlinedIcon sx={{ fontSize: 32 }} />, title: 'Mobile Ready', description: 'Works perfectly on any device.' },
  { icon: <FlagIcon sx={{ fontSize: 32 }} />, title: 'South African Built', description: 'Local support, local understanding.' },
  { icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 32 }} />, title: 'AI Powered', description: 'Intelligent insights to help you make better decisions.' },
  { icon: <ShieldOutlinedIcon sx={{ fontSize: 32 }} />, title: 'Enterprise Security', description: 'Your data is safe with enterprise-grade security.' },
];

const TrustSection = () => (
  <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#F0FDF4' }}>
    <Container maxWidth="lg">
      <StaggerContainer stagger={0.05}>
        <Grid container spacing={2} justifyContent="center">
          {trustItems.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
                style={{ height: '100%' }}
              >
                <Box sx={{ textAlign: 'center', p: 2.5, height: '100%' }}>
                  {/* Outlined icon container */}
                  <Box
                    sx={{
                      width: 60, height: 60,
                      borderRadius: '16px',
                      border: '2px solid #16A34A',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#16A34A',
                      mx: 'auto', mb: 2,
                      transition: 'all 0.25s ease',
                      '&:hover': { bgcolor: '#16A34A', color: '#FFFFFF', transform: 'scale(1.05)' },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', mb: 0.75, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', lineHeight: 1.5 }}>
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>
    </Container>
  </Box>
);

export default TrustSection;
