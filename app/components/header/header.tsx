import React from 'react';

import styles from './styles.module.css';

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
        <ul aria-role="menu" className={styles.menu}>
          <li className={styles.menuItem}>
            <a href="/portfolio" className={styles.menuLink}>Portfolio</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/cv" className={styles.menuLink}>CV</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/about" className={styles.menuLink}>About</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/contact" className={styles.menuLink}>Contact</a>
          </li>
          {/* <li><a href="/test/md">Markdown</a></li> */}
          {/* <li><a href="/test">Settings</a></li> */}
        </ul>
      </header>
    </React.Fragment>);
}
