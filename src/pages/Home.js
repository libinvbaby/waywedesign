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
import ToolsUsed from "../components/home/ToolsUsed";
import GlobalPresence from './../components/home/GlobalPresence';

const Home = () => {
  return (
    <motion.div
      
    >
      <Helmet>
        <title>Way WeDesign </title>
        <meta name="description" content="" />
      </Helmet>
    
      <div className="page-wrapper">
        <Slider />
        {/* <BannerVideo /> */}
        <PartnerSlider />
        <FeatureOne />
        <AboutOne />
        {/* <ServiceOne /> */}
        <CustomService/>
        <DiscoverMore />
        <AboutSlider/>
        {/* <ProjectsSlider/> */}
        {/* <ImproveSection /> */}
        {/* <CoreValue /> */}
        <Testimonial />
        <BlogHome />
        <HomeCta />
        <ToolsUsed/>
        {/* <GlobalPresence/> */}
      </div>
    </motion.div>
  );
};

export default Home;
