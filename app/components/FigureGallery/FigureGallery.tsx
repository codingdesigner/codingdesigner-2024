import React from 'react';
import { StaticImageData } from 'next/image';
import { Figure } from '../figure/figure';

import styles from './FigureGallery.module.css';

export interface FigureImageProps {
  file: StaticImageData;
  altText: string;
  caption: string;
}

export interface FigureGalleryProps {
  items?: FigureImageProps[];
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
