import React from 'react';

import styles from './page-footer.module.css';

export function PageFooter() {
  const creationYear = 2023;
  const date = new Date();
  const thisYear = date.getFullYear();
  let yearString = (thisYear > creationYear) ? `${creationYear} - ${thisYear}` : thisYear;
  return <div className={styles.pageFooter}>Copyright {yearString} Gwendy Wendell. All rights reserved.</div>;
}
