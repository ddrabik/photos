import Head from "next/head";
import styles from "../styles/Home.module.css";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Home() {
  const images = [
    "artichoke",
    "coyote",
    "dragonfly",
    "flower",
    "flower2",
    "hawaii",
    "ive",
    "joshua_tree",
    "lightning",
    "mocha",
    "rooster",
    "tenaya_lake",
    "bee",
    "elk",
    "gecko_leaf",
    "krakov",
    "gecko_peeking",
    "ocean",
    "woodpecker",
    "western_tanager",
    "hawk",
    "ivy_pumkins",
    "jay",
    "lassen",
    "taco",
  ];

  shuffleArray(images);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | David Drabik Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul className={styles.photoList}>
          {images.map((img) => (
            <li key={img} className={styles.photoItem}>
              <picture>
                <source type="image/webp" srcSet={`images/${img}.webp`} />
                <source type="image/jpeg" srcSet={`images/${img}.jpeg`} />
                <img className={styles.img} src={`images/${img}.jpeg`} />
              </picture>
            </li>
          ))}
          <li className={styles.photoItem}></li>
        </ul>
      </main>
    </div>
  );
}
