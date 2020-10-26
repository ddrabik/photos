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
            <picture>
              <source type="image/webp" srcSet="images/artichoke.webp" />
              <source type="image/jpeg" srcSet="images/artichoke.jpeg" />
              <img className={styles.img} src="images/artichoke.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/coyote.webp" />
              <source type="image/jpeg" srcSet="images/coyote.jpeg" />
              <img className={styles.img} src="images/coyote.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/dragonfly.webp" />
              <source type="image/jpeg" srcSet="images/dragonfly.jpeg" />
              <img className={styles.img} src="images/dragonfly.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/flower.webp" />
              <source type="image/jpeg" srcSet="images/flower.jpeg" />
              <img className={styles.img} src="images/flower.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/flower2.webp" />
              <source type="image/jpeg" srcSet="images/flower2.jpeg" />
              <img className={styles.img} src="images/flower2.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/hawaii.webp" />
              <source type="image/jpeg" srcSet="images/hawaii.jpeg" />
              <img className={styles.img} src="images/hawaii.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/ive.webp" />
              <source type="image/jpeg" srcSet="images/ive.jpeg" />
              <img className={styles.img} src="images/ive.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/joshua_tree.webp" />
              <source type="image/jpeg" srcSet="images/joshua_tree.jpeg" />
              <img
                className={styles.img}
                src="images/joshua_tree.jpeg"
                alt=""
              />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/lightning.webp" />
              <source type="image/jpeg" srcSet="images/lightning.jpeg" />
              <img className={styles.img} src="images/lightning.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/mocha.webp" />
              <source type="image/jpeg" srcSet="images/mocha.jpeg" />
              <img className={styles.img} src="images/mocha.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/rooster.webp" />
              <source type="image/jpeg" srcSet="images/rooster.jpeg" />
              <img className={styles.img} src="images/rooster.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/tenaya_lake.webp" />
              <source type="image/jpeg" srcSet="images/tenaya_lake.jpeg" />
              <img className={styles.img} src="images/tenaya_lake.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/bee.webp" />
              <source type="image/jpeg" srcSet="images/bee.jpg" />
              <img className={styles.img} src="images/bee.jpg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/elk.webp" />
              <source type="image/jpeg" srcSet="images/elk.jpg" />
              <img className={styles.img} src="images/elk.jpg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/gecko_leaf.webp" />
              <source type="image/jpeg" srcSet="images/gecko_leaf.jpg" />
              <img className={styles.img} src="images/gecko_leaf.jpg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/krakov.webp" />
              <source type="image/jpeg" srcSet="images/krakov.jpeg" />
              <img className={styles.img} src="images/krakov.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="gecko_peeking.webp" />
              <source type="image/jpeg" srcSet="gecko_peeking.jpg" />
              <img
                className={styles.img}
                src="images/gecko_peeking.jpg"
                alt=""
              />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/ocean.webp" />
              <source type="image/jpeg" srcSet="images/ocean.jpg" />
              <img className={styles.img} src="images/ocean.jpg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/woodpecker.webp" />
              <source type="image/jpeg" srcSet="images/woodpecker.jpg" />
              <img className={styles.img} src="images/woodpecker.jpg" />
            </picture>
          </li>
          <li className={styles.photoItem}>
            <picture>
              <source type="image/webp" srcSet="images/western_tanager.webp" />
              <source type="image/jpeg" srcSet="images/western_tanager.jpeg" />
              <img className={styles.img} src="images/western_tanager.jpeg" />
            </picture>
          </li>
          <li className={styles.photoItem}></li>
        </ul>
      </main>
    </div>
  );
}
