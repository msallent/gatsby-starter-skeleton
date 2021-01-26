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
    <Helmet
      defaultTitle={title}
      titleTemplate={`${title} - %s`}
      htmlAttributes={{ lang: language }}
      link={[{ rel: 'icon', type: 'image/ico', href: Favicon }]}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'keywords',
          content: keywords.join(', '),
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:url',
          content: `${siteUrl}${location.pathname}`,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: `${siteUrl}${imageUrl}`,
        },
        {
          property: 'og:image:alt',
          content: title,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ]}
    />
  );
};
