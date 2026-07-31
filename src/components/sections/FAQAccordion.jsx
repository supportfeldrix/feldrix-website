import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SlideUp } from '../animations';

const FAQAccordion = ({ items }) => (
  <Box sx={{ maxWidth: 800, mx: 'auto' }}>
    {items.map((item, index) => (
      <SlideUp key={index} delay={index * 0.05}>
        <Accordion
          sx={{ mb: 1.5 }}
          disableGutters
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`faq-${index}-content`}
            id={`faq-${index}-header`}
          >
            <Typography sx={{ fontWeight: 600 }}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </SlideUp>
    ))}
  </Box>
);

export default FAQAccordion;
