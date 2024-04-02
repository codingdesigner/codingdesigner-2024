import React from 'react';

import styles from './DecoratedHeading.module.css';

// Define color variables using CSS custom properties
const colorVariables: { [key: string]: string } = {
  'pink': 'var(--color-accent-5)',
  'blue': 'var(--color-accent-1)',
  'green': 'var(--color-accent-2)',
  'peach': 'var(--color-accent-5)',
  'lavender': 'var(--color-accent-4)',
  'black': 'var(--color-grayscale-black)',
  'white': 'var(--color-grayscale-white)',
  'page-text': 'var(--main-text-color)',
  'page': 'var(--main-bg-color)'
};

// Define props for DecoratedHeading component
export interface DecoratedHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  background?: 'pink' | 'blue' | 'green' | 'peach' | 'lavender' | 'black' | 'white' | 'page' | 'page-text';
  text?: 'pink' | 'blue' | 'green' | 'peach' | 'lavender' | 'black' | 'white' | 'page' | 'page-text';
  shadow?: 'pink' | 'blue' | 'green' | 'peach' | 'lavender' | 'black' | 'white' | 'page' | 'page-text';
}

// Define DecoratedHeading component
export function DecoratedHeading({ children, as: Element = 'h1', background = 'pink', text = 'page-text', shadow = 'page' }: DecoratedHeadingProps) {
  // Set inline styles using color variables
  const style = {
    '--color-background': colorVariables[background],
    '--color-text': colorVariables[text],
    '--color-shadow': colorVariables[shadow]
  } as React.CSSProperties;

  // Render DecoratedHeading component with specified styles
  return (
    <Element className={styles.DecoratedHeading} style={style}>
      {children}
    </Element>
  );
}
