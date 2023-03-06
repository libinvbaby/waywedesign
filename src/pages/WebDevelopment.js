import React from "react";
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const WebDevelopment = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>Web Development - Waywedesign</title>
        <meta name="description" content="Web Development" />
      </Helmet>
     
      <Breadcrumbs pageurl="web-development" subtitle="WEB DEVELOPMENT" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="assets/images/resources/web-development-page-banner.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">WEB DEVELOPMENT</h3>
                  <p className="service-details__text ">
                    A website can be created for either personal or professional
                    purposes. Technology has made web development a convenient
                    process. The growing number of websites and the increased
                    use of the internet are indicators of this. As the
                    businesses grow, they increasingly recognize the necessity
                    for access to a professional web service provider to find
                    solutions for their online company development demands.
                    That’s where we come in. Our web development services aid in
                    the creation of all types of web-based software and ensure
                    that web users have a positive experience. We professionally
                    design, redesign, and support customer-facing and enterprise
                    web apps to achieve high conversion an adoption rates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <ServiceSideMenu />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WebDevelopment;
