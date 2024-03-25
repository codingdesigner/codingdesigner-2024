import React from 'react';

import styles from './logo-grid.module.css';

import allure from '../../static/logos/Allure.svg';
import ad from '../../static/logos/architectural-digest.svg';
import bonapp from '../../static/logos/bon-appetit.svg';
import clever from '../../static/logos/Clever.svg';
import epicurious from '../../static/logos/epicurious.svg';
import glamour from '../../static/logos/glamour.svg';
import gq from '../../static/logos/gq.svg';
import hive from '../../static/logos/hive.svg';
import houseGarden from '../../static/logos/house-garden.svg';
import laCucinaItaliana from '../../static/logos/la-cucina-italiana.svg';
import newYorker from '../../static/logos/new-yorker.svg';
import pitchfork from '../../static/logos/pitchfork.svg';
import self from '../../static/logos/self.svg';
import tatler from '../../static/logos/tatler.svg';
import teenVogue from '../../static/logos/teen-vogue.svg';
import them from '../../static/logos/them.svg';
import traveler from '../../static/logos/traveler.svg';
import vanityFaire from '../../static/logos/vanity-faire.svg';
import vogue from '../../static/logos/vogue.svg';
import wired from '../../static/logos/wired.svg';

const logos = [
  newYorker,
  vogue,
  pitchfork,
  vanityFaire,
  gq,
  them,
  wired,
  glamour,
  houseGarden,
  hive,
  allure,
  clever,
  teenVogue,
  ad,
  self,
  bonapp,
  traveler,
  epicurious,
  laCucinaItaliana,
  tatler,
]

// export interface LogoGridProps {
//   prop?: string;
// }

console.clear()

export function LogoGrid() {
  console.log(['logos', logos])
  return (
    <div className={styles.logoGrid}>
      {logos.map((logo, index) => {
        return (
          <img className={styles.logo} src={logo.src} alt="logo" />
        )
      })}
    </div>
  );
}
