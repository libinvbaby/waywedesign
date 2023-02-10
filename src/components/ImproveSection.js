import React from 'react'

const ImproveSection = () => {
  return (
    <div>
         {/*Improve One Start*/}
         <section className="improve-one">
          <div
            className="improve-one-bg jarallax"
            data-jarallax
            data-speed="0.2"
            data-imgposition="50% 0%"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/improve-one-bg.jpg)",
            }}
          />
          <div className="improve-one-bg-overly" />
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="improve-one__left wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="improve-one__img-box">
                    <div className="improve-one__img">
                      <img
                        src="assets/images/resources/improve-one-img-1.jpg"
                        alt
                      />
                    </div>
                    <div className="improve-one__project-complete">
                      <p>8008 Projects are completed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="improve-one__right">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      IT Technology
                    </span>
                    <h2 className="section-title__title">
                      Improve and Innovate with Tech Trends
                    </h2>
                  </div>
                  <ul className="list-unstyled improve-one__points">
                    <li>
                      <div className="icon">
                        <span className="icon-artificial-intelligence" />
                      </div>
                      <div className="text">
                        <h3>Artificial Intelligence</h3>
                        <p>
                          There are many variations of passages of available but
                          the majority have suffered alteration in some form
                          injected{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-ai" />
                      </div>
                      <div className="text">
                        <h3>Augmented Reality</h3>
                        <p>
                          There are many variations of passages of available but
                          the majority have suffered alteration in some form
                          injected{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Improve One End*/}
    </div>
  )
}

export default ImproveSection