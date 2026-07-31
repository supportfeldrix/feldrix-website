import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { FadeIn } from '../../components/animations';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

const Placeholder = ({ title, description, seoTitle, seoDescription, canonical }) => (
  <>
    <SEO
      title={seoTitle || `${title} | Feldrix`}
      description={seoDescription || `${title} - Coming soon to Feldrix.`}
      canonical={canonical}
    />
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <FadeIn>
          <ConstructionOutlinedIcon
            sx={{ fontSize: 80, color: 'primary.main', opacity: 0.5, mb: 3 }}
          />
          <Typography variant="h2" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5, maxWidth: 400, mx: 'auto' }}>
            {description || "We're working on this. Check back soon for updates."}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/"
              variant="outlined"
              color="primary"
              sx={{ borderRadius: '12px', px: 4 }}
            >
              Go Home
            </Button>
            <Button
              href="https://app.feldrix.com/register"
              variant="contained"
              color="primary"
              sx={{ borderRadius: '12px', px: 4 }}
            >
              Start Free
            </Button>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  </>
);

// Pre-configured pages
export const Blog = () => (
  <Placeholder
    title="Blog"
    description="Farming tips, product updates, and industry insights. Coming soon."
    canonical="/blog"
  />
);

export const Docs = () => (
  <Placeholder
    title="Documentation"
    description="Guides, tutorials, and API references to help you get the most from Feldrix."
    canonical="/docs"
  />
);

export const Releases = () => (
  <Placeholder
    title="Release Notes"
    description="Stay up to date with the latest features and improvements."
    canonical="/releases"
  />
);

export const Help = () => (
  <Placeholder
    title="Help Centre"
    description="Answers to common questions and step-by-step guides."
    canonical="/help"
  />
);

export const Careers = () => (
  <Placeholder
    title="Careers"
    description="Join our team and help shape the future of farm technology."
    canonical="/careers"
  />
);

export const Partners = () => (
  <Placeholder
    title="Partners"
    description="Partner with Feldrix to bring modern tools to more farmers."
    canonical="/partners"
  />
);

export const API = () => (
  <Placeholder
    title="API"
    description="Developer API documentation for integrating with Feldrix."
    canonical="/api"
  />
);

export const CustomerStories = () => (
  <Placeholder
    title="Customer Stories"
    description="Real stories from real farmers using Feldrix to manage their operations."
    canonical="/stories"
  />
);

export default Placeholder;
