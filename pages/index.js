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
            <img className={styles.img} src="images/artichoke.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/coyote.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/dragonfly.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/flower.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/flower2.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/hawaii.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/ive.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/joshua_tree.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/lightning.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/mocha.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/rooster.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/tenaya lake.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/bee.jpg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/elk.jpg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/gecko_leaf.jpg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/krakov.jpeg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/gecko_peeking.jpg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/ocean.jpg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img className={styles.img} src="images/woodpecker.jpg" alt="" />
          </li>
          <li className={styles.photoItem}>
            <img
              className={styles.img}
              src="images/western_tanager.jpeg"
              alt=""
            />
          </li>
          <li className={styles.photoItem}></li>
        </ul>
      </main>
    </div>
  );
}
