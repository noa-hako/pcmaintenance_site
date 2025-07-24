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
          <h3>店舗持ち込み</h3>
          <p>
            予約なしでもお受けいたします。 お急ぎの方はお店にお持ち込み下さい。
          </p>
        </li>
        <li>
          <Image
            src="/icon_shop02.png"
            alt="宅配修理"
            width={220}
            height={220}
          />
          <h3>宅配修理</h3>
          <p>
            事前にお電話でご相談の上、宅配便でお送りください。
            <br />
            送料はお客様負担となります。
          </p>
        </li>
        <li>
          <Image
            src="/icon_shop03.png"
            alt="出張引き取り"
            width={220}
            height={220}
          />
          <h3>出張引き取り</h3>
          <p>
            事前にお電話でご相談の上、出張引き取りを行います。
            <br />
            料金は地域によって異なりますので、お問い合わせください。
          </p>
        </li>
      </ul>
    </div>
  );
}
