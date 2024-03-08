import React from 'react';

// import styles from './typography.module.css';

export interface typographyProps {
  prop?: string;
}

export function Typography({ prop = 'default value' }: typographyProps) {
  return (
    <div id="top" role="document">
      <main dangerouslySetInnerHTML={{__html: prop}} />
    </div>
  );
}
