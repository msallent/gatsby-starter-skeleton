import React from 'react';
import PropTypes from 'prop-types';
import { HelmetProvider } from 'react-helmet-async';

import SEO from '../SEO';

import GlobalStyle from '../../utils/globalStyle';

const Layout = ({ children, title }) => (
  <HelmetProvider>
    <GlobalStyle />
    <SEO title={title} />
    {children}
  </HelmetProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: '',
};

export default Layout;
