import React from "react";
import styles from "../figure.module.css";

const DialogCloseButton = () => {
  return (
    <svg className={styles.dialogCloseButton} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#333333" />
      <path d="M19.778 18.364L26.142 12L27.556 13.414L21.192 19.778L27.556 26.142L26.142 27.556L19.778 21.192L13.414 27.556L12 26.142L18.364 19.778L12 13.414L13.414 12L19.778 18.364Z" fill="white" />
    </svg>

  );
}

export { DialogCloseButton }
