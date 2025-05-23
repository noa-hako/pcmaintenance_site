import React from "react";
import styles from "./Sec01.module.css";

export default function Sec01() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.h2}>こんなお悩みも解決できます</h2>
      <div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h3 className={styles.h3}>パソコンが起動しない</h3>
            <p className={styles.para}>
              電源を入れても画面が真っ暗なまま、またはエラーメッセージが表示されるなど、パソコンが起動しない場合のトラブルシューティングを行います。
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.h3}>ウイルス感染</h3>
            <p className={styles.para}>
              パソコンが遅くなったり、ポップアップ広告が頻繁に表示される場合、ウイルスやマルウェアに感染している可能性があります。ウイルススキャンと駆除を行います。
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
          <li className={styles.listItem}>
            <h3 className={styles.h3}>ソフトウェアのインストール</h3>
            <p className={styles.para}>
              新しいソフトウェアのインストールや設定を行い、必要な機能を追加します。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
