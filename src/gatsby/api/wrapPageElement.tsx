import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { Layout } from '../../components/Layout';
import { SEO } from '../../components/SEO';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props: { location },
}) => (
  <Layout>
    <SEO location={location} />
    {element}
  </Layout>
);
