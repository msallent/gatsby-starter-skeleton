import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { Layout } from '../../components/Layout';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
