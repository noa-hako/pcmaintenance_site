import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SecTitle from "../components/SecTitle";
import styles from "../components/Section.module.css";
import RepairCasesList from "../components/repair_cases/RepairCasesList";

export default function RepairCases() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SecTitle title="修理事例" />
        <RepairCasesList />
      </div>

      <Footer />
    </div>
  );
}
