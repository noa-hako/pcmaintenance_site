import React from "react";
import styles from "./Main.module.css";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";
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
          <h2 className={styles.h2}>出張引き取りいたします！！</h2>
          <p className={styles.cap}>（※別途、出張費用がかかります）</p>
          <p className={styles.para}>
            お客様のご自宅やオフィスまでお伺いし、パソコンの引き取りをいたします。
            <br />
            持ち込みができない方や、忙しくて時間がない方でも安心してご利用いただけます。
            <br />
            まずはお気軽にお問い合わせください。
          </p>
          {/* <ul>
          <li>10km以内 2,500円</li>
          <li>10～15km 3,500円</li>
          <li>15km超え 4,500円</li>
        </ul> */}
        </div>
      </div>
      <Starter />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
    </>
  );
}
