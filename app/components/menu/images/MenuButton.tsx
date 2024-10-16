import React from "react";
import styles from "../menu.module.css"

const MenuButton = ({onClick}) => {
  return (
    <svg className={styles.menuButton} onClick={onClick} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14H28V16H12V14ZM12 19H28V21H12V19ZM12 24H28V26H12V24Z" fill="black" />
    </svg>
  )
}

export { MenuButton }
