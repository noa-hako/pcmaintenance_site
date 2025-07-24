import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/privacypolicy/PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>プライバシーポリシー</h1>

        <section className={styles.section}>
          <p>
            〇〇パソコン修理サービス（以下「当社」といいます）は、お客様の個人情報を適切に保護し、安心してご利用いただけるサービスの提供に努めます。
          </p>
        </section>

        <section className={styles.section}>
          <h2>1. 個人情報の取得について</h2>
          <p>
            当社は、お問い合わせ、修理依頼、見積もりなどの際に、お客様の個人情報を取得することがあります。
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. 取得する情報の種類</h2>
          <ol>
            <li>氏名</li>
            <li>住所</li>
            <li>電話番号</li>
            <li>メールアドレス</li>
            <li>修理対象機器の情報およびそのデータ（必要な範囲で）</li>
            <li>IPアドレス、ブラウザ情報、Cookieなどのアクセス情報</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>3. 利用目的</h2>
          <ol>
            <li>修理・サポート業務の遂行</li>
            <li>お問い合わせ対応</li>
            <li>見積もりや進捗状況のご連絡</li>
            <li>サービス改善のための分析</li>
            <li>法令に基づく対応</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>4. 第三者提供について</h2>
          <p>当社は、以下の場合を除き、個人情報を第三者に提供いたしません。</p>
          <ol>
            <li>お客様の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>業務委託先への提供（配送、会計処理等）</li>
            <li>人の生命や財産保護のために必要であり、同意が困難な場合</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>5. 安全管理措置</h2>
          <p>
            個人情報の漏洩・紛失・不正アクセスなどを防止するため、社内規定やセキュリティ対策を実施しております。
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. お客様の権利</h2>
          <p>
            お客様はご自身の個人情報について、開示・訂正・削除・利用停止などを請求する権利があります。ご希望の際は下記の連絡先までご連絡ください。
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Cookieの利用について</h2>
          <p>
            当サイトでは利便性向上やアクセス解析のためにCookieを使用することがあります。Cookieの利用を望まない場合は、ブラウザ設定から無効にできます。
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. プライバシーポリシーの変更</h2>
          <p>
            本ポリシーの内容は、必要に応じて変更されることがあります。変更後は当ウェブサイト上に掲載した時点で効力を持つものとします。
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. お問い合わせ窓口</h2>
          <p>
            個人情報の取り扱いに関するご質問・ご相談は、以下までご連絡ください。
          </p>
          <div className="mt-2">
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
