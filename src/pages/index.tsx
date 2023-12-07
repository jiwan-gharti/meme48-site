"use client";
import Head from "next/head";
import Main from "@/layouts/Main";
import Home from "@/views/Home";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Meem - 48</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main home={true}>
        <Home />
      </Main>
    </>
  );
};

export default HomePage;
