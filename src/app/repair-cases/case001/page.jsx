import React from "react";
import styles from "../../components/Section.module.css";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SecTitle from "../../components/SecTitle";

export default function case001() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SecTitle title="acerパソコンの液晶モニターを交換修理" />
        <div className={styles.cases_info}>
          <span className={styles.cases_syoujo}>症状</span>
          <p>acer Aspire 3 A315-59-H76Y/F 画面割れ</p>
        </div>
        <div>
          <Image
            src="/repair/001.jpg"
            alt="修理事例1"
            width={700}
            height={0}
            className={styles.cases_picture}
          />
          <p className={styles.cases_text}>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>
          <Image
            src="/repair/002.jpg"
            alt="修理事例2"
            width={700}
            height={0}
            className={styles.cases_picture}
          />
          <p className={styles.cases_text}>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>

          <Image
            src="/repair/003.jpg"
            alt="修理事例3"
            width={700}
            height={0}
            className={styles.cases_picture}
          />
          <p className={styles.cases_text}>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>

          <Image
            src="/repair/004.jpg"
            alt="修理事例4"
            width={700}
            height={0}
            className={styles.cases_picture}
          />
          <p className={styles.cases_text}>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>

          <Image
            src="/repair/005.jpg"
            alt="修理事例5"
            width={700}
            height={0}
            className={styles.cases_picture}
          />
          <p className={styles.cases_text}>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>

          <Image
            src="/repair/006.jpg"
            alt="修理事例6"
            width={700}
            height={0}
            className={styles.cases_picture}
          />
          <p className={styles.cases_text}>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>

          <Image
            src="/repair/007.jpg"
            alt="修理事例7"
            width={700}
            height={0}
            className={styles.cases_picture}
          />
          <p className={styles.cases_text}>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>

          <Image
            src="/repair/008.jpg"
            alt="修理事例8"
            width={700}
            height={0}
            className={styles.cases_picture}
          />
          <p className={styles.cases_text}>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>
          <Image
            src="/repair/009.jpg"
            alt="修理事例9"
            width={700}
            height={0}
            className={styles.cases_picture}
          />
          <p className={styles.cases_text}>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
