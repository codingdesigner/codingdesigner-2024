'use client';
import React from 'react';
import Image from 'next/image';

import styles from './figure.module.css';

/**
 * Represents the properties for the Figure component.
 */
export interface FigureProps {
  altText?: string; // The alternative text for the image.
  caption?: string; // The caption for the figure.
  imageFile?: {
    height: number;
    src: string; // The image source file path.
    width: number; // The width of the image.
  };
  modalImageFile?: {
    height: number;
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
export function Figure({ imageFile, altText, caption, imageFirst = true, modalImageFile = {height: 0, width: 0, src: ''} }: FigureProps) {

  if (!imageFile || !imageFile.src || !imageFile.width || !imageFile.height) {
    console.log(['imageFile', imageFile, altText])
    throw new Error('Invalid imageFile object');
  }

  const figureClass = (imageFirst === true) ? styles.imageFirst : styles.captionFirst;

  const handleDialog = (e) => {
    const parent = e.target.parentNode;
    const dialog = parent.querySelector("dialog")
    dialog.showModal();
  };

  return (
    <figure className={figureClass}>
      <Image
        className={styles.img}
        src={imageFile.src}
        width={imageFile.width}
        height={imageFile.height}
        alt={altText || ''}
        onClick={handleDialog}
      />
      <dialog className={styles.dialog}>
        <form method="dialog">
          <button className={styles.dialogClose} type="submit" id="normal-close">X</button>
          <Image
            className={styles.dialogImage}
            src={modalImageFile.src}
            width={modalImageFile.width}
            height={modalImageFile.height}
            alt={altText || ''}
          />
        </form>
      </dialog>
      <figcaption className={styles.figCaption}>{caption || ''}</figcaption>
    </figure>
  );
}
