import React from 'react';

import styles from './figure.module.css';

export interface figureProps {
  altText?: string;
  caption?: string;
  imageFile?: any;
}

export function Figure({ imageFile, altText, caption }: figureProps) {
  return (
    <figure className={styles.figure}>
      <img
        className={styles.image}
        src={imageFile.src}
        width={imageFile.width}
        // height={imageFile.height}
        alt={altText}
      />
      <figcaption className={styles.figCaption}>{caption}</figcaption>
    </figure>
  );
}
