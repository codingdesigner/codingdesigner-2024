import React from 'react';

// import styles from './typography.module.css';

export interface typographyProps {
  dangerousHTML?: string;
}

export function Typography({ dangerousHTML = '' }: typographyProps) {
  return (
    <div id="top" role="document">
      <main dangerouslySetInnerHTML={{__html: dangerousHTML}} />
    </div>
  );
}
