import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import SecTitle from "../components/SecTitle";
import styles from "../components/Section.module.css";

export default function RepairCases() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SecTitle title="修理事例" />
        <Image src="/repair/001.jpg" alt="修理事例1" width={400} height={600} />
        <p>
          ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
        </p>
        <Image src="/repair/002.jpg" alt="修理事例1" width={400} height={600} />
        <p>
          ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
        </p>

        <Image src="/repair/003.jpg" alt="修理事例1" width={400} height={600} />
        <p>
          ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
        </p>

        <Image src="/repair/004.jpg" alt="修理事例1" width={400} height={600} />
        <p>
          ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
        </p>

        <Image src="/repair/005.jpg" alt="修理事例1" width={400} height={600} />
        <p>
          ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
        </p>

        <Image src="/repair/006.jpg" alt="修理事例1" width={400} height={600} />
        <p>
          ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
        </p>

        <Image src="/repair/007.jpg" alt="修理事例1" width={400} height={600} />
        <p>
          ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
        </p>

        <Image src="/repair/008.jpg" alt="修理事例1" width={400} height={600} />
        <p>
          ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
        </p>
      </div>
      <Footer />
    </div>
  );
}
