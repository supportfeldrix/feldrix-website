import { useState } from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Alert, CircularProgress } from '@mui/material';
import SEO from '../../components/common/SEO';
import { ScrollReveal } from '../../components/animations';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const contactInfo = [
  { icon: <EmailOutlinedIcon />, title: 'Email', detail: 'hello@feldrix.com' },
  { icon: <AccessTimeOutlinedIcon />, title: 'Business Hours', detail: 'Mon - Fri, 08:00 - 17:00 SAST' },
  { icon: <LocationOnOutlinedIcon />, title: 'Location', detail: 'South Africa' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate submission — replace with actual API call
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <SEO
        title="Contact | Feldrix - Get in Touch"
        description="Have questions about Feldrix? Get in touch with our team. We'd love to hear from you."
        canonical="/contact"
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
              Contact
            </Typography>
            <Typography variant="h1" sx={{ mb: 3 }}>
              Get in touch
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: '1.2rem' }}>
              Questions, feedback, or partnership enquiries — we'd love to hear from you.
            </Typography>
          </ScrollReveal>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <ScrollReveal direction="left">
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: '20px',
                    bgcolor: 'background.surface',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                    Send us a message
                  </Typography>

                  {status === 'success' && (
                    <Alert severity="success" sx={{ mb: 3, borderRadius: '12px' }}>
                      Message sent successfully! We'll get back to you soon.
                    </Alert>
                  )}
                  {status === 'error' && (
                    <Alert severity="error" sx={{ mb: 3, borderRadius: '12px' }}>
                      Something went wrong. Please try again.
                    </Alert>
                  )}

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        aria-label="Your name"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        aria-label="Your email address"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        aria-label="Message subject"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={5}
                        aria-label="Your message"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={status === 'loading'}
                        sx={{ borderRadius: '12px', px: 5, py: 1.5 }}
                      >
                        {status === 'loading' ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </ScrollReveal>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <ScrollReveal direction="right">
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: { xs: 0, md: 4 } }}>
                  {contactInfo.map((info, index) => (
                    <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          bgcolor: 'rgba(22,163,74,0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.main',
                          flexShrink: 0,
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {info.title}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {info.detail}
                        </Typography>
                      </Box>
                    </Box>
                  ))}

                  {/* Map Placeholder */}
                  <Box
                    sx={{
                      width: '100%',
                      aspectRatio: '16/9',
                      borderRadius: '16px',
                      bgcolor: '#F1F5F9',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mt: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Map placeholder
                    </Typography>
                  </Box>
                </Box>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
