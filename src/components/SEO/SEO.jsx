import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

import Favicon from '../../assets/favicon.ico';

const SEO = ({ title, description, lang, pathname, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            url
            image
          }
        }
      }
    `
  );

  const defaultImage = `${site.siteMetadata.url}${site.siteMetadata.image}`;
  const metaImage = image && image.src ? `${site.siteMetadata.url}${image.src}` : defaultImage;
  const metaImageAlt = image && image.alt ? image.alt : title;
  const metaDescription = description || site.siteMetadata.description;
  const metaURL = `${site.siteMetadata.url}${pathname}`;

  return (
    <Helmet
      title={title}
      titleTemplate={`${site.siteMetadata.title} - %s`}
      htmlAttributes={{ lang }}
      link={[{ rel: 'shortcut icon', type: 'image/ico', href: Favicon }]}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'keywords',
          content: site.siteMetadata.keywords,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:url',
          content: metaURL,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          property: 'og:image:alt',
          content: metaImageAlt,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ]}
    />
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
};

SEO.defaultProps = {
  description: null,
  image: null,
};

export default SEO;
