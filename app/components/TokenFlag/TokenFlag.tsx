import React from 'react';

import iconBrush from './images/icon-brush.svg';
import iconText from './images/icon-text.svg';
import vertLine from './images/vert-line.svg';

import styles from './TokenFlag.module.css';

interface TokenFlagProps {
  type: 'type' | 'color';
  className?: string;
  text?: string;
  footnote?: string;
}

export const TokenFlag: React.FC<TokenFlagProps> = ({
  type,
  className = '',
  text = "a.token.name",
  footnote = '',
}) => {
  const isType = type === "type";
  const imageSrc = isType ? iconText : iconBrush;

  console.log(['imageSrc', imageSrc])

  return (
    <div className={`${styles.TokenFlag} ${styles.type} ${styles.direction} ${className}`}>
      <img className={styles.icon} alt="Icon" src={imageSrc.src} />
      <sup className={styles.footnote}>{footnote}</sup>
      <img className={styles.line} alt="Line" src={vertLine.src} />
      <div className={styles.tokenName}>{text}</div>
    </div>
  );
};

interface TokenMarkerProps {
  className?: string;
  footnote?: string;
  style?: object;
}

export const TokenMarker: React.FC<TokenMarkerProps> = ({
  className = '',
  footnote = '1',
  style = {}
}) => {
  return (
    <small className={`${styles.tokenMarker} ${className}`} style={style}>{footnote}</small>
  );
};
