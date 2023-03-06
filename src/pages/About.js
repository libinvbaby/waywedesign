import React from 'react'
import AboutSlider from '../components/about/AboutSlider';
import KnowAbout from '../components/about/KnowAbout';
import Breadcrumbs from '../components/Breadcrumbs';
import Testimonial from './../components/home/Testimonial';
import Footer from './../components/Footer';
import Menu from './../components/Navbar';
import MobileMenu from '../components/MobileMenu';


const About = () => {
  return (
    <div>
            <Menu />
            <MobileMenu/>

      <Breadcrumbs pageurl="about" subtitle="About"/>
      <KnowAbout />
      <AboutSlider/>
      <Testimonial/>
      <Footer/>

    </div>
  )
}

export default About