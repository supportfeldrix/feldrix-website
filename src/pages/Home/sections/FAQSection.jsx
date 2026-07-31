import { Container, Box } from '@mui/material';
import SectionTitle from '../../../components/common/SectionTitle';
import FAQAccordion from '../../../components/sections/FAQAccordion';

const faqItems = [
  {
    question: 'Can I use Feldrix on my phone?',
    answer: 'Yes! Feldrix is fully responsive and works beautifully on any device — phone, tablet, or desktop. Access your farm data wherever you are, even in the field.',
  },
  {
    question: 'Can multiple workers use one farm?',
    answer: 'Absolutely. With the PRO plan, you can invite team members to collaborate on the same farm with role-based access control.',
  },
  {
    question: 'Can I upgrade later?',
    answer: 'Yes. Start free and upgrade to PRO at any time. Your data carries over seamlessly — no migration needed.',
  },
  {
    question: 'Is there a free version?',
    answer: 'Yes! Our Starter plan is completely free and includes basic livestock tracking, crop records, and task planning for up to 50 animals.',
  },
  {
    question: 'Is my information secure?',
    answer: 'Your data is protected with enterprise-grade encryption, regular backups, and strict access controls. We take security seriously.',
  },
  {
    question: 'Can I cancel any time?',
    answer: 'Yes. There are no long-term contracts. Cancel your PRO subscription at any time and continue using the free Starter plan.',
  },
];

const FAQSection = () => (
  <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.surface' }}>
    <Container maxWidth="lg">
      <SectionTitle
        chip="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about getting started."
      />
      <FAQAccordion items={faqItems} />
    </Container>
  </Box>
);

export default FAQSection;
