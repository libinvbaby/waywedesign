import React from "react";
import AboutSlider from "../components/about/AboutSlider";
import KnowAbout from "../components/about/KnowAbout";
import Breadcrumbs from "../components/Breadcrumbs";
import Testimonial from "./../components/home/Testimonial";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Newservice from "../components/Newservice";
import MissionVisionSlider from "../components/MissionAndVision";

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}
    
    >
      <Helmet>
        <title>About Us - Waywedesign</title>
        <meta name="description" content="About us" />
      </Helmet>
     

      <Breadcrumbs pageurl="about" subtitle="About" />
      <KnowAbout />
      <AboutSlider />
      <Testimonial />
      <MissionVisionSlider/> 
      {/* <Newservice/> */}
    </motion.div>
  );
};

export default About;
