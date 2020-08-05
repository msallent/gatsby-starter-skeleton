import React, { FunctionComponent } from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

export const wrapPageElement: FunctionComponent = ({ element, props: { location } }: any) => (
  <Layout>
    <SEO location={location} />
    {element}
  </Layout>
);
