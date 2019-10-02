import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from './styles';
import SEO from '../SEO/SEO';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <SEO />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
