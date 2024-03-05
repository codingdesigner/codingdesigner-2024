import React from 'react';
import { Menu } from '../menu';

import styles from './header.module.css';

export interface headerProps {
  prop?: string;
}

export function Header({ prop = 'default value' }: headerProps) {
  return (
    <React.Fragment>
      <a href="#maincontent" className={styles.skiplink}>Skip to main content</a>
      <header className={styles.header}>
        <div role='banner' className={styles.banner}>
          <a href='/' className={styles.gwendy}>Gwendy Wendell</a>
          <a href='/' className={styles.tcd}>The Coding Designer</a>
        </div>
        <Menu/>
      </header>
    </React.Fragment>);
}
