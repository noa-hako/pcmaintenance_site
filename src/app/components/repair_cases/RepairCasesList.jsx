import React from "react";
import styles from "./RepairCasesList.module.css";
import Image from "next/image";
import Link from "next/link";

export default function repair_cases_list() {
  return (
    <div>
      <div className={styles.article}>
        <Link href="/repair-cases/case001">
          <Image
            src="/repair/001.jpg"
            alt="修理事例1"
            width={360}
            height={240}
          />
        </Link>
        <div className={styles.list}>
          <div>
            <h2 className={styles.title}>
              mouseパソコンの液晶モニターを交換修理
            </h2>
            <p className={styles.text}>
              ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
              ここにテキストが入ります。ここにテキストが入ります。
            </p>
          </div>
          <p className={styles.date}>2025.7.25</p>
          <Link href="/cases001">
            <button className={styles.button}>続きを読む</button>
          </Link>
        </div>
      </div>
      <div className={styles.article}>
        <Link href="/" className={styles.bgc_gray}>
          {/* <Image
            src="/repair/002.jpg"
            alt="修理事例1"
            width={360}
            height={240}
          /> */}
        </Link>
        <div className={styles.list}>
          <div>
            <h2 className={styles.title}>タイトルが入ります。</h2>
            <p className={styles.text}>
              ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
              ここにテキストが入ります。ここにテキストが入ります。
            </p>
          </div>
          <p className={styles.date}>2025.0.00</p>
          <Link href="/">
            <button className={styles.button}>続きを読む</button>
          </Link>
        </div>
      </div>
      <div className={styles.article}>
        <Link href="/" className={styles.bgc_gray}>
          {/* <Image
            src="/repair/002.jpg"
            alt="修理事例1"
            width={360}
            height={240}
          /> */}
        </Link>
        <div className={styles.list}>
          <div>
            <h2 className={styles.title}>タイトルが入ります。</h2>
            <p className={styles.text}>
              ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
              ここにテキストが入ります。ここにテキストが入ります。
            </p>
          </div>
          <p className={styles.date}>2025.0.00</p>
          <Link href="/">
            <button className={styles.button}>続きを読む</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
