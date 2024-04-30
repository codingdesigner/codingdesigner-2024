import React, { ReactNode } from 'react';

import styles from './ParagraphWrapper.module.css';

export interface ParagraphWrapperProps {
  children?: ReactNode;
}

export function ParagraphWrapper({children}: ParagraphWrapperProps) {
  return <div className={styles.ParagraphWrapper}>{children}</div>;
}
