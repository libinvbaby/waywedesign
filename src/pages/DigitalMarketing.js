import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SingleService from "./../components/SingleService";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
const DigitalMarketing = () => {
  const MarketingServices = [
    {
      serviceTitle: "SEARCH ENGINE OPTIMIZATION (SEO)",
      serviceDesc:
        "Expose the full potential of your website with our top-rated SEO services. At Waywedesign",
      link: "search-engine-optimization",
    },
    {
      serviceTitle: "SOCIAL MEDIA MARKETING (SMM)",
      serviceDesc:
        "As more and more brands are uplifting with social media advertising, you should ",
      link: "social-media-marketing",
    },
    {
      serviceTitle: "GOOGLE ADS/PPC",
      serviceDesc:
        "Waywedesign is a leading digital marketing company dedicated to helping businesses reach their ",
      link: "google-ads",
    },
    {
      serviceTitle: "GRAPHIC DESIGNING",
      serviceDesc:
        "We offer professional graphic design services for all your marketing and branding needs.",
      link: "graphic-designing",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>Digital Marketing - Waywedesign</title>
        <meta name="description" content="Digital Marketing" />
      </Helmet>
      

      <Breadcrumbs pageurl="digital-marketing" subtitle="Digital Marketing" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="assets/images/resources/digital-marketing-page-banner.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">DIGITAL MARKETING</h3>
                  <p className="service-details__text ">
                    The modern world around us has offered us new ways to live
                    and explore our lives. Businesses have started to invest
                    more time and resources into their marketing strategy to
                    take advantage of digital marketing tools and plans. By
                    doing this, they can connect with new and potential
                    customers online, generate leads, and sell their services
                    and products more efficiently. <br />
                    Waywedesign is a dynamic, versatile, and full-service
                    digital marketing company that is always in pursuit to offer
                    reliable and result-oriented digital marketing services. We
                    trust our own search engine optimization (SEO) and marketing
                    strategies to drive new customers to your website. With
                    out-of-the-box marketing solutions and strategies, we are
                    enabling our clientele to easily build brand awareness among
                    the targeted audience. We are not a static company and we
                    cater to all industries. Waywedesign has years of experience
                    and has a team of professionals to build a custom website
                    and use different digital marketing services to assist all
                    sized industries.
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
    </motion.div>
  );
};

export default DigitalMarketing;
