import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../SEO';

import GlobalStyle from '../../utils/globalStyle';

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
