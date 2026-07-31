import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Feldrix | Farm Smarter. Grow Stronger.',
  description = 'The complete farm management platform for livestock, crops, machinery, finance and planning.',
  canonical,
  ogImage = '/images/og-image.png',
  type = 'website',
  keywords = 'farm management, livestock, crops, agriculture, farming software, farm planner',
}) => {
  const siteUrl = 'https://www.feldrix.com';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Feldrix" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Helmet>
  );
};

export default SEO;
