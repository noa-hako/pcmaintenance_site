import React from "react";
import styles from "./PriceHeader.module.css";

export default function PriceHeader(props) {
  return (
    <div>
      <h3
        className={styles.header}
        style={
          props.backgroundColor
            ? { backgroundColor: props.backgroundColor }
            : {}
        }
      >
        {props.priceTitle}
      </h3>
    </div>
  );
}
