import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const ProjectsSlider = () => {
  return (
    <div>
                {/*Project One Start*/}
                <section className="project-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Our Case Studies</span>
              <h2 className="section-title__title">Explore Projects</h2>
            </div>
            <OwlCarousel
              className="project-one__carousel owl-theme owl-carousel"
              loop
              items={2}
              margin={10}
            >
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-1.jpg"
                    alt
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <a href="project-details.html">Research &amp; Energy</a>
                  </h2>
                  <div className="project-one__arrow">
                    <a href="project-details.html">
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-2.jpg"
                    alt
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <a href="project-details.html">Research &amp; Energy</a>
                  </h2>
                  <div className="project-one__arrow">
                    <a href="project-details.html">
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-3.jpg"
                    alt
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <a href="project-details.html">Research &amp; Energy</a>
                  </h2>
                  <div className="project-one__arrow">
                    <a href="project-details.html">
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-4.jpg"
                    alt
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <a href="project-details.html">Research &amp; Energy</a>
                  </h2>
                  <div className="project-one__arrow">
                    <a href="project-details.html">
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-1.jpg"
                    alt
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <a href="project-details.html">Research &amp; Energy</a>
                  </h2>
                  <div className="project-one__arrow">
                    <a href="project-details.html">
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-2.jpg"
                    alt
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <a href="project-details.html">Research &amp; Energy</a>
                  </h2>
                  <div className="project-one__arrow">
                    <a href="project-details.html">
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
        {/*Project One End*/}
    </div>
  )
}

export default ProjectsSlider