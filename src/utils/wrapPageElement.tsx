import React from 'react';
import { Layout } from '@msallent/gatsby-theme-skeleton-seo/src/components/Layout';
import { GlobalStyle } from './globalStyle';

export const wrapPageElement: React.FC = ({ element, props }: any) => {
  const { data, location } = props;

  const currentNode = data && data.currentNode;
  const pageMetadata = currentNode && {
    title: currentNode.title,
    description: currentNode.description,
    keywords: currentNode.keywords,
    language: currentNode.language,
    imageURI: currentNode.imageURI,
  };

  return (
    <Layout location={location} {...pageMetadata}>
      <GlobalStyle />
      {element}
    </Layout>
  );
};
