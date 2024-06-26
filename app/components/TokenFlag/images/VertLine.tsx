import React from "react";
import styles from "../TokenFlag.module.css"

const VertLine = () => {
  return (
    <svg className={styles.vertLine} width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="16" stroke="#D1D1D1" />
    </svg>
  )
}

export { VertLine }
