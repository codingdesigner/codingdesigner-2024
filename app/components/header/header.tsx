import React from 'react';

import styles from './styles.module.css';

export interface headerProps {
  prop?: string;
}

export function Header({ prop = 'default value' }: headerProps) {
  return (
    <React.Fragment>
      {/* <a href="#maincontent" className={styles.skiplink}>Skip to main content</a> */}
    <header className={styles.header}>
    <div role='banner'>
      <a href='/'>Gwendy Wendell</a>
      <div>The Coding Designer</div>
    </div>
      <ul aria-role="menu" className={styles.menu}>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/cv">CV</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        {/* <li><a href="/test/md">Markdown</a></li> */}
        {/* <li><a href="/test">Settings</a></li> */}
      </ul>
    </header>
    </React.Fragment>);
}
