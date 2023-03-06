import React from "react";
import AboutSlider from "../components/about/AboutSlider";
import KnowAbout from "../components/about/KnowAbout";
import Breadcrumbs from "../components/Breadcrumbs";
import Testimonial from "./../components/home/Testimonial";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    
    >
      <Helmet>
        <title>About Us - Waywedesign</title>
        <meta name="description" content="About us" />
      </Helmet>
     

      <Breadcrumbs pageurl="about" subtitle="About" />
      <KnowAbout />
      <AboutSlider />
      <Testimonial />
    </motion.div>
  );
};

export default About;
