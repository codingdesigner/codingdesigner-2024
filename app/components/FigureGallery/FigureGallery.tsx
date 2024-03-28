import React from 'react';
import { Figure } from '../figure/figure';

import styles from './FigureGallery.module.css';

export interface Image {
  file: string;
  altText: string;
  caption: string;
}

export interface FigureGalleryProps {
  items?: Image[];
}

export function FigureGallery({ items = [] }: FigureGalleryProps) {
  return (
    <div className={styles.FigureGallery}>
      {items.map((item, index) => (
        <Figure key={index} imageFile={item.file} altText={item.altText} caption={item.caption} />
      ))}
    </div>
  );
}
