import React from "react";
import Link from "next/link";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <section className={styles.contactFormSection}>
      <div className={styles.formContainer}>
        <div className={styles.backLinkWrapper}>
          <Link href="/" className={styles.backLink}>
            ← ホームへ戻る
          </Link>
        </div>
        <h2 className={styles.formTitle}>修理・メンテナンスお申し込み</h2>
        <p className={styles.formDescription}>
          以下のフォームに必要事項をご記入の上、送信してください。
          <br />
          担当者より24時間以内に折り返しご連絡いたします。
        </p>

        <form className={styles.form} action="#" method="post">
          {/* セクション1：お客様情報 */}
          <fieldset className={styles.formSection}>
            <legend className={styles.legend}>お客様情報</legend>

            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.labelText}>
                お名前 <span className={styles.requiredBadge}>必須</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.inputField}
                placeholder="山田 太郎"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="kana" className={styles.labelText}>
                フリガナ <span className={styles.requiredBadge}>必須</span>
              </label>
              <input
                type="text"
                id="kana"
                name="kana"
                className={styles.inputField}
                placeholder="ヤマダ タロウ"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.labelText}>
                メールアドレス{" "}
                <span className={styles.requiredBadge}>必須</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.inputField}
                placeholder="example@mail.com"
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formRowItem}>
                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.labelText}>
                    会社名{" "}
                    <span className={styles.optionalBadge}>
                      お届け先が会社の場合
                    </span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className={styles.inputField}
                    placeholder="株式会社〇〇"
                  />
                </div>
              </div>
              <div className={styles.formRowItem}>
                <div className={styles.formGroup}>
                  <label htmlFor="department" className={styles.labelText}>
                    所属部署{" "}
                    <span className={styles.optionalBadge}>
                      お届け先が会社の場合
                    </span>
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className={styles.inputField}
                    placeholder="IT事業部"
                  />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="zip" className={styles.labelText}>
                郵便番号 <span className={styles.requiredBadge}>必須</span>
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                className={styles.inputField}
                placeholder="123-4567"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="address" className={styles.labelText}>
                住所 <span className={styles.requiredBadge}>必須</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className={styles.inputField}
                placeholder="東京都〇〇区〇〇 1-2-3 〇〇ビル 101"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="tel" className={styles.labelText}>
                電話番号 <span className={styles.requiredBadge}>必須</span>
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                className={styles.inputField}
                placeholder="090-0000-0000"
                required
              />
            </div>
          </fieldset>

          {/* セクション2：パソコンの詳細 */}
          <fieldset className={styles.formSection}>
            <legend className={styles.legend}>パソコンの詳細</legend>

            <div className={styles.formGroup}>
              <label htmlFor="pc-spec" className={styles.labelText}>
                パソコンのメーカー・型番・CPU型番
              </label>
              <input
                type="text"
                id="pc-spec"
                name="pc-spec"
                className={styles.inputField}
                placeholder="例：DELL Inspiron 15 (Core i7)"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labelText}>
                パソコンの形状{" "}
                <span className={styles.requiredBadge}>必須</span>
              </label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="pc-type"
                    value="ノートパソコン"
                    required
                  />
                  ノートパソコン
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="pc-type"
                    value="デスクトップパソコン"
                  />
                  デスクトップパソコン
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="pc-type" value="その他" />
                  その他
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="os" className={styles.labelText}>
                現在のOSの種類
              </label>
              <input
                type="text"
                id="os"
                name="os"
                className={styles.inputField}
                placeholder="例：Windows 11, macOS Sonoma"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labelText}>
                データの要・不要{" "}
                <span className={styles.requiredBadge}>必須</span>
              </label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="data-needs"
                    value="全て必要"
                    required
                  />
                  全て必要
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="data-needs"
                    value="データのみ必要"
                  />
                  データのみ必要
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="data-needs"
                    value="環境も残したい"
                  />
                  環境も残したい
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="data-needs" value="不要" />
                  不要
                </label>
              </div>
            </div>
          </fieldset>

          {/* セクション3：症状 */}
          <fieldset className={styles.formSection}>
            <legend className={styles.legend}>症状・お困りごと</legend>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.labelText}>
                不具合の状況・発生頻度など{" "}
                <span className={styles.requiredBadge}>必須</span>
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textArea}
                placeholder="例：電源を入れても画面が真っ暗なまま。週に2〜3回発生する。"
                required
              />
            </div>
          </fieldset>

          <div className={styles.formSubmit}>
            <button type="submit" className={styles.submitBtn}>
              この内容でお申し込みを確定する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
