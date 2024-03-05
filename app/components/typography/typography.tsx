import React from 'react';

// import styles from './typography.module.css';

export interface typographyProps {
  prop?: string;
}

export function typography({ prop = 'default value' }: typographyProps) {
  return (
    <React.Fragment>
      <h1>heading 1</h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3>
      <p>paragraph text</p>
    </React.Fragment>
  );
}
