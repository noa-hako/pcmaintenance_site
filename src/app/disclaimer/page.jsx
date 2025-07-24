import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/disclaimer/Disclaimer.module.css";

export default function Disclaimer() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>免責事項</h1>

        <section className={styles.section}>
          <p>
            本ウェブサイトおよび当社が提供する修理サービス（以下「本サービス」といいます）をご利用いただくにあたり、以下の免責事項をご確認ください。
          </p>
        </section>

        <section className={styles.section}>
          <h2>1. 情報の正確性について</h2>
          <p>
            本サイトに掲載されている情報は、可能な限り正確であるよう努めておりますが、その正確性や完全性を保証するものではありません。掲載情報の利用によって生じた損害等について、当社は一切の責任を負いません。
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. 修理サービスに関する免責</h2>
          <p>
            修理作業中や修理後におけるデータの消失・機器の動作不良等について、当社は一切の責任を負いかねます。お客様には事前にデータのバックアップをお願いしております。
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. 外部リンクについて</h2>
          <p>
            当サイトには第三者のウェブサイトへのリンクが含まれる場合がありますが、リンク先の内容やセキュリティに関して、当社は一切の責任を負いません。
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. 技術情報・ノウハウの提供について</h2>
          <p>
            本サイト上で提供する技術情報（修理手順・トラブル解決法など）は、自己責任でご利用ください。これにより発生した損害やトラブルについて、当社は一切の責任を負いません。
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. 免責事項の変更</h2>
          <p>
            本免責事項は予告なく変更されることがあります。最新の内容は当サイト上で随時ご確認ください。
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
