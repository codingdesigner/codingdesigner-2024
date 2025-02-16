import React from 'react';

import styles from './Recharts.module.css';

export interface RechartsProps {
  prop?: string;
}

export function Recharts({prop = 'default value'}: RechartsProps) {
  return <div className={styles.Recharts}>Recharts {prop}</div>;
}
