import styles from "@/assets/styles/main-page/page.module.css";
import ImageSlideshow from "@/components/images/ImageSlideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Next Foodies For Foodies</h1>
            <p>Taste and share food from all over the world</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            Next Foodies Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Next Foodies Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Why Next Foodies Food?</h2>
          <p>
            Next Foodies Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Next Foodies Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
