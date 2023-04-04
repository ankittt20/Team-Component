import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ojass | NIT Jamshedpur</title>
        <meta name="description" content="Technical fest of NIT Jamshedpur." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Team />
      </main>
    </>
  );
}
