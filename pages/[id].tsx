import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Profile() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BLACKLINK - The #1 Digital Business Card</title>
        <meta
          name="description"
          content="Tap your BLACKLINK digital business card to someone’s phone to instantly share and capture leads - no app needed. Easy contact sharing, lead generation & CRM integrations and more. Seamless team management."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
