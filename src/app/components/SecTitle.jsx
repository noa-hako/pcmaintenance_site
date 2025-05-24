import React from "react";
import styles from "./SecTitle.module.css";

export default function SecTitle(props) {
  return <h2 className={styles.h2}>{props.title}</h2>;
}
