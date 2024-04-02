import React from 'react';

import styles from './DecoratedHeading.module.css';

const recipes: { [key: string]: string } = {
  'pink-bg': styles.DecoratedHeading1,
  'pink-blue': styles.DecoratedHeading2,
};

export interface DecoratedHeadingProps {
  children?;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  recipe?: 'pink-bg' | 'pink-blue';
}

export function DecoratedHeading({ children, as: Element = 'h1', recipe = 'pink-bg' }: DecoratedHeadingProps) {
  return <Element className={recipes[recipe]}>{children}</Element>;
}
