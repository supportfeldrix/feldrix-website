import { Box, Container, Grid, Typography } from '@mui/material';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import { ScrollReveal, FadeIn } from '../../components/animations';
import CTASection from '../../components/sections/CTASection';

const timelineItems = [
  { year: '2024', title: 'The Idea', description: 'Identified the gap in modern, accessible farm management software.' },
  { year: '2025', title: 'Development', description: 'Built the core platform with livestock, crops, and planning modules.' },
  { year: '2026', title: 'Launch', description: 'Feldrix goes live — empowering farmers with intelligent tools.' },
  { year: 'Future', title: 'Global Expansion', description: 'Expanding to serve farmers worldwide with localised features.' },
];

const About = () => (
  <>
    <SEO
      title="About | Feldrix - Our Mission & Story"
      description="Learn about Feldrix — our mission to empower farmers with modern, intelligent farm management tools. Built in South Africa for the world."
      canonical="/about"
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
            About Feldrix
          </Typography>
          <Typography variant="h1" sx={{ mb: 3 }}>
            Empowering farmers with technology
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: '1.2rem' }}>
            We believe every farmer deserves access to modern, intelligent tools that make their work easier and their farms more productive.
          </Typography>
        </ScrollReveal>
      </Container>
    </Box>

    {/* Mission */}
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal direction="left">
              <Typography variant="overline" sx={{ color: 'primary.main', mb: 1, display: 'block' }}>
                Our Mission
              </Typography>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Make farm management simple, intelligent, and accessible to every farmer.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                Farming is hard work. Managing the data behind it shouldn't be. Feldrix was born from the belief that farmers deserve the same quality software that other industries take for granted.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                We're building a platform that combines the power of cloud computing and artificial intelligence with the simplicity that busy farmers need. No complicated setup, no steep learning curves — just powerful tools that work.
              </Typography>
            </ScrollReveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal direction="right">
              <Typography variant="overline" sx={{ color: 'primary.main', mb: 1, display: 'block' }}>
                Our Vision
              </Typography>
              <Typography variant="h3" sx={{ mb: 3 }}>
                A world where every farm runs smarter.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                We envision a future where AI-powered insights help farmers make better decisions, reduce waste, improve animal welfare, and increase profitability — all while reducing the administrative burden.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Built in South Africa, designed for the world. Feldrix is committed to serving farmers of all sizes — from smallholders to large commercial operations — with tools that grow alongside them.
              </Typography>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* Timeline */}
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.surface' }}>
      <Container maxWidth="md">
        <SectionTitle title="Our Journey" subtitle="From idea to reality." />
        <Box sx={{ position: 'relative', pl: { xs: 4, md: 0 } }}>
          {/* Timeline line */}
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'absolute',
              left: 12,
              top: 0,
              bottom: 0,
              width: 2,
              bgcolor: 'divider',
            }}
          />
          <Grid container spacing={4}>
            {timelineItems.map((item, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <ScrollReveal delay={index * 0.1}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: '16px',
                      bgcolor: 'white',
                      border: '1px solid',
                      borderColor: 'divider',
                      position: 'relative',
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{ color: 'primary.main', display: 'block', mb: 1 }}
                    >
                      {item.year}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>

    <CTASection
      title="Join us on our mission"
      subtitle="Start your free account and become part of the Feldrix story."
    />
  </>
);

export default About;
