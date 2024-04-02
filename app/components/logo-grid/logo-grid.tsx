import React from 'react';
import { Logo } from '../logos/components/Logo';

import styles from './logo-grid.module.css';

const logos = [
  "new-yorker",
  "vogue",
  "pitchfork",
  "vanity-faire",
  "gq",
  "them",
  "wired",
  "glamour",
  "house-garden",
  "hive",
  "allure",
  "clever",
  "teen-vogue",
  "architectural-digest",
  "self",
  "bon-appetit",
  "traveler",
  "epicurious",
  "la-cucina-italiana",
  "tatler",
]

export function LogoGrid() {
  return (
    <div className={styles.logoGrid}>
      {logos.map((logo, index) => {
        console.log(logos[logo])
        return (
          <div className={styles.logo}>
            <Logo logoName={logo} />
          </div>
        )
      })}
    </div>
  );
}
