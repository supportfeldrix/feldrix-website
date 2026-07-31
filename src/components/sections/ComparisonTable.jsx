import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const ComparisonTable = ({ features, plans }) => (
  <TableContainer
    component={Paper}
    sx={{
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      border: '1px solid',
      borderColor: 'divider',
      overflow: 'hidden',
    }}
  >
    <Table aria-label="Feature comparison table">
      <TableHead>
        <TableRow sx={{ bgcolor: 'background.surface' }}>
          <TableCell sx={{ fontWeight: 700, fontSize: '1rem', width: '40%' }}>Feature</TableCell>
          {plans.map((plan) => (
            <TableCell
              key={plan.name}
              align="center"
              sx={{ fontWeight: 700, fontSize: '1rem' }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {plan.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {plan.price}
                </Typography>
              </Box>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {features.map((feature, index) => (
          <TableRow
            key={index}
            sx={{ '&:nth-of-type(odd)': { bgcolor: 'rgba(248,250,252,0.5)' } }}
          >
            <TableCell sx={{ py: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {feature.name}
              </Typography>
            </TableCell>
            {feature.availability.map((available, i) => (
              <TableCell key={i} align="center">
                {available ? (
                  <CheckCircleIcon sx={{ color: 'primary.main', fontSize: '1.4rem' }} />
                ) : (
                  <RemoveCircleOutlineIcon sx={{ color: '#CBD5E1', fontSize: '1.4rem' }} />
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ComparisonTable;
