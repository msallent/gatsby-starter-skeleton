import React, { FunctionComponent } from 'react';
import { PageProps } from 'gatsby';
import { SEO } from '../SEO';
import '../../style/main.scss';

export const Layout: FunctionComponent<Omit<PageProps, 'children'>> = ({ children, location }) => (
  <>
    <SEO location={location} />
    {children}
  </>
);
