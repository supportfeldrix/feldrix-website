import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { FaFacebook, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', path: '/features' },
      { label: 'Pricing', path: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebook size={16} />, label: 'Facebook', href: '#' },
  { icon: <FaLinkedin size={16} />, label: 'LinkedIn', href: '#' },
  { icon: <FaXTwitter size={16} />, label: 'X', href: '#' },
  { icon: <FaInstagram size={16} />, label: 'Instagram', href: '#' },
];

const contactDetails = [
  { icon: <EmailOutlinedIcon sx={{ fontSize: 14 }} />, text: 'hello@feldrix.com' },
  { icon: <LanguageOutlinedIcon sx={{ fontSize: 14 }} />, text: 'www.feldrix.com' },
  { icon: <LocationOnOutlinedIcon sx={{ fontSize: 14 }} />, text: 'South Africa' },
];

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: '#0B1120',
      color: 'white',
      position: 'relative',
    }}
  >
    {/* Top green glow border */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: 'linear-gradient(90deg, transparent 5%, rgba(22,163,74,0.4) 30%, rgba(22,163,74,0.6) 50%, rgba(22,163,74,0.4) 70%, transparent 95%)',
      }}
    />

    {/* Main content */}
    <Container maxWidth={false} sx={{ maxWidth: 1400, px: { xs: 3, md: 6 } }}>
      <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 10 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: '2.4fr 1fr 1fr 1fr',
            },
            gap: { xs: 5, md: 6 },
            alignItems: 'start',
          }}
        >
          {/* Column 1 — Brand */}
          <Box>
            <Box sx={{ mb: 4 }}>
              <Logo variant="light" size="large" />
            </Box>

            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', fontWeight: 500, mb: 2, fontStyle: 'italic' }}>
              Farm Smarter. Grow Stronger.
            </Typography>

            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.85, mb: 4, maxWidth: 300 }}>
              Feldrix helps modern farmers manage livestock, crops, machinery, finances and daily operations from one intelligent cloud platform.
            </Typography>

            {/* Contact details */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {contactDetails.map((item) => (
                <Box key={item.text} sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <Box sx={{ color: 'rgba(255,255,255,0.35)' }}>{item.icon}</Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Link columns */}
          {columns.map((col) => (
            <Box key={col.title}>
              <Typography sx={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', mb: 3.5, fontSize: '0.9rem', letterSpacing: '0.01em' }}>
                {col.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.2 }}>
                {col.links.map((link) => (
                  <Box key={link.label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography
                      component={Link}
                      to={link.path}
                      sx={{
                        color: 'rgba(255,255,255,0.45)',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          color: '#22C55E',
                          pl: 0.5,
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                    {link.badge && (
                      <Box
                        sx={{
                          px: 1,
                          py: 0.25,
                          borderRadius: '6px',
                          bgcolor: 'rgba(22,163,74,0.1)',
                          border: '1px solid rgba(22,163,74,0.2)',
                        }}
                      >
                        <Typography sx={{ fontSize: '0.55rem', color: '#22C55E', fontWeight: 600, whiteSpace: 'nowrap' }}>
                          {link.badge}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />

      {/* Bottom bar */}
      <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2.5,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 4 }, flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>
            &copy; {new Date().getFullYear()} Feldrix. All rights reserved.
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem' }}>
            Built with ❤️ in South Africa.
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', fontFamily: '"SF Mono", "Fira Code", monospace' }}>
            Version 1.0
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1.2 }}>
          {socialLinks.map((social) => (
            <IconButton
              key={social.label}
              href={social.href}
              aria-label={social.label}
              size="small"
              sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.4)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  color: '#22C55E',
                  borderColor: 'rgba(22,163,74,0.4)',
                  bgcolor: 'rgba(22,163,74,0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Footer;
