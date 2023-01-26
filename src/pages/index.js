import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Backup } from "@/components/Backup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MongoDB Toolkit</title>
        <meta
          name="description"
          content="MongoDB shell command creator for daily MongoDB management tasks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`grid place-items-center bg-slate-200 w-full ${styles.h100vh} ${styles.inter}`}
      >
        <Backup />
        <code>
          <a href="https://github.com/mrtcntn" target="_blank" rel="noreferrer">
            Mert Canatan
          </a>
        </code>
      </main>
    </>
  );
}
