'use client';
import React, { useState } from "react";

import styles from './menu.module.css';

export function MenuList() {
  return (
    <ul role="menu" className={styles.menu}>
      <li className={styles.menuItem}>
        <a href="/portfolio" className={styles.menuLink}>Portfolio</a>
      </li>
      <li className={styles.menuItem}>
        <a href="/about" className={styles.menuLink}>About</a>
      </li>
      <li className={styles.menuItem}>
        <a href="https://www.linkedin.com/in/gwenwendell/" className={styles.menuLink}>LinkedIn</a>
      </li>
      <li className={styles.menuItem}>
        <a href="mailto:gwendyisapunk@gmail.com" className={styles.menuLink}>Contact</a>
      </li>
    </ul>
  );
}

export function Menu() {
  const [menuActive, setMenuActive] = useState(false);

  const onHamburgerClick = () => {
    const newState = (menuActive) ? false : true;
    setMenuActive(newState);
  };

  return (
    <React.Fragment>
      <React.Fragment>
        <div className={styles.menuButton}
          onClick={onHamburgerClick}>Menu</div>
        <div className={(menuActive) ? styles.drawerOpen : styles.drawerClosed}>
          <MenuList />
        </div>
      </React.Fragment>
    </React.Fragment>
  );
}
