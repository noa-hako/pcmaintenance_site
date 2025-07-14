import React from "react";
import SecTitle from "./SecTitle";
import styles from "./Section.module.css";

export default function Section03() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>持ち込み修理</h2>
        <div className={styles.flow}>
          <div className={styles.flowItem}></div>
          <div className={styles.flowItem}></div>
          <div className={styles.flowItem}></div>
          <div className={styles.flowItem}></div>
        </div>
      </div>
      <div>
        <h2>宅配修理</h2>
        <div className={styles.flow}>
          <div className={styles.flowItem}></div>
          <div className={styles.flowItem}></div>
          <div className={styles.flowItem}></div>
          <div className={styles.flowItem}></div>
        </div>
      </div>
      <div>
        <h2>出張引き取り</h2>
        <div className={styles.flow}>
          <div className={styles.flowItem}></div>
          <div className={styles.flowItem}></div>
          <div className={styles.flowItem}></div>
          <div className={styles.flowItem}></div>
        </div>
      </div>
    </div>
  );
}
