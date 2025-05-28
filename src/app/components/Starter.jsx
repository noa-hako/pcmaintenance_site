import React from "react";
import SecTitle from "./SecTitle";
import styles from "./Starter.module.css";
import Image from "next/image";

export default function Starter() {
  return (
    <div>
      <SecTitle title="初めての方へ" />
      <h2 className={styles.h2}>修理・相談の方法は３通り</h2>
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
      <div className={styles.wrapper}>
        <h3>持ち込み修理</h3>
        <div>
          <div className={styles.col}>
            <ul className={styles.col_item}>
              <li>自分の都合を最優先したい方</li>
              <li>修理費用を抑えたい方</li>
              <li>パソコン修理の専門家の意見を聞きたい方</li>
              <li>急いで修理してほしい方</li>
            </ul>
            <ul>
              <li>相談だけでもOK</li>
              <li>予約不要</li>
              <li>飛込み来店歓迎</li>
              <li>
                パソコン修理の専門家に直接相談することができます。
                経験豊かな専門家がコストパフォーマンスに
                優れた最適なアドバイスをいたします。
                修理依頼は専門家の意見とお見積りを見てから判断してください！
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h3>宅配修理</h3>
        <div>
          <div className={styles.col}>
            <ul className={styles.col_item}>
              <li>店舗へ持込できない方</li>
              <li>お近くにパソコン修理店がない方</li>
              <li>店舗の営業時間内に間に合わない方</li>
            </ul>
            <ul>
              <li>時間を節約することができ、とても楽チンです！</li>
              <li>
                クロネコヤマトの「パソコン宅急便」を利用することで、安全に運搬することができます！
              </li>
              <li>
                用意不要！クロネコヤマトが宅配専用の段ボールを持参してくれます！
                ※段ボールは別途費用がかかります
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h3>出張引き取り</h3>
        <div>
          <div className={styles.col}>
            <ul className={styles.col_item}>
              <li>事情があり、パソコンを持ち出せない方</li>
              <li>接続されたケーブル類の外し方がわからない方</li>
              <li>複数台のパソコンがある法人事業者</li>
            </ul>
            <ul>
              <li>
                お客様の指定された場所へ伺うので、時間を節約することができます
              </li>
              <li>
                従量課金制のため、複数台のトラブルでも費用を気にしなくて良い。
              </li>
              <li>家で待ってるだけなので簡単、便利、楽々！</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
