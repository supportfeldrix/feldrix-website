import { Box, Container, Grid, Typography } from '@mui/material';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import FeatureCard from '../../components/cards/FeatureCard';
import { ScrollReveal, StaggerContainer } from '../../components/animations';
import CTASection from '../../components/sections/CTASection';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

const modules = [
  {
    icon: <PetsOutlinedIcon fontSize="inherit" />,
    title: 'Livestock Management',
    description: 'Complete herd management with individual animal profiles, weight tracking, movements between camps, birth and death records, and full lifecycle management. Categorise by species, breed, and purpose.',
  },
  {
    icon: <LocalHospitalOutlinedIcon fontSize="inherit" />,
    title: 'Animal Health',
    description: 'Track vaccinations, treatments, vet visits, and medical history for every animal. Set reminders for upcoming treatments and never miss a health event.',
  },
  {
    icon: <FavoriteOutlinedIcon fontSize="inherit" />,
    title: 'Breeding',
    description: 'Manage breeding programs with mating records, pregnancy tracking, expected calving dates, and genetic lineage. Track sire and dam performance over generations.',
  },
  {
    icon: <GrassOutlinedIcon fontSize="inherit" />,
    title: 'Crop Management',
    description: 'Plan seasons, record plantings, monitor growth stages, track inputs and treatments, and record harvest yields. Compare performance across seasons.',
  },
  {
    icon: <CalendarMonthOutlinedIcon fontSize="inherit" />,
    title: 'Farm Planner',
    description: 'Schedule tasks, set reminders, coordinate team activities, and plan seasonal operations. Visual calendar with drag-and-drop simplicity.',
  },
  {
    icon: <AccountBalanceWalletOutlinedIcon fontSize="inherit" />,
    title: 'Finance',
    description: 'Track income, expenses, and budgets. Generate profit/loss reports per enterprise. Link transactions to specific animals, crops, or machinery.',
  },
  {
    icon: <AssessmentOutlinedIcon fontSize="inherit" />,
    title: 'Reports & Analytics',
    description: 'Generate detailed reports across every module. Visual dashboards with trends, comparisons, and KPIs to measure farm performance.',
  },
  {
    icon: <PrecisionManufacturingOutlinedIcon fontSize="inherit" />,
    title: 'Machinery',
    description: 'Equipment inventory, service schedules, fuel logs, and maintenance cost tracking. Know exactly what each machine costs to operate.',
  },
  {
    icon: <AutoAwesomeOutlinedIcon fontSize="inherit" />,
    title: 'AI Assistant',
    description: 'Get intelligent recommendations, yield predictions, cost forecasts, and operational insights powered by machine learning trained on agricultural data.',
  },
];

const Features = () => (
  <>
    <SEO
      title="Features | Feldrix - Complete Farm Management Tools"
      description="Explore the complete suite of farm management tools — livestock, crops, finance, breeding, health, machinery, AI assistant and more."
      canonical="/features"
    />

    {/* Hero */}
    <Box
      sx={{
        pt: { xs: 14, md: 18 },
        pb: { xs: 6, md: 10 },
        textAlign: 'center',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="md">
        <ScrollReveal>
          <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
            Features
          </Typography>
          <Typography variant="h1" sx={{ mb: 3 }}>
            Every tool your farm needs
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 5, fontSize: '1.2rem' }}>
            From livestock to finance, crops to AI — Feldrix brings everything together in one powerful platform.
          </Typography>
          <PrimaryButton href="https://app.feldrix.com/register">
            Start Free
          </PrimaryButton>
        </ScrollReveal>
      </Container>
    </Box>

    {/* Module Grid */}
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <StaggerContainer stagger={0.1}>
          <Grid container spacing={4}>
            {modules.map((module, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <FeatureCard {...module} />
              </Grid>
            ))}
          </Grid>
        </StaggerContainer>
      </Container>
    </Box>

    <CTASection
      title="Ready to see it in action?"
      subtitle="Create your free account and explore every module."
      buttonText="Start Free"
    />
  </>
);

export default Features;
