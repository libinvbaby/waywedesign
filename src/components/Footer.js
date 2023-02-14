import React from 'react'

const Footer = () => {
  return (
    <div>
         {/*Site Footer One Start*/}
         <footer className="site-footer">
          <div className="site-footer__top">
            <div className="container">
              <div className="site-footer__top-inner">
                <div
                  className="site-footer-map"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/site-footer-mape.png)",
                  }}
                />
                <div className="row">
                  <div data-aos="fade-up"
                    className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <a href="index.html">
                          <img width="150px"
                            src="assets/images/logo-wwd-white.png"
                            alt
                          />
                        </a>
                      </div>
                      <p className="footer-widget__about-text">
                      Waywedesign specializes in offering Digital Marketing services such as Social Media Marketing (SMM), Paid Advertisements, Search Engine Marketing (SEM), Search Engine Optimization (SEO), Video Marketing, and other Online Promotions. Our customized solutions, cost-effective package, and customer-centric approach makes us the best internet marketing agency in Kochi, Kerala


                      </p>
                      <div className="footer-widget__about-social">
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up-right"
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="footer-widget__column footer-widget__links clearfix">
                      <h3 className="footer-widget__title">Links</h3>
                      <ul className="footer-widget__links-list list-unstyled clearfix">
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="about.html">Leadership Team</a>
                        </li>
                        <li>
                          <a href="news.html">IT Blog</a>
                        </li>
                        <li>
                          <a href="project.html">Case Studies</a>
                        </li>
                        <li>
                          <a href="contact.html">Locations</a>
                        </li>
                      </ul>
                      <ul className="footer-widget__links-list footer-widget__links-list-two list-unstyled clearfix">
                        <li>
                          <a href="managed-it.html">Managed IT</a>
                        </li>
                        <li>
                          <a href="it-support.html">IT Support</a>
                        </li>
                        <li>
                          <a href="it-consultancy.html">IT Consultancy</a>
                        </li>
                        <li>
                          <a href="cloud-computing.html">Cloud Computing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div data-aos="fade-up-right"
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="footer-widget__column footer-widget__contact">
                      <h3 className="footer-widget__title">Contact</h3>
                      <p className="footer-widget__contact-text">
                      Way WeDesign,<br/>
47/1403A,Ivees, MRERA-69, Chalikkavattom, Vennala<br/>
Kochi, Kerala<br/>
682028
                      </p>
                      <ul className="list-unstyled footer-widget__contact-list">
                        <li>
                          <div className="icon">
                            <span className="icon-email" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="mailto:Contact@waywedesign.com">
                              Contact@waywedesign.com
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-telephone" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="tel:+91 799 464 3673">+91 799 464 3673</a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="site-footer__bottom-container">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="site-footer__bottom-inner">
                      <div className="site-footer__bottom-left">
                        <p className="site-footer__bottom-text">
                          © All Copyright <span className="dynamic-year"></span>
                          {/* /.dynamic-year */} by{" "}
                          <a href="#">WayWeDesign.com</a>
                        </p>
                      </div>
                      <div className="site-footer__bottom-right">
                        <ul className="list-unstyled site-footer__bottom-menu">
                          <li>
                            <a href="contact.html">Terms &amp; Condition</a>
                          </li>
                          <li>
                            <span>/</span>
                          </li>
                          <li>
                            <a href="contact.html">Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*Site Footer One End*/}
        {/* /.page-wrapper */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img
                src="assets/images/resources/footer-logo.png"
                width={155}
                alt
              />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@packageName__.com">
                needhelp@izeetak.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-facebook-square" />
              <a href="#" className="fab fa-pinterest-p" />
              <a href="#" className="fab fa-instagram" />
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            {/* /.sr-only */}
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-magnifying-glass" />
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      {/* /.search-popup */}
    </div>
  )
}

export default Footer