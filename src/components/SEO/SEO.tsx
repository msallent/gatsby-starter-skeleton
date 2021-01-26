import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Favicon from '../../assets/favicon.ico';

interface SEOProps {
  location: Location;
}

interface SEOQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: Array<string>;
      siteUrl: string;
      image: string;
      language: string;
    };
  };
}

export const SEO: FunctionComponent<SEOProps> = ({ location }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SEOQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
            image
            language
          }
        }
      }
    `
  );

  return (
    <Helmet
      defaultTitle={siteMetadata.title}
      titleTemplate={`${siteMetadata.title} - %s`}
      htmlAttributes={{ lang: siteMetadata.language }}
      link={[{ rel: 'icon', type: 'image/ico', href: Favicon }]}
      meta={[
        {
          name: 'description',
          content: siteMetadata.description,
        },
        {
          property: 'keywords',
          content: siteMetadata.keywords.join(', '),
        },
        {
          property: 'og:title',
          content: siteMetadata.title,
        },
        {
          property: 'og:url',
          content: `${siteMetadata.siteUrl}${location.pathname}`,
        },
        {
          property: 'og:description',
          content: siteMetadata.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: `${siteMetadata.siteUrl}${siteMetadata.image}`,
        },
        {
          property: 'og:image:alt',
          content: siteMetadata.title,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ]}
    />
  );
};
