import React from 'react';
import { StaticImageData } from 'next/image';
import { Figure } from '../figure/figure';

import styles from './FigureGallery.module.css';

/**
 * Represents the properties of an individual figure image.
 */
export interface FigureImageProps {
  file: StaticImageData; // The image file to be displayed.
  altText: string; // The alternative text for the image.
  caption: string; // The caption for the image.
}

/**
 * Represents a gallery of figure images.
 */
export interface FigureGalleryProps {
  items?: FigureImageProps[]; // An array of FigureImageProps representing the items to be displayed in the gallery.
}

/**
 * A React component that displays a gallery of figure images.
 * @param items An array of FigureImageProps representing the items to be displayed in the gallery.
 * @returns A React element representing the figure gallery.
 */
export function FigureGallery({ items = [] }: FigureGalleryProps) {
  return (
    <div className={styles.FigureGallery}>
      {items.map((item, index) => (
        <Figure key={index} imageFile={item.file} altText={item.altText} caption={item.caption} />
      ))}
    </div>
  );
}
