import React from 'react';

import styles from './figure.module.css';

/**
 * Represents the properties for the Figure component.
 */
export interface FigureProps {
  altText?: string; // The alternative text for the image.
  caption?: string; // The caption for the figure.
  imageFile?: {
    src: string; // The image source file path.
    width: number; // The width of the image.
  };
  imageFirst?: boolean // Render direction of the figure
}

/**
 * Represents a figure component that displays an image with optional caption.
 * @param imageFile - The image file object containing src and width properties.
 * @param altText - The alternative text for the image.
 * @param caption - The caption for the figure.
 * @param imageFirst - Render direction of the figure.
 * @throws Error if the imageFile object is invalid.
 * @returns A React component representing the figure with image and caption.
 */
export function Figure({ imageFile, altText, caption, imageFirst = true }: FigureProps) {
if (!imageFile || !imageFile.src || !imageFile.width) {
    throw new Error('Invalid imageFile object');
  }

  const figureClass = (imageFirst === true) ? styles.imageFirst : styles.captionFirst;


  return (
    <figure className={figureClass}>
      <img
        className={styles.img}
        src={imageFile.src}
        width={imageFile.width}
        alt={altText || ''}
      />
      <figcaption className={styles.figCaption}>{caption || ''}</figcaption>
    </figure>
  );
}
