import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSocial}>
        <Link
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Link>
        <Link
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </Link>
        <Link
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
        <Link
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Link>
      </div>
      <ul className={styles.footerList}>
        <li>
          <Link href="/terms">利用規約</Link>
        </li>
        <li>
          <Link href="/privacy">プライバシーポリシー</Link>
        </li>
        <li>
          <Link href="/legalnotice">特定商取引法に基づく表記</Link>
        </li>
        <li>
          <Link href="/disclaimer">免責事項</Link>
        </li>
      </ul>
      <br />
      <br />
      <small>©2025 Repico</small>
    </div>
  );
}
