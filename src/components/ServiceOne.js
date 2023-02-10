import React from 'react'

const ServiceOne = () => {
  return (
    <div>
         {/*Services One Start*/}
         <section className="services-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                Wide Range of Services
              </span>
              <h2 className="section-title__title">What We’re Offering</h2>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                {/*Services One Single*/}
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-conversation" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="it-consultancy.html">
                      IT Consulting <br /> Services
                    </a>
                  </h3>
                  <p className="services-one__text">
                    There are many variations of passages of lorem im available,
                    but majority suffered.
                  </p>
                  <div className="services-one__arrow">
                    <a href="it-consultancy.html">
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                {/*Services One Single*/}
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-app-development" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="custom-software.html">
                      Software Dev <br /> Services
                    </a>
                  </h3>
                  <p className="services-one__text">
                    There are many variations of passages of lorem im available,
                    but majority suffered.
                  </p>
                  <div className="services-one__arrow">
                    <a href="custom-software.html">
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="100ms"
              >
                {/*Services One Single*/}
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-cloud-storage" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="cloud-computing.html">
                      Cloud Computing <br /> Services
                    </a>
                  </h3>
                  <p className="services-one__text">
                    There are many variations of passages of lorem im available,
                    but majority suffered.
                  </p>
                  <div className="services-one__arrow">
                    <a href="cloud-computing.html">
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Services One End*/}
    </div>
  )
}

export default ServiceOne