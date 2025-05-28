import React from "react";
import Image from "next/image";
import styles from "./First_view.module.css";

export default function First_view() {
  return (
    <div className={styles.fv}>
      <Image
        src="/pc_photo.jpg"
        alt="ファーストビュー"
        width={1100}
        height={600}
      />
    </div>
  );
}
