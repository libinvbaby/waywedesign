import React from 'react'

const AboutOne = () => {
  return (
    <div>
         {/*About One Start*/}
         <section className="about-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="about-one__left wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="about-one__img-box">
                    <div className="about-one__img">
                      <img
                        src="assets/images/resources/about-one-img-1.jpg"
                        alt
                      />
                    </div>
                    <div className="about-one__small-img">
                      <img
                        src="assets/images/resources/about-one-small-img.jpg"
                        alt
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-one__right">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Get to Know About us
                    </span>
                    <h2 className="section-title__title">
                      The Leading IT Solutions Company &amp; Your Partner for
                      Innovations
                    </h2>
                  </div>
                  <p className="about-one__text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even.
                  </p>
                  <div className="about-one__points-box">
                    <ul className="about-one__points list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-check" />
                        </div>
                        <div className="text">
                          <p>Take a look at our round up of the best shows</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check" />
                        </div>
                        <div className="text">
                          <p>It has survived not only five centuries</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Lorem Ipsum has been the ndustry standard dummy text
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="about-one__it-solutions">
                    <div className="about-one__it-solutions-icon">
                      <span className="icon-computer" />
                    </div>
                    <div className="about-one__it-solutions-text-box">
                      <p className="about-one__it-solutions-text">
                        We Run all Kinds of IT Solutions &amp; Services
                        <br /> that Vow your Success
                      </p>
                    </div>
                  </div>
                  <a href="about.html" className="about-one__btn thm-btn">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About One End*/}
    </div>
  )
}

export default AboutOne