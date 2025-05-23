import React from "react";
import Image from "next/image";
import styles from "./Fview.module.css";

export default function Fview() {
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
