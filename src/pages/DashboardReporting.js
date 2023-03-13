import React from "react";
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const DashboardReporting = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>Dashboard Reporting - Way WeDesign</title>
        <meta name="description" content="DashBoard Reporting" />
      </Helmet>
     
      <Breadcrumbs
        pageurl="dashboard-reporting"
        subtitle="DASHBOARD REPORTING"
      />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/dashboard-reporting.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">
                    DASHBOARD REPORTING
                  </h3>
                  <p className="service-details__text ">
                    Data is constantly changing and being updated, which can
                    make it difficult to keep up with the latest trends. That’s
                    why it’s more important than ever to be in control of your
                    company’s data. If you’re not, you risk falling behind your
                    competitors.
                    <br />
                    Way We Design’s Dashboard Reporting System enables you to
                    represent key performance indicators and relevant business
                    data in a visual and interaimport {Helmet} from
                    'react-helmet'; ctive way. Business users can create their
                    own dashboard reports that enable them to derive actionable
                    insights while saving costs and time. Dashboarimport{" "}
                    {Helmet} from 'react-helmet'; d reporting is an efficient
                    way for business users to keep track of progress and
                    identify areas that need attention. By creating their own
                    reports, bimport {Helmet} from 'react-helmet'; usinesses can
                    save money and time while still getting the insights they
                    need. A data-driven culture is key to success and using a
                    modern dashboard soimport {Helmet} from 'react-helmet';
                    ftware is the perfect way to push your business intelligence
                    strategy to the next level.import {Helmet} from
                    'react-helmet';
                    <br />
                    BENEFITS OF INVESTING IN OUR DASHBOARD REPORTING SOFTWARE
                    ARE:
                  </p>
                </div>
                <div class="service-details__benefits">
                  <div class="row">
                    <div cl ass="col-xl-6">
                      <div class="service-details__benefits-text">
                        <p class="service-details__benefits-text">
                          <ul>
                            <li>
                              <h6 class="service_list">
                                Tracking business movements/trends
                              </h6>
                            </li>
                            <li>
                              <h6 class="service_list">
                                Info graphic representation of data
                              </h6>
                            </li>
                            <li>
                              <h6 class="service_list">Insight monitoring</h6>
                            </li>
                            <li>
                              <h6 class="service_list">
                                Faster decision making
                              </h6>
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
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

export default DashboardReporting;
