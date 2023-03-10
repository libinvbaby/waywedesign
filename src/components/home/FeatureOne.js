import React from 'react'

const FeatureOne = () => {
  return (
    <div>
        {/*Feature One Start*/}
        <section className="feature-one">
          <div className="container">
            <div className="feature-one__top">
              <div className="row">
                <div data-aos="fade"
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  {/*Feature One Single*/}
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <span className="icon-innovation" />
                    </div>
                    <div className="feature-one__text">
                      <h3>Web Development</h3>
                      <p>Lorem ipsum is simply of free text dolor.</p>
                    </div>
                  </div>
                </div>
                <div data-aos="fade"
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  {/*Feature One Single*/}
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <span className="icon-cyber-security" />
                    </div>
                    <div className="feature-one__text">
                      <h3>Digital Marketing</h3>
                      <p>Lorem ipsum is simply of free text dolor.</p>
                    </div>
                  </div>
                </div>
                <div data-aos="fade"
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  {/*Feature One Single*/}
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <span className="icon-webpage" />
                    </div>
                    <div className="feature-one__text">
                      <h3>HRM</h3>
                      <p>Lorem ipsum is simply of free text dolor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-one__bottom">
              <div className="row">
                <div className="col-lg-12">
                  <div className="feature-one__bottom-inner">
                    <p>
                      IT services built specifically for your business.{" "}
                      <a href="services.html">Find Your Solution</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Feature One End*/}
    </div>
  )
}

export default FeatureOne