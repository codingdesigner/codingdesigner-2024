import React from 'react';

import styles from './LayoutColumns.module.css';

export interface LayoutColumnsProps {
  prop?: string;
}

export function LayoutColumns({prop = 'default value'}: LayoutColumnsProps) {
  return <div className={styles.LayoutColumns}>LayoutColumns {prop}</div>;
}
