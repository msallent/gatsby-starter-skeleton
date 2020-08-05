import React, { FunctionComponent } from 'react';
import { ReactComponent as Logo } from '../../assets/svg/gatsby.svg';
import styles from './App.module.scss';

export const App: FunctionComponent = () => (
  <div className={styles.app}>
    <Logo className={styles.logo} />
    <p>Delete this file to start your project.</p>
    <a className={styles.link} href="https://github.com/msallent/gatsby-starter-skeleton">
      Gatsby Skeleton
    </a>
  </div>
);
