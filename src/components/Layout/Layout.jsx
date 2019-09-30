import React from 'react';

import GlobalStyle from './styles';
import SEO from '../SEO/SEO';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <SEO />
    {children}
  </>
);

export default Layout;
