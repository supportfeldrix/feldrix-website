import { Container, Box } from '@mui/material';

const PageContainer = ({ children, maxWidth = 'lg', sx = {}, ...props }) => (
  <Box
    component="main"
    sx={{
      minHeight: '100vh',
      pt: { xs: 8, md: 10 },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const Section = ({ children, bgcolor, maxWidth = 'lg', py = { xs: 8, md: 12 }, sx = {}, ...props }) => (
  <Box
    component="section"
    sx={{
      py,
      bgcolor: bgcolor || 'transparent',
      ...sx,
    }}
    {...props}
  >
    <Container maxWidth={maxWidth}>
      {children}
    </Container>
  </Box>
);

export default PageContainer;
