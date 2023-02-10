import React from 'react'

const DiscoverMore = () => {
  return (
    <div>
        {/*Share The Joy Start*/}
        <section className="share-the-joy">
          <div className="share-the-joy__inner">
            <div
              className="share-the-joy-map"
              style={{
                backgroundImage:
                  "url(assets/images/shapes/share-the-joy-map.png)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-7">
                  <div className="share-the-joy__left">
                    <h2 className="share-the-joy__title">
                      Share the Joy of Achieving Glorious Moments &amp; Climbing
                      Up the Top
                    </h2>
                    <a href="#" className="share-the-joy__btn thm-btn">
                      Discover More
                    </a>
                    <div className="share-the-joy__shape-1">
                      <img
                        src="assets/images/shapes/share-the-joy-shape-1.png"
                        alt
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="share-the-joy__right">
                    <div className="share-the-joy__img-box">
                      <div
                        className="share-the-joy__img wow fadeInRight"
                        data-wow-duration="1500ms"
                      >
                        <img
                          src="assets/images/resources/share-the-joy-img-1.png"
                          alt
                          className="float-bob-2"
                        />
                      </div>
                      <div
                        className="share-the-joy__trusted wow fadeIn"
                        data-wow-duration="1500ms"
                      >
                        <span className="icon-social-media" />
                        <div className="share-the-joy__trusted__content">
                          <p>Trusted by</p>
                          <h3 className="odometer" data-count={8800}>
                            00
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                {/*Share The Joy End*/}

    </div>
  )
}

export default DiscoverMore