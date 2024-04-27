import React from 'react';
import { StaticImageData } from 'next/image';
import { LayoutColumns } from '../LayoutColumns';
import { Figure } from '../figure/figure';

/**
 * Represents the properties of an individual figure image.
 */
export interface FigureImageProps {
  imageFile: StaticImageData; // The image file to be displayed.
  altText: string; // The alternative text for the image.
  caption: string; // The caption for the image.
  modalImageFile: StaticImageData;
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
    <LayoutColumns>
      {items.map((item, index) => (
        <Figure key={index} imageFile={item.imageFile} altText={item.altText} caption={item.caption} modalImageFile={item.modalImageFile} />
      ))}
    </LayoutColumns>
  );
}
