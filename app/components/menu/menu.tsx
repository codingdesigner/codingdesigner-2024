'use client';
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import styles from './menu.module.css';

export interface menuProps {
  prop?: string;
}

function MenuList() {
  return (
    <ul role="menu" className={styles.menu}>
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
    </ul>
  );
}

export function Menu({ prop = 'default value' }: menuProps) {
  const [menuActive, setMenuActive] = useState(false);

  const onHamburgerClick = () => {
    const newState = (menuActive) ? false : true;
    setMenuActive(newState);
    console.log(minSmall)
  };

  const minSmall = useMediaQuery({
    query: `(max-width: 632px)`,
  });

  return (
    <React.Fragment>
      {minSmall && (
        <React.Fragment>
          <div className={styles.menuButton}
            onClick={onHamburgerClick}>Menu</div>
          <div className={(menuActive) ? styles.drawerOpen : styles.drawerClosed}>
            <MenuList />
          </div>
        </React.Fragment>
      )}
      {!minSmall && (
        <MenuList />
      )}
    </React.Fragment>
  );
}
