import React from "react";
import styles from "./Main.module.css";
import Sec01 from "./Sec01";
import Sec02 from "./Sec02";

export default function Main() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>パソコンのことでお困りですか？</h1>
        <p className={styles.para}>
          修理のことならなんでもお任せください！
          <br />
          お客さま一人ひとりに合わせた対面サポートで、
          <br />
          これからもお客様に安心と満足をお届けします。
        </p>
      </div>
      <Sec01 />
      <Sec02 />
    </>
  );
}
