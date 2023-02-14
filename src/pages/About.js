import React from 'react'
import AboutSlider from '../components/about/AboutSlider';
import KnowAbout from '../components/about/KnowAbout';
import Breadcrumbs from '../components/Breadcrumbs';
import Testimonial from './../components/home/Testimonial';


const About = () => {
  return (
    <div>
      <Breadcrumbs pagetitle="About"/>
      <KnowAbout />
      <AboutSlider/>
      <Testimonial/>
    </div>
  )
}

export default About