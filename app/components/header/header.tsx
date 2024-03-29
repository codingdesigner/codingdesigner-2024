'use client';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";

import { Banner } from '../banner';
import { Menu, MenuList } from '../menu';

import styles from './header.module.css';

export function Header() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const minSmall = useMediaQuery({
    query: `(max-width: 640px)`,
  });

  return (
    <React.Fragment>
      <a href="#maincontent" className={styles.skiplink}>Skip to main content</a>
      <header className={styles.header}>
        <Banner/>
        {isClient && !minSmall && (
          <MenuList />
        )}
      </header>
      {isClient && minSmall && (
        <Menu />
      )}
    </React.Fragment>);
}
