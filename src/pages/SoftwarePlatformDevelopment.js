import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import MobileMenu from "../components/MobileMenu";
import ServiceSideMenu from "../components/ServiceSideMenu";
import Footer from "./../components/Footer";
import Menu from "./../components/Navbar";
import SingleService from './../components/SingleService';

const SoftwareDevelopmentPlatform = () => {
    const MarketingServices=[
        {
            serviceTitle:"DASHBOARD REPORTING",
            serviceDesc:"Data is constantly changing and being updated, which can make it difficult to keep up with the latest trends",
            link:"dashboard-reporting"
        },
        {
            serviceTitle:"MOBILE-APPDEVELOPMENT",
            serviceDesc:"With extensive experience in delivering top-quality mobile applications and complex technology solutions",
            link:"mobile-app-development"
        },
        {
            serviceTitle:"PEN TESTING",
            serviceDesc:"No organization wants their name in the next big data breach headline. But the reality is, most breached ",
            link:"pen-testing"
        },
        {
            serviceTitle:"WEB DEVELOPMENT",
            serviceDesc:"A website can be created for either personal or professional purposes. Technology has made web development ",
            link:"web-development"
        },
        {
            serviceTitle:"IOT DEVELOPMENT",
            serviceDesc:"Our embedded device development services include the latest technology and best practices to ensure high ",
            link:""
        },
        {
            serviceTitle:"MEDIA",
            serviceDesc:"Way WeDesign offers an innovative digital platform that enables you to showcase your products across ",
            link:"media"
        },
        {
            serviceTitle:"RETAIL AND ECOMMERCE",
            serviceDesc:"In today's rapidly evolving online world, having a robust online presence is crucial for businesses that aim",
            link:"retail-and-ecommerce"
        },
        {
            serviceTitle:"ASSESSMENT PLATFORMS",
            serviceDesc:"As the world advances, so does education. More individuals are seeking alternative methods to prepare ",
            link:"assessement-platforms"
        },
        {
            serviceTitle:"PAYROLL MANAGEMENT SOFTWARES",
            serviceDesc:"Organizations require comprehensive information about their employees, and it can be challenging ",
            link:"payroll-management-system"
        },
        
    ]
  return (
    <>
      <Menu />
      <MobileMenu/>
      <Breadcrumbs pageurl="software-development-platform" subtitle="SOFTWARE & PLATFORM DEVELOPMENT" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="assets/images/resources/software-development-platform.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">SOFTWARE & PLATFORM DEVELOPMENT</h3>
                  <p className="service-details__text ">
                  Every business and organization will often require some kind of software at some point in their existence. Software development is the process of creating software using computer programming. The types of software used by most companies range from general applications that enable better management of key organizational functions, such as human resources, finances and accounts, inventory and stock, and even running projects, to more specialized software items that have a specific purpose, like content management software for use on company websites. 
<br/>Software development is a measured process, therefore any applications and software programs produced as a result of the process will be specifically tailored to the needs and requirements of your business.

                  </p>
                </div>

               
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-5">
              <ServiceSideMenu />
            </div> */}
          </div>
        </div>
      </section>
      <section className="services-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                Wide Range of Services
              </span>
              <h2 className="section-title__title">Services</h2>
            </div>
            <div className="row">
                 
                  {MarketingServices.map((data) => {
                  return (
                    <SingleService
                        link={data.link}
                      serviceTitle={data.serviceTitle}
                      serviceDesc={data.serviceDesc}
                    />
                  );
                })}
                </div>
                </div>
                </section>
      <Footer />
    </>
  );
};

export default SoftwareDevelopmentPlatform;
