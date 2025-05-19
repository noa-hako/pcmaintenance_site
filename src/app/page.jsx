import styles from "./page.module.css";
import Header from "./components/Header";
import Fview from "./components/Fview";
import Main_sec from "./components/Main_sec";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Fview />
      <Main_sec />
    </div>
  );
}
