import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

import Favicon from '../../assets/favicon.ico';

const SEO = ({ title }) => {
  const { site } = useStaticQuery(
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
      title={title}
      titleTemplate={`${site.siteMetadata.title} - %s`}
      defaultTitle={site.siteMetadata.title}
      htmlAttributes={{ lang: 'es' }}
      link={[{ rel: 'shortcut icon', type: 'image/ico', href: Favicon }]}
      meta={[
        {
          name: 'description',
          content: site.siteMetadata.description,
        },
        {
          property: 'og:title',
          content: site.siteMetadata.title,
        },
        {
          property: 'og:description',
          content: site.siteMetadata.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'keywords',
          content: site.siteMetadata.keywords,
        },
      ]}
    />
  );
};

SEO.propTypes = {
  title: PropTypes.string,
};

SEO.defaultProps = {
  title: '',
};

export default SEO;
