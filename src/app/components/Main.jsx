import React from "react";
import styles from "./Main.module.css";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Sec_map from "./Sec_map";
import Starter from "./Starter";

export default function Main() {
  return (
    <>
      <div className={styles.main}>
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
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>出張引き取りいたします！</h2>
          <p className={styles.cap}>（※別途、出張費用がかかります）</p>
          <p className={styles.para}>
            お客様のご自宅やオフィスまでお伺いし、パソコンの引き取りをいたします。
            <br />
            持ち込みができない方や、忙しくて時間がない方でも安心してご利用いただけます。
            <br />
            まずはお気軽にお問い合わせください。
          </p>
        </div>
      </div>
      <Starter />
      <Section01 />
      <Section02 />
      <Sec_map />
    </>
  );
}
