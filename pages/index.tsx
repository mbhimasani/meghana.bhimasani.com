import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../animations/page";

const Home: React.FC = () => (
  <motion.main className="body"> 
    <div className="lead begin-section"> 
      Hi, I’m Meghana Bhimasani - a software engineer at a <a href="https://sites.wustl.edu/eggebrechtlab/">Neurophotonics Lab</a> at 
      Washington University in St. Louis with a special interest in data-driven decision making in healthcare. Previously 
      worked as a UX Designer at <a href="https://www.appsketiers.com/">Appsketiers</a> in Atlanta. 
      Currently obtaining my Masters in Computer Science at Georgia Tech, specializing in Machine Learning and Interactive Intelligence.
    </div>
    <div className="lead end-section">
      I love camping , practicing yoga, and playing Breath of the Wild. Frequent lurker on r/CozyPlaces.   
    </div>
    {/* className="body" {...fadeInPage}> */}
  </motion.main>
);

export default Home;
