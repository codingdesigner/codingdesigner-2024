import React from 'react';

import { TokenFlag, TokenMarker } from '../TokenFlag';
import styles from './AnnotatedCard.module.css';

import cardBrandless from '../../static/cards/card-brandless.png';

export const AnnotatedCard = () => {
  return (
    <div className={styles.AnnotatedCard}>
      <div className={styles.exampleGroup}>
        <img className={styles.cardBrandless} alt="Card brandless" src={cardBrandless.src} />
        <TokenMarker
          className={styles.marker}
          footnote='1'
          style={{ top: 8, left: 6 }}
        />
        <TokenMarker
          className={styles.marker}
          footnote='2, 3, 4'
          style={{ top: 182, left: 6 }}
        />
        <TokenMarker
          className={styles.marker}
          footnote='5, 6'
          style={{ top: 254, left: 6 }}
        />
        <TokenMarker
          className={styles.marker}
          footnote='7, 8'
          style={{ top: 322, left: 6 }}
        />
      </div>
      <div className={styles.annotationGroup}>
        <TokenFlag
          type="color"
          text="color.card.background"
          footnote="1"
        />
        <TokenFlag
          text="color.context.background"
          type="color"
          footnote="2"
        />
        <TokenFlag
          text="type.context.rubric"
          type="type"
          footnote="3"
        />
        <TokenFlag
          text="color.context.label"
          type="color"
          footnote="4"
        />
        <TokenFlag
          text="color.card.heading"
          type="color"
          footnote="5"
        />
        <TokenFlag
          text="type.card.heading"
          type="type"
          footnote="6"
        />
        <TokenFlag
          text="color.card.subheading"
          type="color"
          footnote="7"
        />
        <TokenFlag
          text="type.card.subheading"
          type="type"
          footnote="8"
        />
      </div>
    </div>
  );
};
