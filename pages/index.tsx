import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../animations/page";
import Anchor from "../components/anchor";

const Home: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h2 className="begin-section pt-0">I'm Meghana Bhimasani</h2>
    <div className="lead end-section">
      I am a software engineer with a background in healthcare and UX and special interests in
      machine learning, interactive intelligence, and data-driven decision making currently working
      <Anchor content="@NeurophotonicsLab" href="https://sites.wustl.edu/eggebrechtlab/" spaceBefore />.
    </div>

  </motion.main>
);

export default Home;
