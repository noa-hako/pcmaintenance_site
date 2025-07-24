import React from "react";
import SecTitle from "./SecTitle";
import styles from "./Section.module.css";
import PriceHeader from "./price/PriceHeader";

export default function Section04() {
  return (
    <div className={styles.wrapper}>
      <SecTitle title="修理料金一覧" />
      <div className={styles.priceSection}>
        <PriceHeader priceTitle="診断見積もり" />
        <table className={styles.priceTable}>
          <tbody>
            <tr>
              <td className={styles.menu}>追加検査費</td>
              <td className={styles.price_en}>2,200円</td>
              <td className={styles.summary}>
                特殊な故障状況・複合要因・部品の著しい破損により、追加検査費が必要になる場合があります。
              </td>
            </tr>
            <tr>
              <td>水没診断</td>
              <td>5,500円</td>
              <td>
                本体を分解して内部の状況を確認、修理可否・修理後のリスクなどを診断します。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.priceSection}>
        <PriceHeader priceTitle="ハードウェア修理及び各種パーツ交換" />
        <table className={styles.priceTable}>
          <tbody>
            <tr>
              <td className={styles.menu}>本体簡易分解</td>
              <td className={styles.price_en}>2,200円</td>
              <td className={styles.summary}>
                その場で即可能なレベルの分解や交換作業。
              </td>
            </tr>
            <tr>
              <td>本体分解</td>
              <td>5,500円</td>
              <td>パソコン内部の目視可能レベルの分解や交換が必要な作業。</td>
            </tr>
            <tr>
              <td>本体詳細分解</td>
              <td>9,900円</td>
              <td>
                電源ユニットやメイン基板脱着の作業、分解が困難な機種の作業。
              </td>
            </tr>
            <tr>
              <td>特殊技術修理</td>
              <td>6,600円～</td>
              <td>はんだ付け作業やルーペなどが必要な緻密なパーツ交換など。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.priceSection}>
        <PriceHeader priceTitle="ソフトウェア関連" />
        <table className={styles.priceTable}>
          <tbody>
            <tr>
              <td className={styles.menu}>OSリカバリ</td>
              <td className={styles.price_en}>4,400円</td>
              <td className={styles.summary}>
                パソコンを工場出荷状態に戻します。
              </td>
            </tr>
            <tr>
              <td>OS修復</td>
              <td>13,200円～</td>
              <td>パソコンを初期化せず、可能な限り修復し動作可能にします。</td>
            </tr>
            <tr>
              <td>マルウェア駆除</td>
              <td>8,800円～</td>
              <td>ウィルスやスパイウェアを駆除します。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.priceSection}>
        <PriceHeader priceTitle="データ復旧料金" />
        <table className={styles.priceTable}>
          <tbody>
            <tr>
              <td className={styles.menu}>データバックアップ</td>
              <td className={styles.price_en}>8,800円</td>
              <td className={styles.summary}>
                ※HDDの正常動作を前提としています。
              </td>
            </tr>
            <tr>
              <td>データリストア</td>
              <td>4,400円～</td>
              <td>アプリケーション別のリストアは別途料金がかかります。</td>
            </tr>
            <tr>
              <td>データバックアップ＆リストアセット</td>
              <td>11,000円</td>
              <td></td>
            </tr>
            <tr>
              <td>HDD イメージコピー</td>
              <td>8,800円</td>
              <td>※HDDの正常動作を前提としています。</td>
            </tr>
            <tr>
              <td>
                HDD データ復旧
                <br />
                （軽度障害）
              </td>
              <td>29,700円～</td>
              <td></td>
            </tr>
            <tr>
              <td>
                HDD データ復旧
                <br />
                （中度障害）
              </td>
              <td>49,500円～</td>
              <td></td>
            </tr>
            <tr>
              <td>
                HDD データ復旧
                <br />
                （重度障害）
              </td>
              <td>77,000円～</td>
              <td></td>
            </tr>
            <tr>
              <td>HDD データ復旧</td>
              <td>99,000円～</td>
              <td></td>
            </tr>
            <tr>
              <td>データ消去（物理破壊含む）</td>
              <td>5,500円～</td>
              <td>※消去対象機器および消去方法により料金が異なります。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.priceSection}>
        <PriceHeader priceTitle="ソフトウェア関連" backgroundColor="#2f94c4" />
        <table className={styles.priceTable}>
          <tbody>
            <tr>
              <td className={styles.menu}>OS最新アップデート</td>
              <td className={styles.price_en}>4,400円</td>
              <td className={styles.summary}></td>
            </tr>
            <tr>
              <td>パーティションサイズ適正化</td>
              <td>5,500円</td>
              <td></td>
            </tr>
            <tr>
              <td>各種ドライバ更新</td>
              <td>4,400円</td>
              <td></td>
            </tr>
            <tr>
              <td>不要ソフトアンインストール</td>
              <td>2,200円</td>
              <td></td>
            </tr>
            <tr>
              <td>市販アプリケーションインストール</td>
              <td>2,200円</td>
              <td></td>
            </tr>
            <tr>
              <td>フリーソフトインストール</td>
              <td>1,100円～</td>
              <td></td>
            </tr>
            <tr>
              <td>BIOSアップデート</td>
              <td>6,600円～</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.priceSection}>
        <PriceHeader priceTitle="ハードウェア関連" backgroundColor="#2f94c4" />
        <table className={styles.priceTable}>
          <tbody>
            <tr>
              <td className={styles.menu}>自作パソコン組み立て</td>
              <td className={styles.price_en}>11,000円～</td>
              <td className={styles.summary}></td>
            </tr>
            <tr>
              <td>液晶修理全般</td>
              <td>5,500円～</td>
              <td>※パーツ代別</td>
            </tr>
            <tr>
              <td>マザーボード修理</td>
              <td>6,600円</td>
              <td>※パーツ代別</td>
            </tr>
            <tr>
              <td>分解・洗浄（水没修理）</td>
              <td>5,500円</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.priceSection}>
        <PriceHeader priceTitle="その他作業" backgroundColor="#2f94c4" />
        <table className={styles.priceTable}>
          <tbody>
            <tr>
              <td className={styles.menu}>内部簡易クリーニング</td>
              <td className={styles.price_en}>2,200円</td>
              <td className={styles.summary}>※分解作業と同時の場合のみ</td>
            </tr>
            <tr>
              <td>内部薬剤クリーニング</td>
              <td>5,500円～</td>
              <td>※分解作業と同時の場合のみ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.priceSection}>
        <PriceHeader priceTitle="出張修理" backgroundColor="#2f94c4" />
        <table className={styles.priceTable}>
          <tbody>
            <tr>
              <td className={styles.menu}>基本出張費</td>
              <td className={styles.price_en}>3,300円～</td>
              <td className={styles.summary}></td>
            </tr>
            <tr>
              <td>出張作業量（個人30分）</td>
              <td>3,300円</td>
              <td></td>
            </tr>
            <tr>
              <td>出張作業量（法人30分）</td>
              <td>5,500円～</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
