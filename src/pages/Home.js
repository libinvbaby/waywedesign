import React from "react";
import Slider from './../components/home/Slider';
import PartnerSlider from './../components/home/PartnerSlider';
import FeatureOne from './../components/home/FeatureOne';
import AboutOne from './../components/home/AboutOne';
import ServiceOne from './../components/home/ServiceOne';
import DiscoverMore from './../components/home/DiscoverMore';
import ImproveSection from './../components/home/ImproveSection';
import CoreValue from './../components/home/CoreValue';
import Testimonial from './../components/home/Testimonial';
import BlogHome from './../components/home/BlogHome';
import HomeCta from './../components/home/HomeCta';
// import ProjectsSlider from './../components/home/ProjectsSlider';


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
