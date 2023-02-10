import React from 'react'

const HomeCta = () => {
  return (
    <div>
         {/*CTA One Start*/}
         <section className="cta-one">
          <div className="cta-one__container">
            <div
              className="cta-one-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/cta-one-bg.jpg)",
              }}
            />
            <div className="cta-one-overly" />
            <div className="container">
              <div className="col-lg-12">
                <div className="cta-one__inner">
                  <p className="cta-one__sub-title">Let’s Get Started Now</p>
                  <h2 className="cta-one__title">
                    We’ll Help You Overcome Your <br /> Technology Challenges
                  </h2>
                  <a href="contact.html" className="cta-one__btn thm-btn">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*CTA One End*/}
    </div>
  )
}

export default HomeCta