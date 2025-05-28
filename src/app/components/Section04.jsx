import React from "react";
import SecTitle from "./SecTitle";
import styles from "./Section.module.css";

export default function Section03() {
  return (
    <div className={styles.wrapper}>
      <SecTitle title="修理料金一覧" />
      <div>
        <h2>パソコン修理料金</h2>
        <table className={styles.priceTable}>
          <thead>
            <tr>
              <th>修理内容</th>
              <th>料金</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>液晶パネル交換</td>
              <td>15,000円〜</td>
            </tr>
            <tr>
              <td>キーボード交換</td>
              <td>8,000円〜</td>
            </tr>
            <tr>
              <td>ハードディスク交換</td>
              <td>10,000円〜</td>
            </tr>
            <tr>
              <td>メモリ増設</td>
              <td>5,000円〜</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
