import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "初めての方", href: "/starter" },
  { label: "パソコン修理", href: "/pc-repair" },
  { label: "Mac修理", href: "/mac-repair" },
  { label: "データ復旧", href: "/data-recovery" },
  { label: "料金", href: "/pricing" },
  { label: "サービス", href: "/services" },
  { label: "修理事例", href: "/repair-cases" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>
          <Link href="/">
            <Image src="/repico.png" alt="ロゴ" width={230} height={80} />
          </Link>
        </h1>
        <div className={styles.col}>
          <p>☎︎ 022-123-4567</p>
          <p>営業時間 10:00〜19:00</p>
          <p>定休日 水曜日</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          {navItems.map((navItem) => (
            <li key={navItem.href}>
              <Link href={navItem.href} className={styles.navItem}>
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
