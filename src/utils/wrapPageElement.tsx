import React from 'react';
import { Layout } from '@msallent/gatsby-theme-skeleton-seo/src/components/Layout';
import { GlobalStyle } from './globalStyle';

export const wrapPageElement: React.FC = ({ element, props }: any) => {
  /* eslint-disable-next-line */
  const displayName = props.pageResources.component.displayName
    .split(/(?=[A-Z])/)
    .slice(2)
    .join(' ');

  return (
    <>
      <GlobalStyle />
      <Layout title={displayName}>{element}</Layout>
    </>
  );
};
