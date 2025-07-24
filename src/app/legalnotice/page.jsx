import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/legalnotice/LegalNotice.module.css";

export default function LegalNotice() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>特定商取引法に基づく表記</h1>

        <section className={styles.section}>
          <h2>販売業者名</h2>
          <p>〇〇パソコン修理サービス</p>
        </section>

        <section className={styles.section}>
          <h2>運営責任者</h2>
          <p>山田 太郎</p>
        </section>

        <section className={styles.section}>
          <h2>所在地</h2>
          <p>〒123-4567 東京都〇〇区〇〇1-2-3</p>
        </section>

        <section className={styles.section}>
          <h2>電話番号</h2>
          <p>090-1234-5678（営業のお電話はご遠慮ください）</p>
        </section>

        <section className={styles.section}>
          <h2>メールアドレス</h2>
          <p>info@example.com</p>
        </section>

        <section className={styles.section}>
          <h2>サービス提供価格</h2>
          <p>修理内容に応じた料金をお見積もりの上、事前にご案内いたします。</p>
        </section>

        <section className={styles.section}>
          <h2>商品代金以外の必要料金</h2>
          <p>部品代、出張費（該当する場合）など。</p>
        </section>

        <section className={styles.section}>
          <h2>お支払い方法</h2>
          <p>現金またはクレジットカード（対面決済のみ対応）</p>
        </section>

        <section className={styles.section}>
          <h2>お支払い時期</h2>
          <p>作業完了後、対面でのお支払いをお願いいたします。</p>
        </section>

        <section className={styles.section}>
          <h2>キャンセル・返金</h2>
          <p>
            ご依頼後のキャンセルについては、作業の進行状況に応じて実費をご請求させていただく場合があります。作業完了後の返金には応じかねますのでご了承ください。
          </p>
        </section>

        <section className={styles.section}>
          <h2>対応地域</h2>
          <p>東京都〇〇区および周辺地域（詳細はお問い合わせください）</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
