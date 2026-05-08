import React from "react";
import styles from "./PriceDetail.module.css";
import Link from "next/link";
import { Purple_Purse } from "next/font/google";

export default function PriceDetail() {
  const sections = [
    {
      title: "ソフトウェア関連",
      items: [
        {
          name: "OS再インストール",
          time: "作業時間: 2-3時間",
          price: "8,800円",
        },
        {
          name: "ウイルス駆除",
          time: "作業時間: 1-2時間",
          price: "6,600円",
        },
        {
          name: "システム最適化",
          time: "作業時間: 1時間",
          price: "5,500円",
        },
        {
          name: "ドライバー更新",
          time: "作業時間: 30分",
          price: "3,300円",
        },
        {
          name: "ソフトウェアインストール",
          time: "作業時間: 30分",
          price: "2,200円",
        },
      ],
    },
    {
      title: "ハードウェア関連",
      items: [
        {
          name: "HDD/SSD交換",
          time: "作業時間: 2-3時間",
          price: "11,000円～",
        },
        {
          name: "メモリ増設",
          time: "作業時間: 30分",
          price: "3,300円～",
        },
        {
          name: "液晶画面修理",
          time: "作業時間: 3-4時間",
          price: "22,000円～",
        },
        {
          name: "キーボード交換",
          time: "作業時間: 1-2時間",
          price: "8,800円～",
        },
        {
          name: "バッテリー交換",
          time: "作業時間: 1時間",
          price: "13,200円～",
        },
      ],
    },
    {
      title: "データ関連",
      items: [
        {
          name: "データ復旧（軽度）",
          time: "作業時間: 2-4時間",
          price: "16,500円～",
        },
        {
          name: "データ復旧（重度）",
          time: "作業時間: 1-3日",
          price: "33,000円～",
        },
        {
          name: "データ移行",
          time: "作業時間: 1-2時間",
          price: "2,200円～",
        },
        {
          name: "データバックアップ",
          time: "作業時間: 1時間",
          price: "3,300円",
        },
        {
          name: "ファイル復元",
          time: "作業時間:1-2時間",
          price: "5,500円～",
        },
      ],
    },
    {
      title: "その他のサービス",
      items: [
        {
          name: "出張診断",
          time: "作業時間: 30分",
          price: "3,300円",
        },
        {
          name: "緊急対応（当日）",
          time: "作業時間: -",
          price: "+5,500円",
        },
        {
          name: "使い方講習",
          time: "作業時間: 1時間",
          price: "3,300円",
        },
        {
          name: "定期メンテナンス",
          time: "作業時間: 1時間",
          price: "4,400円",
        },
        {
          name: "セキュリティ設定",
          time: "作業時間: 1-2時間",
          price: "6,600円",
        },
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h2 className={styles.mainTitle}>詳細料金表</h2>
        <p className={styles.subTitle}>
          各サービスの詳細金と作業時間の目安
          <br />
          詳しくは
          <Link href="/pricing" className={styles.Purple_Purse}>
            こちら
          </Link>
        </p>
      </div>

      <div className={styles.sectionsContainer}>
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className={styles.section}>
            <div className={styles.sectionHeader}>{section.title}</div>
            <div className={styles.sectionContent}>
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className={styles.priceRow}>
                  <div className={styles.priceLeft}>
                    <div className={styles.serviceName}>{item.name}</div>
                    <div className={styles.workTime}>{item.time}</div>
                  </div>
                  <div className={styles.priceRight}>
                    <div className={styles.price}>{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
