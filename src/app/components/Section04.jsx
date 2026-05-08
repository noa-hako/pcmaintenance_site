import React from "react";
import SecTitle from "./SecTitle";
import styles from "./Section.module.css";
import PriceHeader from "./price/PriceHeader";

export default function Section04() {
  const sections = [
    {
      title: "診断見積もり",
      items: [
        {
          name: "追加検査費",
          price: "2,200円",
          description:
            "特殊な故障状況・複合要因・部品の著しい破損により、追加検査費が必要になる場合があります。",
        },
      ],
    },
    {
      title: "ハードウェア修理及び各種パーツ交換",
      items: [
        {
          name: "本体簡易分解",
          price: "2,200円",
          description: "その場で即可能なレベルの分解や交換作業。",
        },
        {
          name: "本体分解",
          price: "5,500円",
          description: "パソコン内部の目視可能レベルの分解や交換が必要な作業。",
        },
        {
          name: "本体詳細分解",
          price: "9,900円",
          description:
            "電源ユニットやメイン基板脱着の作業、分解が困難な機種の作業。",
        },
        {
          name: "特殊技術修理",
          price: "6,600円～",
          description:
            "はんだ付け作業やルーペなどが必要な緻密なパーツ交換など。",
        },
      ],
    },
    {
      title: "ソフトウェア関連",
      items: [
        {
          name: "OSリカバリ",
          price: "4,400円",
          description: "パソコンを工場出荷状態に戻します。",
        },
        {
          name: "OS修復",
          price: "13,200円～",
          description:
            "パソコンを初期化せず、可能な限り修復し動作可能にします。",
        },
        {
          name: "マルウェア駆除",
          price: "8,800円～",
          description: "ウィルスやスパイウェアを駆除します。",
        },
      ],
    },
    {
      title: "データ復旧料金",
      items: [
        {
          name: "データバックアップ",
          price: "8,800円",
          description: "※HDDの正常動作を前提としています。",
        },
        {
          name: "データリストア",
          price: "4,400円～",
          description: "アプリケーション別のリストアは別途料金がかかります。",
        },
        {
          name: "データバックアップ＆リストアセット",
          price: "11,000円",
          description: "",
        },
        {
          name: "HDD イメージコピー",
          price: "8,800円",
          description: "※HDDの正常動作を前提としています。",
        },
        {
          name: "HDD データ復旧（軽度障害）",
          price: "29,700円～",
          description: "HDDからデータを復旧します。",
        },
        {
          name: "HDD データ復旧（中度障害）",
          price: "49,500円～",
          description: "HDDからデータを復旧します。",
        },
        {
          name: "HDD データ復旧（重度障害）",
          price: "77,000円～",
          description: "HDDからデータを復旧します。",
        },
        {
          name: "HDD データ復旧",
          price: "99,000円～",
          description: "HDDからデータを復旧します。",
        },
        {
          name: "データ消去（物理破壊含む）",
          price: "5,500円～",
          description: "※消去対象機器および消去方法により料金が異なります。",
        },
      ],
    },
    {
      title: "ソフトウェア関連",
      items: [
        {
          name: "OS最新アップデート",
          price: "4,400円",
          description: "",
        },
        {
          name: "パーティションサイズ適正化",
          price: "5,500円",
          description: "",
        },
        {
          name: "各種ドライバ更新",
          price: "4,400円",
          description: "",
        },
        {
          name: "不要ソフトアンインストール",
          price: "2,200円",
          description: "",
        },
        {
          name: "市販アプリケーションインストール",
          price: "2,200円",
          description: "",
        },
        {
          name: "フリーソフトインストール",
          price: "1,100円～",
          description: "",
        },
        {
          name: "BIOSアップデート",
          price: "6,600円～",
          description: "",
        },
      ],
    },
    {
      title: "ハードウェア関連",
      items: [
        {
          name: "自作パソコン組み立て",
          price: "11,000円～",
          description: "",
        },
        {
          name: "液晶修理全般",
          price: "5,500円～",
          description: "※パーツ代別",
        },
        {
          name: "マザーボード修理",
          price: "6,600円",
          description: "※パーツ代別",
        },
        {
          name: "分解・洗浄（水没修理）",
          price: "5,500円",
          description: "",
        },
      ],
    },
    {
      title: "その他作業",
      items: [
        {
          name: "内部簡易クリーニング",
          price: "2,200円",
          description: "※分解作業と同時の場合のみ",
        },
        {
          name: "内部薬剤クリーニング",
          price: "5,500円～",
          description: "※分解作業と同時の場合のみ",
        },
      ],
    },
    {
      title: "出張修理",
      items: [
        {
          name: "基本出張費",
          price: "3,300円～",
          description: "",
        },
        {
          name: "追加出張費",
          price: "1,100円～",
          description: "",
        },
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <SecTitle title="修理料金一覧" />

      <div className={styles.priceSection}>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <PriceHeader priceTitle={section.title} />
            <table className={styles.priceTable}>
              <tbody>
                {section.items.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td className={styles.menu}>{item.name}</td>
                    <td className={styles.price_en}>{item.price}</td>
                    <td className={styles.summary}>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
