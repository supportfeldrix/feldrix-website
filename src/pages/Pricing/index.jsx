import { Box, Container, Grid, Typography } from '@mui/material';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PricingCard from '../../components/cards/PricingCard';
import ComparisonTable from '../../components/sections/ComparisonTable';
import FAQAccordion from '../../components/sections/FAQAccordion';
import CTASection from '../../components/sections/CTASection';
import { ScrollReveal } from '../../components/animations';
import PrimaryButton from '../../components/buttons/PrimaryButton';

const plans = [
  {
    plan: 'Starter',
    price: 'FREE',
    period: null,
    features: [
      'Up to 50 animals',
      'Basic livestock tracking',
      'Crop records',
      'Task planner',
      'Single user',
      'Community support',
    ],
    buttonText: 'Start Free',
    buttonHref: 'https://app.feldrix.com/register',
    highlighted: false,
  },
  {
    plan: 'PRO',
    price: 'R99',
    period: '/ month',
    features: [
      'Unlimited animals & records',
      'Finance module',
      'Advanced reports & analytics',
      'AI Assistant',
      'Multi-user access',
      'Breeding module',
      'Machinery tracking',
      'Priority support',
    ],
    buttonText: 'Upgrade to PRO',
    buttonHref: 'https://app.feldrix.com/register',
    highlighted: true,
  },
];

const comparisonFeatures = [
  { name: 'Livestock tracking', availability: [true, true] },
  { name: 'Crop management', availability: [true, true] },
  { name: 'Task planner', availability: [true, true] },
  { name: 'Up to 50 animals', availability: [true, true] },
  { name: 'Unlimited animals', availability: [false, true] },
  { name: 'Finance module', availability: [false, true] },
  { name: 'Breeding module', availability: [false, true] },
  { name: 'Machinery tracking', availability: [false, true] },
  { name: 'Advanced reports', availability: [false, true] },
  { name: 'Analytics dashboard', availability: [false, true] },
  { name: 'AI Assistant', availability: [false, true] },
  { name: 'Multi-user access', availability: [false, true] },
  { name: 'Priority support', availability: [false, true] },
  { name: 'Data export', availability: [false, true] },
];

const comparisonPlans = [
  { name: 'Starter', price: 'Free' },
  { name: 'PRO', price: 'R99/mo' },
];

const pricingFAQ = [
  {
    question: 'Can I try PRO features before paying?',
    answer: 'Start with the free Starter plan to explore the platform. When you are ready for advanced features, upgrade to PRO with a single click.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards, as well as EFT payments for South African customers.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. No long-term contracts. Cancel your PRO subscription at any time and continue using the free Starter plan.',
  },
  {
    question: 'Is there a discount for annual billing?',
    answer: 'Annual billing options with discounts are coming soon. Subscribe to our newsletter for updates.',
  },
  {
    question: 'Do I lose my data if I downgrade?',
    answer: 'No. Your data is always safe. If you downgrade, you keep read-only access to PRO features until you upgrade again.',
  },
];

const Pricing = () => (
  <>
    <SEO
      title="Pricing | Feldrix - Start Free, Upgrade Anytime"
      description="Simple, honest pricing for farm management. Start free with basic features. Upgrade to PRO for unlimited records, finance, AI, and more."
      canonical="/pricing"
    />

    {/* Hero */}
    <Box
      sx={{
        pt: { xs: 14, md: 18 },
        pb: { xs: 6, md: 8 },
        textAlign: 'center',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="md">
        <ScrollReveal>
          <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
            Pricing
          </Typography>
          <Typography variant="h1" sx={{ mb: 3 }}>
            Simple, honest pricing
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: '1.2rem' }}>
            Start free. Upgrade when you're ready. No hidden fees.
          </Typography>
        </ScrollReveal>
      </Container>
    </Box>

    {/* Pricing Cards */}
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <ScrollReveal delay={index * 0.15}>
                <PricingCard {...plan} />
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Comparison Table */}
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <SectionTitle
          title="Compare plans"
          subtitle="See exactly what's included in each plan."
        />
        <ScrollReveal>
          <ComparisonTable features={comparisonFeatures} plans={comparisonPlans} />
        </ScrollReveal>
      </Container>
    </Box>

    {/* FAQ */}
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.surface' }}>
      <Container maxWidth="lg">
        <SectionTitle title="Pricing FAQ" subtitle="Common questions about our plans." />
        <FAQAccordion items={pricingFAQ} />
      </Container>
    </Box>

    <CTASection
      title="Start managing your farm today"
      subtitle="Create your free account in under a minute."
    />
  </>
);

export default Pricing;
