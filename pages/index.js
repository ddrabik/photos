import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | David Drabik Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul className={styles.photoList}>
          <li className={styles.photoItem}>
            <img src="" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img src="" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img src="" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img src="" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img src="" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img src="" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img src="" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img src="" alt="" />
          </li>
          <li className={styles.photoItem}></li>
        </ul>
      </main>
    </div>
  );
}
