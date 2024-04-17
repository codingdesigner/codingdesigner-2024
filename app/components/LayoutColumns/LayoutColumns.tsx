import React, { ReactNode } from 'react';

import styles from './LayoutColumns.module.css';

// Define the props for LayoutColumns component
export interface LayoutColumnsProps {
  children?: ReactNode;
  count?: number;
}

// Define the props for Column component
export interface ColumnsProps {
  children?: ReactNode;
}

// Column component with correct prop type
export const Column = ({children} : ColumnsProps) => {
  return (
    <div className={styles.Column}>{children}</div>
  )
}

// LayoutColumns component that can contain multiple Column components
export function LayoutColumns({children} : LayoutColumnsProps) {
  return (
    <div className={styles.LayoutColumns}>
      {children}
    </div>);
}
