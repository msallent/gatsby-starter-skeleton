import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import Favicon from '../../assets/favicon.ico';

interface SEOProps {
  location: Location;
}

export const SEO: FunctionComponent<SEOProps> = ({ location }) => {
  const { title, description, keywords, siteUrl, imageUrl, language } = useSiteMetadata();

  return (
    <Helmet defaultTitle={title} titleTemplate={`${title} - %s`}>
      <html lang={language} />
      <link rel="icon" type="image/ico" href={Favicon} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="og:title" content={title} />
      <meta name="og:url" content={`${siteUrl}${location.pathname}`} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={`${siteUrl}${imageUrl}`} />
      <meta name="og:image:alt" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
