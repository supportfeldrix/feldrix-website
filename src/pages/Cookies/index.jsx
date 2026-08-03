import { Box, Container, Typography } from '@mui/material';
import SEO from '../../components/common/SEO';
import { ScrollReveal } from '../../components/animations';

const Cookies = () => (
  <>
    <SEO
      title="Cookie Policy | Feldrix"
      description="Understand how Feldrix uses cookies and similar technologies to improve your experience on our farm management platform."
      canonical="/cookies"
      keywords="cookie policy, cookies, tracking, analytics, browser settings, Feldrix cookies"
    />
    <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <ScrollReveal>
          <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
            Legal
          </Typography>
          <Typography variant="h1" sx={{ mb: 4 }}>
            Cookie Policy
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 6 }}>
            Last updated: August 2026
          </Typography>

          <Box sx={{ '& h5': { mt: 5, mb: 2, fontWeight: 700 }, '& p': { mb: 2, lineHeight: 1.8 } }}>

            {/* 1. What Are Cookies */}
            <Typography variant="h5">1. What Are Cookies</Typography>
            <Typography variant="body1" color="text.secondary">
              Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to site owners.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Cookies may be set by the website you are visiting ("first-party cookies") or by third-party services that appear on the page ("third-party cookies"). Cookies can be "persistent" (remaining on your device until they expire or are deleted) or "session" cookies (deleted when you close your browser).
            </Typography>

            {/* 2. Essential Cookies */}
            <Typography variant="h5">2. Essential Cookies</Typography>
            <Typography variant="body1" color="text.secondary">
              These cookies are strictly necessary for the Platform to function correctly. Without them, core features would not work. Essential cookies cannot be disabled.
            </Typography>
            <Box
              sx={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', mb: 3 }}
            >
              <Box
                component="table"
                sx={{
                  width: '100%',
                  minWidth: 400,
                  borderCollapse: 'collapse',
                  '& th, & td': {
                    border: '1px solid',
                    borderColor: 'divider',
                    px: { xs: 1.5, sm: 2 },
                    py: 1.5,
                    fontSize: '0.85rem',
                    textAlign: 'left',
                  },
                  '& th': {
                    bgcolor: 'grey.50',
                    fontWeight: 600,
                    color: 'text.primary',
                  },
                  '& td': {
                    color: 'text.secondary',
                  },
                }}
              >
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>session_id</td>
                    <td>Maintains your authenticated session while using the Platform</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td>csrf_token</td>
                    <td>Protects against cross-site request forgery attacks</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td>cookie_consent</td>
                    <td>Remembers your cookie preference choices</td>
                    <td>12 months</td>
                  </tr>
                </tbody>
              </Box>
            </Box>

            {/* 3. Functional Cookies */}
            <Typography variant="h5">3. Functional Cookies</Typography>
            <Typography variant="body1" color="text.secondary">
              Functional cookies enable enhanced features and personalisation. They remember choices you make (such as your preferred language, region, or display settings) and provide improved, more personal features.
            </Typography>
            <Box
              sx={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', mb: 3 }}
            >
              <Box
                component="table"
                sx={{
                  width: '100%',
                  minWidth: 400,
                  borderCollapse: 'collapse',
                  '& th, & td': {
                    border: '1px solid',
                    borderColor: 'divider',
                    px: { xs: 1.5, sm: 2 },
                    py: 1.5,
                    fontSize: '0.85rem',
                    textAlign: 'left',
                  },
                  '& th': {
                    bgcolor: 'grey.50',
                    fontWeight: 600,
                    color: 'text.primary',
                  },
                  '& td': {
                    color: 'text.secondary',
                  },
                }}
              >
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>user_preferences</td>
                    <td>Stores your display preferences (theme, sidebar state, dashboard layout)</td>
                    <td>12 months</td>
                  </tr>
                  <tr>
                    <td>last_farm</td>
                    <td>Remembers the last farm you accessed for quick navigation</td>
                    <td>30 days</td>
                  </tr>
                  <tr>
                    <td>locale</td>
                    <td>Stores your language and regional format preferences</td>
                    <td>12 months</td>
                  </tr>
                </tbody>
              </Box>
            </Box>
            <Typography variant="body1" color="text.secondary">
              If you disable functional cookies, some features may not work as intended, but core Platform functionality will remain available.
            </Typography>

            {/* 4. Analytics Cookies */}
            <Typography variant="h5">4. Analytics Cookies</Typography>
            <Typography variant="body1" color="text.secondary">
              Analytics cookies help us understand how visitors interact with the Platform by collecting and reporting information anonymously. This data helps us improve the user experience and identify areas where the Platform can be enhanced.
            </Typography>
            <Box
              sx={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', mb: 3 }}
            >
              <Box
                component="table"
                sx={{
                  width: '100%',
                  minWidth: 400,
                  borderCollapse: 'collapse',
                  '& th, & td': {
                    border: '1px solid',
                    borderColor: 'divider',
                    px: { xs: 1.5, sm: 2 },
                    py: 1.5,
                    fontSize: '0.85rem',
                    textAlign: 'left',
                  },
                  '& th': {
                    bgcolor: 'grey.50',
                    fontWeight: 600,
                    color: 'text.primary',
                  },
                  '& td': {
                    color: 'text.secondary',
                  },
                }}
              >
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga</td>
                    <td>Google Analytics — distinguishes unique users</td>
                    <td>24 months</td>
                  </tr>
                  <tr>
                    <td>_ga_*</td>
                    <td>Google Analytics — maintains session state</td>
                    <td>24 months</td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>Google Analytics — distinguishes users within a 24-hour window</td>
                    <td>24 hours</td>
                  </tr>
                </tbody>
              </Box>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Analytics data is aggregated and anonymised. We do not use analytics cookies to personally identify individual users. You may opt out of analytics cookies without affecting your use of the Platform.
            </Typography>

            {/* 5. Marketing Cookies (Future) */}
            <Typography variant="h5">5. Marketing Cookies (Future)</Typography>
            <Typography variant="body1" color="text.secondary">
              Feldrix does not currently use marketing or advertising cookies. In the future, we may introduce marketing cookies to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li>Deliver relevant advertisements on third-party platforms</li>
              <li>Measure the effectiveness of marketing campaigns</li>
              <li>Retarget visitors who have shown interest in Feldrix</li>
              <li>Limit the number of times you see an advertisement</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              If and when marketing cookies are introduced, this policy will be updated and you will be asked for explicit consent before any marketing cookies are placed on your device. Marketing cookies will always be optional and will not affect Platform functionality.
            </Typography>

            {/* 6. Managing Cookies */}
            <Typography variant="h5">6. Managing Cookies</Typography>
            <Typography variant="body1" color="text.secondary">
              You have several options for managing cookies:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li><strong>Cookie consent banner</strong> — When you first visit the Platform, you can choose which categories of cookies to accept or decline</li>
              <li><strong>Platform settings</strong> — You can update your cookie preferences at any time from your account settings</li>
              <li><strong>Browser settings</strong> — You can configure your browser to block or delete cookies (see section 7 below)</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Please note that disabling essential cookies will prevent you from using the Platform. Disabling functional or analytics cookies may reduce the quality of your experience but will not prevent access to core features.
            </Typography>

            {/* 7. Browser Settings */}
            <Typography variant="h5">7. Browser Settings</Typography>
            <Typography variant="body1" color="text.secondary">
              Most web browsers allow you to control cookies through their settings. Below are links to cookie management instructions for common browsers:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li><strong>Google Chrome</strong> — Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
              <li><strong>Mozilla Firefox</strong> — Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li><strong>Safari</strong> — Preferences &gt; Privacy &gt; Manage Website Data</li>
              <li><strong>Microsoft Edge</strong> — Settings &gt; Cookies and site permissions &gt; Manage and delete cookies</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              You can also use your browser's "incognito" or "private browsing" mode to prevent cookies from being stored after your session ends. Be aware that clearing all cookies may log you out of websites and reset your preferences.
            </Typography>

            {/* 8. Contact Details */}
            <Typography variant="h5">8. Contact Details</Typography>
            <Typography variant="body1" color="text.secondary">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li><strong>Email:</strong> privacy@feldrix.com</li>
              <li><strong>General enquiries:</strong> hello@feldrix.com</li>
              <li><strong>Website:</strong> www.feldrix.com</li>
              <li><strong>Location:</strong> South Africa</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              This Cookie Policy should be read alongside our Privacy Policy, which provides further details on how we handle your personal information.
            </Typography>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  </>
);

export default Cookies;
