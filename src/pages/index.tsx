import React, { FunctionComponent } from 'react';
import { PageProps } from 'gatsby';
import { ReactComponent as Logo } from '../assets/svg/gatsby.svg';
import styles from '../style/pages/index.module.scss';

const Index: FunctionComponent<PageProps> = () => (
  <div className={styles.wrapper}>
    <Logo className={styles.logo} />
    <p>Delete this file to start your project.</p>
    <a className={styles.link} href="https://github.com/msallent/gatsby-starter-skeleton">
      Gatsby Skeleton
    </a>
  </div>
);

export default Index;
