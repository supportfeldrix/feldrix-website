import { Container, Box, Typography } from '@mui/material';
import SectionTitle from '../../../components/common/SectionTitle';
import { StaggerContainer } from '../../../components/animations';
import { motion } from 'framer-motion';

import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

/**
 * Each feature card uses a real farm photograph from the /Branding/login/ folder as the thumbnail.
 * Replace the `photo` path with actual Feldrix module screenshots when available.
 */
const features = [
  { icon: <PetsOutlinedIcon />, title: 'Livestock Management', description: 'Track animals, weights, health, movements and lifecycle.', color: '#16A34A', bgColor: '#DCFCE7', photo: '/images/livestock-card.svg' },
  { icon: <GrassOutlinedIcon />, title: 'Crop Management', description: 'Plan, monitor and track crops from planting to harvest.', color: '#F59E0B', bgColor: '#FEF3C7', photo: '/images/crops-card.svg' },
  { icon: <PrecisionManufacturingOutlinedIcon />, title: 'Machinery', description: 'Manage equipment, services, running costs and downtime.', color: '#3B82F6', bgColor: '#DBEAFE', photo: '/images/machinery-card.svg' },
  { icon: <CalendarMonthOutlinedIcon />, title: 'Planner', description: 'Smart scheduling, tasks, reminders and notifications.', color: '#16A34A', bgColor: '#DCFCE7', photo: '/images/planner-card.svg' },
  { icon: <AccountBalanceWalletOutlinedIcon />, title: 'Finance', description: 'Income, expenses, budgets and profitability reports.', color: '#8B5CF6', bgColor: '#EDE9FE', photo: '/images/finance-card.svg' },
  { icon: <AutoAwesomeOutlinedIcon />, title: 'AI Assistant', description: 'Get recommendations, insights and predictions powered by AI.', color: '#F59E0B', bgColor: '#FEF3C7', photo: '/images/ai-illustration.svg' },
  { icon: <LocalHospitalOutlinedIcon />, title: 'Animal Health', description: 'Vaccinations, treatments, vet visits and health history.', color: '#EF4444', bgColor: '#FEE2E2', photo: '/images/health-card.svg' },
  { icon: <FavoriteOutlinedIcon />, title: 'Breeding', description: 'Breeding programs, pregnancies, calving and genetic tracking.', color: '#EC4899', bgColor: '#FCE7F3', photo: '/images/breeding-card.svg' },
  { icon: <AssessmentOutlinedIcon />, title: 'Reports & Analytics', description: 'Powerful reports and analytics to grow your farm.', color: '#3B82F6', bgColor: '#DBEAFE', photo: '/images/reports-card.svg' },
  { icon: <NotificationsOutlinedIcon />, title: 'Notifications', description: 'Stay informed with smart alerts and reminders.', color: '#F97316', bgColor: '#FFEDD5', photo: '/images/notifications-card.svg' },
];

const FeatureGrid = () => (
  <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#FFFFFF' }}>
    <Container maxWidth="lg">
      <SectionTitle
        overline="MODULES"
        title="Everything your farm needs"
        subtitle="A comprehensive suite of tools designed for every aspect of modern farming."
      />
      <StaggerContainer stagger={0.04}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' },
            gap: 2.5,
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
            >
              <Box
                sx={{
                  borderRadius: '18px',
                  border: '1px solid rgba(15,23,42,0.06)',
                  height: '100%',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex', flexDirection: 'column',
                  '&:hover': {
                    borderColor: '#16A34A',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.10)',
                    transform: 'translateY(-6px)',
                    '& .feature-photo': { transform: 'scale(1.08)' },
                  },
                }}
              >
                {/* Photo — real farm photography */}
                <Box sx={{ width: '100%', height: 85, overflow: 'hidden', position: 'relative' }}>
                  <Box
                    className="feature-photo"
                    component="img"
                    src={feature.photo}
                    alt={feature.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  />
                  {/* Subtle overlay so icon reads clearly */}
                  <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(transparent, rgba(255,255,255,0.6))' }} />
                </Box>

                {/* Content */}
                <Box sx={{ p: 2.5, pb: 3.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      width: 40, height: 40, borderRadius: '50%',
                      bgcolor: feature.bgColor,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: feature.color, mb: 1.5, mt: -4, position: 'relative', zIndex: 2,
                      border: '3px solid #FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      '& .MuiSvgIcon-root': { fontSize: '1.1rem' },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', mb: 0.75, color: 'text.primary' }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', lineHeight: 1.6, flex: 1 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </StaggerContainer>
    </Container>
  </Box>
);

export default FeatureGrid;
