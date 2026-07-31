import { Box, Container, Typography } from '@mui/material';
import SectionTitle from '../../../components/common/SectionTitle';
import { ScrollReveal } from '../../../components/animations';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const steps = [
  { icon: <PersonAddOutlinedIcon sx={{ fontSize: 28 }} />, title: 'Create your farm', description: 'Sign up free and set up your farm profile in under 2 minutes.', color: '#16A34A' },
  { icon: <AddCircleOutlineIcon sx={{ fontSize: 28 }} />, title: 'Add livestock & crops', description: 'Import or add your animals, fields, and equipment records.', color: '#3B82F6' },
  { icon: <PlaylistAddCheckOutlinedIcon sx={{ fontSize: 28 }} />, title: 'Manage daily operations', description: 'Track tasks, health events, finances, and seasonal activities.', color: '#F59E0B' },
  { icon: <TrendingUpOutlinedIcon sx={{ fontSize: 28 }} />, title: 'Grow with AI insights', description: 'Get intelligent recommendations to optimise your operation.', color: '#8B5CF6' },
];

const WorkflowSection = () => (
  <Box component="section" sx={{ py: { xs: 10, md: 12 }, bgcolor: '#FFFFFF' }}>
    <Container maxWidth="lg">
      <SectionTitle chip="How It Works" title="Get started in minutes" />

      <ScrollReveal>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'stretch', md: 'flex-start' },
            gap: { xs: 3, md: 0 },
            position: 'relative',
          }}
        >
          {/* Connecting line (desktop) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: 32,
              left: '12%',
              right: '12%',
              height: 2,
              bgcolor: 'rgba(15,23,42,0.06)',
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                px: { xs: 0, md: 2 },
              }}
            >
              {/* Step badge */}
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: step.color, letterSpacing: '0.1em', mb: 1.5 }}>
                STEP 0{index + 1}
              </Typography>

              {/* Icon */}
              <Box
                sx={{
                  width: 56, height: 56,
                  borderRadius: '50%',
                  bgcolor: `${step.color}12`,
                  border: `2px solid ${step.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: step.color,
                  mx: 'auto', mb: 2,
                }}
              >
                {step.icon}
              </Box>

              <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', mb: 0.75 }}>
                {step.title}
              </Typography>
              <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', lineHeight: 1.6, maxWidth: 200, mx: 'auto' }}>
                {step.description}
              </Typography>

              {/* Arrow (desktop only, not on last) */}
              {index < steps.length - 1 && (
                <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', top: 28, right: -8, color: 'rgba(15,23,42,0.2)', fontSize: '1.2rem' }}>
                  →
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </ScrollReveal>
    </Container>
  </Box>
);

export default WorkflowSection;
