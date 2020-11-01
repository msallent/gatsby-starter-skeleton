import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import favicon from '../../assets/favicon.ico';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: Array<string>;
  imageURI?: string;
  language?: string;
  location: Location;
}

interface SiteMetadataQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: Array<string>;
      imageURI: string;
    };
  };
}

export const SEO: FunctionComponent<SEOProps> = ({
  title,
  description,
  keywords = [],
  imageURI,
  language = 'en',
  location,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            imageURI
          }
        }
      }
    `
  );

  return (
    <Helmet
      title={title}
      defaultTitle={siteMetadata.title}
      titleTemplate={`${siteMetadata.title} - %s`}
      htmlAttributes={{ lang: language }}
      link={[{ rel: 'icon', type: 'image/ico', href: favicon }]}
      meta={[
        {
          name: 'description',
          content: description || siteMetadata.description,
        },
        {
          property: 'keywords',
          content: [...keywords, ...siteMetadata.keywords].join(', '),
        },
        {
          property: 'og:title',
          content: title || siteMetadata.title,
        },
        {
          property: 'og:url',
          content: location.href,
        },
        {
          property: 'og:description',
          content: description || siteMetadata.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: `${location.origin}${imageURI || siteMetadata.imageURI}`,
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
