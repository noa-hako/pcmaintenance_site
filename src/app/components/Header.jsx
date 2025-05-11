import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.red}>header</h1>
      <nav>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>価格帯</li>
          <li className={styles.nav_item}>allow</li>
          <li className={styles.nav_item}>Macbook</li>
          <li className={styles.nav_item}>windows</li>
        </ul>
      </nav>
    </header>
  );
}
