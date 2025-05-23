import styles from "./page.module.css";
import Header from "./components/Header";
import Fview from "./components/Fview";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Fview />
      <Main />
    </div>
  );
}
