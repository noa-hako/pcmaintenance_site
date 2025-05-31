import React from "react";
import SecTitle from "./SecTitle";
import styles from "./Section.module.css";

export default function Sec_map() {
  return (
    <div className={styles.wrapper}>
      <SecTitle title="アクセス" />
      <div className={styles.map_container}>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.1838964980698!2d141.02606067590827!3d38.2984068718581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f898f7db1e2da81%3A0xffffbb54417a397!2z44CSOTg1LTA4MzEg5a6u5Z-O55yM5aSa6LOA5Z-O5biC56yg56We77yT5LiB55uu77yR77yR4oiS77yU77yQ!5e0!3m2!1sja!2sjp!4v1748665383241!5m2!1sja!2sjp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.map_caption}>
          <h3>
            多賀城のパソコン修理専門店「Repico」
            <br />
            <br />
          </h3>
          <h4>店舗住所（持ち込み場所・予約制）</h4>
          <p>
            〒980-0831 宮城県仙台市青葉区一番町2丁目3-1
            <br />
            TEL: 022-123-4567
            <br />
            <span>（持ち込みの際は電話にてご予約下さい。）</span>
          </p>
          <h4>予約・修理見積もり</h4>
          <p>営業時間: 10:00〜19:00（定休日: 水曜日）</p>
        </div>
      </div>
    </div>
  );
}
