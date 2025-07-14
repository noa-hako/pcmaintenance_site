import React from "react";
import SecTitle from "./SecTitle";
import styles from "./Starter.module.css";
import Image from "next/image";

export default function Starter() {
  return (
    <div className={styles.wrapper}>
      <SecTitle title="初めての方へ" />
      <h2 className={styles.h2}>修理・相談の方法</h2>
      <ul className={styles.list}>
        <li>
          <Image
            src="/icon_shop01.png"
            alt="持ち込み修理"
            width={220}
            height={220}
          />
          <p>持ち込み修理</p>
        </li>
        <li>
          <Image
            src="/icon_shop02.png"
            alt="宅配修理"
            width={220}
            height={220}
          />
          <p>宅配修理</p>
        </li>
        <li>
          <Image
            src="/icon_shop03.png"
            alt="出張引き取り"
            width={220}
            height={220}
          />
          <p>出張引き取り</p>
        </li>
      </ul>
    </div>
  );
}
