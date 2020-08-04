import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/styles.scss";


const MeghanaBhimasani: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Meghana Bhimasani</title>
      <meta
        property="description"
        content="I am a product designer & software engineer with special interests in UX, growth hacking, and business strategy currently working at BitPay"
        key="description"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <div className="layout">
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  </>
);

export default MeghanaBhimasani;
