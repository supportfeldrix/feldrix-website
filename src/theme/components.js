const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 14,
        padding: '12px 28px',
        fontSize: '0.9375rem',
        fontWeight: 600,
        boxShadow: 'none',
        letterSpacing: '-0.01em',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      sizeLarge: {
        padding: '16px 36px',
        fontSize: '1rem',
        borderRadius: 16,
      },
      containedPrimary: {
        background: 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)',
        boxShadow: '0 2px 8px rgba(22, 163, 74, 0.25)',
        '&:hover': {
          background: 'linear-gradient(135deg, #15803D 0%, #16A34A 100%)',
          boxShadow: '0 8px 24px rgba(22, 163, 74, 0.35)',
          transform: 'translateY(-1px)',
        },
        '&:active': {
          transform: 'translateY(0)',
          boxShadow: '0 2px 8px rgba(22, 163, 74, 0.25)',
        },
      },
      outlinedPrimary: {
        borderWidth: 1.5,
        borderColor: 'rgba(22, 163, 74, 0.4)',
        '&:hover': {
          borderWidth: 1.5,
          backgroundColor: 'rgba(22, 163, 74, 0.04)',
          borderColor: '#16A34A',
          transform: 'translateY(-1px)',
        },
      },
      containedSecondary: {
        background: '#0F172A',
        color: '#FFFFFF',
        '&:hover': {
          background: '#1E293B',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.2)',
          transform: 'translateY(-1px)',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        border: '1px solid rgba(15, 23, 42, 0.06)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          border: '1px solid rgba(15, 23, 42, 0.1)',
          transform: 'translateY(-4px)',
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        fontWeight: 600,
        fontSize: '0.75rem',
        letterSpacing: '0.02em',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 14,
          '& fieldset': {
            borderColor: 'rgba(15, 23, 42, 0.1)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(22, 163, 74, 0.4)',
          },
        },
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: '16px !important',
        border: '1px solid rgba(15, 23, 42, 0.06)',
        boxShadow: 'none',
        overflow: 'hidden',
        '&:before': { display: 'none' },
        '&.Mui-expanded': {
          margin: '12px 0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        fontSize: '1.0625rem',
        padding: '8px 24px',
        minHeight: 64,
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: '0 24px 20px',
      },
    },
  },
};

export default components;
