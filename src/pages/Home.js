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
import AboutSlider from "../components/about/AboutSlider";
import CustomService from "../components/home/CustomService";
import BannerVideo from "../components/home/BannerVideo";

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
        {/* <Slider /> */}
        <BannerVideo />
        <PartnerSlider />
        <FeatureOne />
        <AboutOne />
        {/* <ServiceOne /> */}
        <CustomService/>
        <DiscoverMore />
        {/* <ProjectsSlider/> */}
        {/* <ImproveSection /> */}
        <CoreValue />
        <Testimonial />
        <BlogHome />
        <HomeCta />
        <AboutSlider/>
      </div>
    </motion.div>
  );
};

export default Home;
