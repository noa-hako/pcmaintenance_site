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
        <h1 className={styles.h1}>PC.K</h1>
        <div className={styles.col}>
          <p>☎︎ 022-123-4567</p>
          <p>営業時間 10:00〜19:00</p>
          <p>定休日 水曜日</p>
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
