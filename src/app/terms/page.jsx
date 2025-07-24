import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/terms/Terms.module.css";

export default function Terms() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>利用規約</h1>

        <section className={styles.section}>
          <p>
            本利用規約（以下「本規約」といいます）は、〇〇パソコン修理サービス（以下「当社」といいます）が提供する修理サービスおよび当ウェブサイトの利用条件を定めるものです。お客様は、本規約に同意の上、サービスをご利用いただくものとします。
          </p>
        </section>

        <section className={styles.section}>
          <h2>1. サービス内容</h2>
          <p>
            当社は、パソコン・周辺機器の修理、点検、メンテナンスおよびそれに付随する業務を行います。サービス内容は予告なく変更・中止される場合があります。
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. 禁止事項</h2>
          <ol>
            <li>虚偽の情報を提供する行為</li>
            <li>他人の権利・財産・プライバシーを侵害する行為</li>
            <li>改造・違法ソフトウェアの修理依頼</li>
            <li>当社の業務を妨害する行為</li>
            <li>法令または公序良俗に反する行為</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>3. データに関する注意</h2>
          <p>
            修理中にデータが消失または破損する可能性があります。お客様は、事前に必要なデータのバックアップを行うものとし、当社はデータに関する一切の責任を負いません。
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. 免責事項</h2>
          <p>以下の場合において、当社は一切の責任を負いません。</p>
          <ol>
            <li>修理作業によるデータの消失や機器の損傷</li>
            <li>不可抗力（自然災害、火災、停電、ウイルス感染等）による損害</li>
            <li>お客様の過失または不適切な使用による損害</li>
            <li>お客様と第三者間のトラブル</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>5. サービスの中断・終了</h2>
          <p>
            当社は、設備の保守・障害対応・天災・その他やむを得ない理由により、サービスの全部または一部を中断または終了することがあります。
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. 知的財産権</h2>
          <p>
            当ウェブサイトに掲載されている文章、画像、ロゴなどのコンテンツの著作権は当社または正当な権利を有する第三者に帰属します。無断転載・利用は禁止します。
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. 規約の変更</h2>
          <p>
            本規約は予告なく変更されることがあります。変更後の内容は、当ウェブサイトに掲載した時点で効力を持つものとします。
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. 準拠法および管轄</h2>
          <p>
            本規約は日本法に準拠します。本サービスに関して紛争が生じた場合は、当社所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. お問い合わせ</h2>
          <p>本規約に関するお問い合わせは、以下までお願いいたします。</p>
          <div>
            <p>〇〇パソコン修理サービス</p>
            <p>責任者：山田 太郎</p>
            <p>〒123-4567 東京都〇〇区〇〇1-2-3</p>
            <p>電話：090-1234-5678</p>
            <p>メール：info@example.com</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
