import React from "react";
import Slider from "../components/Slider";
import PartnerSlider from "../components/PartnerSlider";
import FeatureOne from "../components/FeatureOne";
import AboutOne from "../components/AboutOne";
import ServiceOne from './../components/ServiceOne';
import DiscoverMore from "../components/DiscoverMore";
// import ProjectsSlider from "../components/ProjectsSlider";
import ImproveSection from "../components/ImproveSection";
import Testimonial from "../components/Testimonial";
import BlogHome from "../components/BlogHome";
import HomeCta from "../components/HomeCta";
import CoreValue from "../components/CoreValue";

const Home = () => {
  return (
    <div>
     
      <div className="page-wrapper">
       <Slider />
       <PartnerSlider/>
        <FeatureOne/>
       <AboutOne/>
       <ServiceOne/>
        <DiscoverMore/>
        {/* <ProjectsSlider/> */}
        <ImproveSection/>
        <CoreValue/>
        <Testimonial/>
        <BlogHome/>
        <HomeCta/>
       
       
      </div>
      
     
    </div>
  );
};

export default Home;
