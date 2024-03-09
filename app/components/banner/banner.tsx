import React from 'react';

import styles from './banner.module.css';

export function Banner() {
  return (
    <div role='banner' className={styles.banner}>
      <a href='/' className={styles.gwendyWendell}>
        <span className={styles.gwendyWrapper}>
          <span className={styles.gwendy}>Gwendy </span>
        </span>
        <span className={styles.wendellWrapper}>
          <span className={styles.wendell}>Wendell</span>
        </span>
      </a>
      <a href='/' className={styles.tcd}>
        <sup className={styles.the}>The</sup>
        <span className={styles.codingWrapper}><span className={styles.coding}>Coding</span> </span>
        <span className={styles.designerWrapper}><span className={styles.designer}>Designer</span></span>
      </a>
    </div>
  );
}
