import React, { ReactNode } from 'react';

import styles from './StripesWrapper.module.css';

export interface StripesWrapperProps {
  children?: ReactNode;
}

export function StripesWrapper({children}: StripesWrapperProps) {
  return <div className={styles.StripesWrapper}>{children}</div>;
}
