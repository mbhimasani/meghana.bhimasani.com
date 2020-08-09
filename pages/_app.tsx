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
        content="I am a software engineer with a background in healthcare and UX and special interests in
        machine learning, interactive intelligence, and data-driven decision making currently working at the WUSTL Neurophotonics Lab."
        key="description"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/fav_logo.png" />
    </Head>
    {/* <div className="layout"> */}
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    {/* </div> */}
  </>
);

export default MeghanaBhimasani;
