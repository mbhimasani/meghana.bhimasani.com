import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../animations/page";

const Home: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h2 className="begin-section pt-0">I'm Ash Bhimasani</h2>
    <div className="lead end-section">
      I am a product designer & software engineer with special interests in UX,
      growth hacking, and business strategy currently working
    </div>

  </motion.main>
);

export default Home;
