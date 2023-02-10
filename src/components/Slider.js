import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

SwiperCore.use([Autoplay]);

const Slider = () => {
  const params = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <div class="main-slider">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect={"fade"}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        className="swiper-container thm-swiper__slider"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-1-1.jpg)",
              }}
            ></div>
            <div className="image-layer-overlay" />
            {/* /.image-layer */}
            <div className="main-slider-shape-1">
              <img src="assets/images/shapes/main-slider-shape-1.png" alt />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="main-slider__content">
                    <h2>
                      Better Solution at <br /> Your Fingertips
                    </h2>
                    <p>
                      We’ve One Mission to be the Best IT Software Company in UK
                    </p>
                    <a href="about.html" className="thm-btn">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-1-2.jpg)",
              }}
            ></div>
            <div className="image-layer-overlay" />
            {/* /.image-layer */}
            <div className="main-slider-shape-1">
              <img src="assets/images/shapes/main-slider-shape-1.png" alt />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="main-slider__content">
                    <h2>
                      Better Solution at <br /> Your Fingertips
                    </h2>
                    <p>
                      We’ve One Mission to be the Best IT Software Company in UK
                    </p>
                    <a href="about.html" className="thm-btn">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-1-3.jpg)",
              }}
            ></div>
            <div className="image-layer-overlay" />
            {/* /.image-layer */}
            <div className="main-slider-shape-1">
              <img src="assets/images/shapes/main-slider-shape-1.png" alt />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="main-slider__content">
                    <h2>
                      Better Solution at <br /> Your Fingertips
                    </h2>
                    <p>
                      We’ve One Mission to be the Best IT Software Company in UK
                    </p>
                    <a href="about.html" className="thm-btn">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        {/* If we need navigation buttons */}
        <div className="swiper-pagination" id="main-slider-pagination" />
        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-next"
          >
            <i className="icon-right-arrow icon-left-arrow" />
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-prev"
          >
            <i className="icon-right-arrow" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
