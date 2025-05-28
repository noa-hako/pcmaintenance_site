import React from "react";
import styles from "./Section.module.css";
import SecTitle from "./SecTitle";

export default function Section01() {
  return (
    <div className={styles.wrapper}>
      <SecTitle title="こんなお悩み解決できます！" />
      <div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h3 className={styles.h3}>パソコンが起動しない</h3>
            <p className={styles.para}>
              電源ボタンを押してもなにも反応がない。バッテリーや基盤の損傷の可能性があります。パソコンを分解し原因の特定を行い、必要な部品の交換や修理を行います。
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.h3}>画面が映らない</h3>
            <p className={styles.para}>
              電源を入れても画面が真っ暗なまま、またはエラーメッセージが表示されるなど、パソコンが起動しない場合のトラブルシューティングを行います。
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.h3}>液晶パネルが割れた</h3>
            <p className={styles.para}>
              液晶が割れて画面に線が入る。ひび割れや液晶漏れなどの問題を解決するため、液晶パネルの交換を行います。
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.h3}>データ復旧</h3>
            <p className={styles.para}>
              誤ってファイルを削除してしまったり、ハードディスクが故障した場合でも、データ復旧の専門技術で大切なデータを取り戻します。
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.h3}>パソコンの動作が遅い</h3>
            <p className={styles.para}>
              パソコンの動作が遅くなった場合、不要なファイルやアプリケーションの整理、メモリの増設などを行い、快適な動作環境を提供します。
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.h3}>周辺機器の接続トラブル</h3>
            <p className={styles.para}>
              プリンターやスキャナーなどの周辺機器が正常に接続できない場合、設定やドライバーのインストールを行います。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
