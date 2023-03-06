import React from "react";
import Slider from "./../components/home/Slider";
import PartnerSlider from "./../components/home/PartnerSlider";
import FeatureOne from "./../components/home/FeatureOne";
import AboutOne from "./../components/home/AboutOne";
import ServiceOne from "./../components/home/ServiceOne";
import DiscoverMore from "./../components/home/DiscoverMore";
import ImproveSection from "./../components/home/ImproveSection";
import CoreValue from "./../components/home/CoreValue";
import Testimonial from "./../components/home/Testimonial";
import BlogHome from "./../components/home/BlogHome";
import HomeCta from "./../components/home/HomeCta";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      // initial={{ opacity: 0, x: 100 }}
      // animate={{ opacity: 1, x: 0 }}
      // exit={{ opacity: 0, x: 100 }}
      // transition={{ duration: 1 }}
    >
      <Helmet>
        <title>WayWeDesign </title>
        <meta name="description" content="" />
      </Helmet>
    
      <div className="page-wrapper">
        <Slider />
        <PartnerSlider />
        <FeatureOne />
        <AboutOne />
        <ServiceOne />
        <DiscoverMore />
        {/* <ProjectsSlider/> */}
        <ImproveSection />
        <CoreValue />
        <Testimonial />
        <BlogHome />
        <HomeCta />
      </div>
    </motion.div>
  );
};

export default Home;
