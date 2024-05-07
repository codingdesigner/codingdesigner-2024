import React from 'react';
import { IconBrush } from './images/IconBrush';
import { IconText } from './images/IconText';
import { VertLine } from './images/VertLine';

import styles from './TokenFlag.module.css';

interface TokenFlagProps {
  type: 'type' | 'color';
  className?: string;
  text?: string;
  footnote?: string;
}

const Icon = ({ type }) => {
  const isType = type === "type";
  const IconCheck = () => (isType ? <IconText /> : <IconBrush />);
  return (
    <IconCheck />
  )
}

export const TokenFlag: React.FC<TokenFlagProps> = ({
  type,
  className = '',
  text = "a.token.name",
  footnote = '',
}) => {

  return (
    <div className={`${styles.TokenFlag} ${styles.type} ${styles.direction} ${className}`}>
      <Icon type={type} />
      <sup className={styles.footnote}>{footnote}</sup>
      <VertLine />
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
