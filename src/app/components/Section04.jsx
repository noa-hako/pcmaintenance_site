import React from "react";
import SecTitle from "./SecTitle";
import styles from "./Section.module.css";

export default function Section04() {
  return (
    <div className={styles.wrapper}>
      <SecTitle title="修理料金一覧" />
      <div>
        <table className={styles.priceTable}>
          <tbody>
            <tr>
              <td className={styles.menu}>診断</td>
              <td className={styles.price_en}>500円</td>
              <td className={styles.summary}>
                不具合の現象を確認し、おおよその原因を診断します。
              </td>
            </tr>
            <tr>
              <td>簡易分解</td>
              <td>2,200円</td>
              <td>簡単な分解と交換作業を行います。</td>
            </tr>
            <tr>
              <td>液晶修理全般</td>
              <td>8,800円～</td>
              <td>
                ノートPC・一体型パソコンの液晶パネル、LCDケーブルの交換、ヒンジの補強を行います。
                <br />
                ※交換部品代別途
              </td>
            </tr>
            <tr>
              <td>マザーボード修理</td>
              <td>6,600円～</td>
              <td>マザーボード上のICチップやコンデンサ交換など。</td>
            </tr>
            <tr>
              <td>ハードディスク交換</td>
              <td>10,000円〜</td>
              <td>
                ハードディスク交換
                <br />
                OS初期化（リカバリー）・リフレッシュパック・データの引っ越し・バックアップ
                ※交換部品代別途
              </td>
            </tr>
            <tr>
              <td>メモリ増設</td>
              <td>5,000円〜</td>
              <td>
                メモリ増設
                <br />
                ※パソコンの状態によっては増設できない場合があります。※交換部品代別途
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
