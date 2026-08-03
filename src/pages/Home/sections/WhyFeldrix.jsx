import { Container, Box, Typography } from '@mui/material';
import SectionTitle from '../../../components/common/SectionTitle';
import { StaggerContainer } from '../../../components/animations';
import { motion } from 'framer-motion';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const reasons = [
  { icon: <TouchAppOutlinedIcon />, title: 'Easy to Use', description: 'Intuitive interface designed for farmers, not tech experts.' },
  { icon: <CloudOutlinedIcon />, title: 'Cloud Based', description: 'Access your farm data anywhere. No installation required.' },
  { icon: <DevicesOutlinedIcon />, title: 'Works Everywhere', description: 'Desktop, tablet, or phone — adapts perfectly.' },
  { icon: <BoltOutlinedIcon />, title: 'Fast', description: 'Lightning-fast performance. No lag, no waiting.' },
  { icon: <VerifiedOutlinedIcon />, title: 'Reliable', description: '99.9% uptime. Your data is always there.' },
  { icon: <LockOutlinedIcon />, title: 'Secure', description: 'Enterprise-grade encryption and regular backups.' },
  { icon: <AutoAwesomeOutlinedIcon />, title: 'AI Powered', description: 'Smart insights for better decisions every day.' },
];

const WhyFeldrix = () => (
  <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FAFBFC' }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="Built for the way you farm"
        subtitle="Every feature designed with real farmers in mind."
      />
      <StaggerContainer stagger={0.04}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 2,
          }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: '14px',
                  border: '1px solid rgba(15, 23, 42, 0.06)',
                  bgcolor: '#FFFFFF',
                  height: '100%',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: 'rgba(22, 163, 74, 0.15)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: '10px',
                    bgcolor: 'rgba(22, 163, 74, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#16A34A',
                    mb: 1.5,
                    '& .MuiSvgIcon-root': { fontSize: '1.2rem' },
                  }}
                >
                  {reason.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: 'text.primary', mb: 0.75 }}>
                  {reason.title}
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', lineHeight: 1.6 }}>
                  {reason.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </StaggerContainer>
    </Container>
  </Box>
);

export default WhyFeldrix;
