import React from "react";
import styles from "./Header.module.css";

const NAVI = [
  "初めての方",
  "パソコン修理",
  "Mac修理",
  "データ復旧",
  "料金",
  "サービス",
  "修理事例",
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>KEIPC</h1>
        <div className={styles.col}>
          <p>宮城県多賀城市1-2-3</p>
          <p>☎︎ 022-123-4567</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          {NAVI.map((nav, index) => (
            <li key={index}>{nav}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
