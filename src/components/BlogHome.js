import React,{useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

const BlogHome = () => {
  useEffect(()=>{
    Aos.init({ duration:600,
      easing: 'ease',
      });
  },[])
  return (
    <div>
         {/*News One Start*/}
         <section className="news-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                Direct from the Blog
              </span>
              <h2 className="section-title__title">News &amp; Articles</h2>
            </div>
            <div className="row" data-aos="fade-in">
              <div data-aos="fade-up-right"
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                {/*News One Single*/}
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/blog/news-one-img-1.jpg" alt />
                    <a href="news-details.html">
                      <span className="news-one__plus" />
                    </a>
                    <div className="news-one__date-box">
                      <p>
                        20 <br /> Aug
                      </p>
                    </div>
                  </div>
                  <div className="news-one__content">
                    <ul className="list-unstyled news-one__meta">
                      <li>
                        <a href="news-details.html">
                          <i className="far fa-user-circle" /> by admin
                        </a>
                      </li>
                      <li>
                        <a href="news-details.html">
                          <i className="far fa-comments" /> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="news-one__title">
                      <a href="news-details.html">
                        What is Holding Back the IT Solution Industry?
                      </a>
                    </h3>
                    <p className="news-one__text">
                      Lorem ipsum is simply free text used by copytyping
                      refreshing.
                    </p>
                    <div className="news-one__read-more">
                      <a
                        href="news-details.html"
                        className="news-one__read-more-btn"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="slide-up"
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                {/*News One Single*/}
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/blog/news-one-img-2.jpg" alt />
                    <a href="news-details.html">
                      <span className="news-one__plus" />
                    </a>
                    <div className="news-one__date-box">
                      <p>
                        20 <br /> Aug
                      </p>
                    </div>
                  </div>
                  <div className="news-one__content">
                    <ul className="list-unstyled news-one__meta">
                      <li>
                        <a href="news-details.html">
                          <i className="far fa-user-circle" /> by admin
                        </a>
                      </li>
                      <li>
                        <a href="news-details.html">
                          <i className="far fa-comments" /> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="news-one__title">
                      <a href="news-details.html">
                        Leverage agile frameworks to provide a
                      </a>
                    </h3>
                    <p className="news-one__text">
                      Lorem ipsum is simply free text used by copytyping
                      refreshing.
                    </p>
                    <div className="news-one__read-more">
                      <a
                        href="news-details.html"
                        className="news-one__read-more-btn"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up-left"
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
                {/*News One Single*/}
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/blog/news-one-img-3.jpg" alt />
                    <a href="news-details.html">
                      <span className="news-one__plus" />
                    </a>
                    <div className="news-one__date-box">
                      <p>
                        20 <br /> Aug
                      </p>
                    </div>
                  </div>
                  <div className="news-one__content">
                    <ul className="list-unstyled news-one__meta">
                      <li>
                        <a href="news-details.html">
                          <i className="far fa-user-circle" /> by admin
                        </a>
                      </li>
                      <li>
                        <a href="news-details.html">
                          <i className="far fa-comments" /> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="news-one__title">
                      <a href="news-details.html">
                        Bring to the table win-win survival strategies.
                      </a>
                    </h3>
                    <p className="news-one__text">
                      Lorem ipsum is simply free text used by copytyping
                      refreshing.
                    </p>
                    <div className="news-one__read-more">
                      <a
                        href="news-details.html"
                        className="news-one__read-more-btn"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*News One End*/}
    </div>
  )
}

export default BlogHome