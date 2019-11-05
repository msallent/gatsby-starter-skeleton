import React from 'react';
import PropTypes from 'prop-types';
import { HelmetProvider } from 'react-helmet-async';
import { Location } from '@reach/router';

import SEO from '../SEO';

import GlobalStyle from '../../utils/globalStyle';

const Layout = ({ children, title, description, lang, image }) => (
  <Location>
    {({ location }) => (
      <HelmetProvider>
        <GlobalStyle />
        <SEO
          title={title}
          description={description}
          lang={lang}
          pathname={location.pathname}
          image={image}
        />
        {children}
      </HelmetProvider>
    )}
  </Location>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
};

Layout.defaultProps = {
  description: null,
  lang: 'es',
  image: null,
};

export default Layout;
