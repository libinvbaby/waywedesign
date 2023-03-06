import React from "react";
import Menu from "./../components/Navbar";
import Breadcrumbs from "./../components/Breadcrumbs";
import Footer from "./../components/Footer";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import MobileMenu from "../components/MobileMenu";

const DashboardReporting = () => {
   
  return (
    <>
      <Menu />
      <MobileMenu/>

      <Breadcrumbs pageurl="dashboard-reporting" subtitle="DASHBOARD REPORTING" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="assets/images/resources/dashboard-reporting.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">DASHBOARD REPORTING</h3>
                  <p className="service-details__text ">
                  Data is constantly changing and being updated, which can make it difficult to keep up with the latest trends. That’s why it’s more important than ever to be in control of your company’s data. If you’re not, you risk falling behind your competitors. 
<br/>Way We Design’s Dashboard Reporting System enables you to represent key performance indicators and relevant business data in a visual and interactive way. Business users can create their own dashboard reports that enable them to derive actionable insights while saving costs and time. Dashboard reporting is an efficient way for business users to keep track of progress and identify areas that need attention. By creating their own reports, businesses can save money and time while still getting the insights they need. A data-driven culture is key to success and using a modern dashboard software is the perfect way to push your business intelligence strategy to the next level.
<br/>BENEFITS OF INVESTING IN OUR DASHBOARD REPORTING SOFTWARE ARE:

                  </p>
                </div>
                <div class="service-details__benefits">
                  <div class="row">
                    <div cl ass="col-xl-6">
                      <div class="service-details__benefits-text">
                                       
                       
                        <p class="service-details__benefits-text">
                    
                          <ul>
                            <li>
                              <h6 class="service_list">Tracking business movements/trends</h6>
                             
                            </li>
                            <li>
                              <h6 class="service_list">
                              Info graphic representation of data
                              </h6>
                              
                            </li>
                            <li>
                              <h6 class="service_list">
                                
                              Insight monitoring
                              </h6>
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
      <Footer />
    </>
  );
};

export default DashboardReporting;
