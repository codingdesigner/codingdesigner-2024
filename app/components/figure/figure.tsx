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
  } | null;
  imageFirst?: boolean // Render direction of the figure
  centerFigure?: boolean // Whether to center the figure
  circleCrop?: boolean // Whether to center the figure
  grayScale?: boolean // Whether to center the figure
}

export function Figure({
  imageFile,
  altText = "",
  caption = "",
  imageFirst = true,
  centerFigure = false,
  circleCrop = false,
  grayScale = false,
  modalImageFile
}: FigureProps) {
  // Validate the imageFile object
  if (!imageFile || !imageFile.src || !imageFile.width || !imageFile.height) {
    console.error('Invalid imageFile object:', imageFile);
    throw new Error('Invalid imageFile object');
  }

  // Determine the CSS class based on the imageFirst prop
  const figureClass = imageFirst ? styles.imageFirst : styles.captionFirst;
  const justifyClass = centerFigure ? styles.centerFigure : "";
  const circleClass = circleCrop ? styles.circleCrop : "";
  const grayscaleClass = grayScale ? styles.grayScale : "";
  const bottomBorderClass = circleCrop ? "" : styles.bottomBorder;

  // Handler for opening the modal dialog
  const handleDialog = (e) => {
    const dialog = e.target.parentNode.querySelector("dialog");
    if (dialog) dialog.showModal();
  };

  return (
    <figure className={`${figureClass} ${justifyClass} ${bottomBorderClass}`}>
      <Image
        className={`${styles.img} ${circleClass} ${grayscaleClass}`}
        src={imageFile.src}
        width={imageFile.width}
        height={imageFile.height}
        alt={altText || ''}
        onClick={modalImageFile ? handleDialog : undefined}
      />
      {modalImageFile && (
        <dialog className={styles.dialog}>
          <form method="dialog">
            <button className={styles.dialogClose} type="submit">X</button>
            <Image
              className={styles.dialogImage}
              src={modalImageFile.src}
              width={modalImageFile.width}
              height={modalImageFile.height}
              alt={altText || ''}
            />
          </form>
        </dialog>
      )}
      {caption && (
        <figcaption className={styles.figCaption}>{caption || ''}</figcaption>
      )}
    </figure>
  );
}
