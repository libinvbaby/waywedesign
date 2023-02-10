import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonial = () => {
  return (
    <div>
         {/*Testimonial One Start*/}
         <section className="testimonial-one">
          <div id="particles-js" />
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div className="testimonial-one__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Customers Feedbacks
                    </span>
                    <h2 className="section-title__title">
                      What They’re Talking About Company
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="testimonial-one__right">
                  <OwlCarousel
                    loop
                    margin={50}
                    items={2}
                    autoplay={true}
                    className="testimonial-one__carousel owl-theme owl-carousel"
                  >
                    {/*Testimonial One Single*/}
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-one-img-1.png"
                            alt
                          />
                        </div>
                        <div className="testimonial-one__client-details">
                          <h5 className="testimonial-one__client-name">
                            Kevin Martin
                          </h5>
                          <p className="testimonial-one__client-title">
                            Customer
                          </p>
                        </div>
                      </div>
                      <p className="testimonial-one__text">
                        Lorem ipsum is simply free text dolor sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore text.
                      </p>
                      <div className="testimonial-one__quote">
                        <span className="icon-right-quote" />
                      </div>
                    </div>
                    {/*Testimonial One Single*/}
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-one-img-2.png"
                            alt
                          />
                        </div>
                        <div className="testimonial-one__client-details">
                          <h5 className="testimonial-one__client-name">
                            Christine Eve
                          </h5>
                          <p className="testimonial-one__client-title">
                            Customer
                          </p>
                        </div>
                      </div>
                      <p className="testimonial-one__text">
                        Lorem ipsum is simply free text dolor sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore text.
                      </p>
                      <div className="testimonial-one__quote">
                        <span className="icon-right-quote" />
                      </div>
                    </div>
                    {/*Testimonial One Single*/}
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-one-img-3.png"
                            alt
                          />
                        </div>
                        <div className="testimonial-one__client-details">
                          <h5 className="testimonial-one__client-name">
                            Jon Smith
                          </h5>
                          <p className="testimonial-one__client-title">
                            Customer
                          </p>
                        </div>
                      </div>
                      <p className="testimonial-one__text">
                        Lorem ipsum is simply free text dolor sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore text.
                      </p>
                      <div className="testimonial-one__quote">
                        <span className="icon-right-quote" />
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Testimonial One End*/}
    </div>
  )
}

export default Testimonial