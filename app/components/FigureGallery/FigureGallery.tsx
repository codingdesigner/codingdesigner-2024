import React, { ReactNode } from 'react';

import styles from './FigureGallery.module.css';

export interface FigureGalleryProps {
  content?: ReactNode;
}

export function FigureGallery({content}: FigureGalleryProps) {
  return <div className={styles.FigureGallery}>{content}</div>;
}
