import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = ({ variant = 'dark', size = 'medium' }) => {
  const sizes = {
    small: { height: 36 },
    medium: { height: 46 },
    large: { height: 76 },
  };

  const { height } = sizes[size];

  // Use horizontal logo for navbar (has text), green for dark bg, white for dark bg
  const logoSrc = variant === 'light'
    ? '/logos/feldrix-logo-white.png'
    : '/logos/feldrix-logo-green.png';

  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        '&:hover': { opacity: 0.88 },
        transition: 'opacity 0.2s ease',
      }}
      aria-label="Feldrix - Home"
    >
      <Box
        component="img"
        src={logoSrc}
        alt="Feldrix - Smart Farm Operations"
        sx={{
          height,
          width: 'auto',
          maxWidth: { xs: 160, md: 200 },
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

export default Logo;
