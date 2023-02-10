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
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <a href="index.html">
                          <img
                            src="assets/images/resources/footer-logo.png"
                            alt
                          />
                        </a>
                      </div>
                      <p className="footer-widget__about-text">
                        There are many vari of pass of lorem ipsum availab but
                        the majority have suffered in some forms.
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
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
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
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="footer-widget__column footer-widget__contact">
                      <h3 className="footer-widget__title">Contact</h3>
                      <p className="footer-widget__contact-text">
                        66 Road Broklyn Street, 600 <br /> New York, USA
                      </p>
                      <ul className="list-unstyled footer-widget__contact-list">
                        <li>
                          <div className="icon">
                            <span className="icon-email" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="mailto:needhelp@company.com">
                                needhelp@company.com
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
                              <a href="tel:926668880000">+ 92 666 888 0000</a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="footer-widget__column footer-widget__newsletter">
                      <h3 className="footer-widget__title">Newsletter</h3>
                      <p className="footer-widget__newsletter-text">
                        Subscribe to our newsletter for daily new and updates
                      </p>
                      <form
                        className="footer-widget__newsletter-form mc-form"
                        data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e"
                      >
                        <div className="footer-widget__newsletter-input-box">
                          <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                          />
                          <button
                            type="submit"
                            className="footer-widget__newsletter-btn"
                          >
                            Send
                          </button>
                        </div>
                      </form>
                      <div className="mc-form__response" />
                      {/* /.mc-form__response */}
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
                          <a href="#">Layerdrops.com</a>
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