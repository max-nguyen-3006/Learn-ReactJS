import React from "react";
import clsx from "clsx";

import styles from "./Button.module.css";
export default function Button({primary}) {
  return (
    <>
      <button className={styles.btn}>Btn 1</button>
      <button className={`${styles.btn} ${styles.active}`}>Btn 2</button>
      <button className={[styles.btn, styles.active].join(" ")}>Btn 3</button>
      <button className={clsx(styles.btn, { [styles.active]: primary , 'heading': !primary} )}>
        Btn 4
      </button>
    </>
  );
}
