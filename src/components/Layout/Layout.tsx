import React from 'react';
import { GlobalStyle } from './styles';

import SEO from '../SEO/SEO';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <>
    <GlobalStyle />
    <SEO />
    {children}
  </>
);

export default Layout;
