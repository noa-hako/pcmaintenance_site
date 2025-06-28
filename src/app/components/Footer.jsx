import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="https://x.com/" target="_blank">
        Twitter
      </Link>
      <Link href="https://www.youtube.com/" target="_blank">
        YouTube
      </Link>
      <Link href="https://www.instagram.com/" target="_blank">
        Instagram
      </Link>
      <div className="flex gap-4">
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <ul className={styles.footerList}>
        <li>
          <Link href="/about">会社概要</Link>
        </li>
        <li>
          <Link href="/contact">お問い合わせ</Link>
        </li>
        <li>
          <Link href="/faq">よくある質問</Link>
        </li>
        <li>
          <Link href="/terms">利用規約</Link>
        </li>
        <li>
          <Link href="/privacy">プライバシーポリシー</Link>
        </li>
        <li>
          <Link href="/legal">特定商取引法に基づく表記</Link>
        </li>
        <li>
          <Link href="/sitemap">サイトマップ</Link>
        </li>
      </ul>
      <br />
      <br />
      <small>©2025 Repico</small>
    </div>
  );
}
