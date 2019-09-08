import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Favicon from '../../assets/favicon.ico';

interface HelmetData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const SEO = (): React.ReactElement => {
  const { site }: HelmetData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  );

  return (
    <Helmet
      title={site.siteMetadata.title}
      htmlAttributes={{ lang: 'es' }}
      link={[{ rel: 'shortcut icon', type: 'image/ico', href: Favicon }]}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `keywords`,
          content: site.siteMetadata.keywords,
        },
      ]}
    />
  );
};

export default SEO;
