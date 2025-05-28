import styles from "./page.module.css";
import Header from "./components/Header";
import First_view from "./components/First_view";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <First_view />
      <Main />
      <Footer />
    </div>
  );
}
