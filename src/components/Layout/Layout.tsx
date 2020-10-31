import React, { FunctionComponent } from 'react';
import { PageProps } from 'gatsby';
import { SEO } from '../SEO';

export type LayoutProps = Omit<PageProps, 'children'>;

export const Layout: FunctionComponent<LayoutProps> = ({ children, location }) => (
  <>
    <SEO location={location} />
    {children}
  </>
);
