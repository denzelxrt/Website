import Head from "next/head";
import { useInView } from 'react-intersection-observer';

import Navbar from "@/components/Navbar";
import Hero from "@/components/index/Hero";
import About from "@/components/index/About";
import Footer from "@/components/index/Footer";

export default function Home() {

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Head>
        <title>denzel.lol
        </title>
        <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
        <meta name="description" content="Portfolio" />
        <meta property='theme-color' content='#17171a' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="relative pattern-grid-lg min-h-screen text-primary overflow-x-hidden px-6">
        <Hero inView={inView} descRef={ref} />
        <About />
        <Footer />
      </main>
    </>
  );
}
