import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
const AboutSlider = () => {
  return (
    <div>
        <section className="brand-two">
  <div className="container py-4">
  <h2 className="section-title__title text-center pb-2">Our Clients</h2>
    <div className="brand-two__inner">
      <Swiper className="thm-swiper__slider swiper-container"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      spaceBetween={100}

      slidesPerView={5}
      loop={true}
      breakpoints={{
        "0": {
            "spaceBetween": 30,
            "slidesPerView": 2
        },
        "375": {
            "spaceBetween": 30,
            "slidesPerView": 2
        },
        "575": {
            "spaceBetween": 30,
            "slidesPerView": 3
        },
        "767": {
            "spaceBetween": 50,
            "slidesPerView": 4
        },
        "991": {
            "spaceBetween": 50,
            "slidesPerView": 5
        },
        "1199": {
            "spaceBetween": 100,
            "slidesPerView": 6
        }
      }}
      data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
      "0": {
          "spaceBetween": 30,
          "slidesPerView": 2
      },
      "375": {
          "spaceBetween": 30,
          "slidesPerView": 2
      },
      "575": {
          "spaceBetween": 30,
          "slidesPerView": 3
      },
      "767": {
          "spaceBetween": 50,
          "slidesPerView": 4
      },
      "991": {
          "spaceBetween": 50,
          "slidesPerView": 5
      },
      "1199": {
          "spaceBetween": 100,
          "slidesPerView": 6
      }
  }}'>
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <img src="assets/images/brand/millow-logo.png" alt />
          </SwiperSlide>{/* /.swiper-slide */}
          <SwiperSlide className="swiper-slide">
            <img src="assets/images/brand/marcom-logo.svg" alt />
          </SwiperSlide>{/* /.swiper-slide */}
          <SwiperSlide className="swiper-slide">
            <img src="assets/images/brand/kompan-logo.png" alt />
          </SwiperSlide>{/* /.swiper-slide */}
          <SwiperSlide className="swiper-slide">
            <img src="assets/images/brand/kingdom-logo.png" alt />
          </SwiperSlide>{/* /.swiper-slide */}
          <SwiperSlide className="swiper-slide">
            <img src="assets/images/brand/SEAFORD-logo.png" alt />
          </SwiperSlide>{/* /.swiper-slide */}
          <SwiperSlide className="swiper-slide">
            <img src="assets/images/brand/tuteLink-logo.png" alt />
          </SwiperSlide>{/* /.swiper-slide */}
          <SwiperSlide className="swiper-slide">
            <img src="assets/images/brand/liberty_logo.jpg" alt />
          </SwiperSlide>{/* /.swiper-slide */}
          <SwiperSlide className="swiper-slide">
            <img src="assets/images/brand/foodro-logo.png" alt />
          </SwiperSlide>{/* /.swiper-slide */}
          <SwiperSlide className="swiper-slide">
            <img src="assets/images/brand/abet-logo.jpg" alt />
          </SwiperSlide>{/* /.swiper-slide */}
          <SwiperSlide className="swiper-slide">
            <br/>
            <br/>
            <img src="assets/images/brand/bhc-logo.png" alt />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/images/brand/fotech-logo.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <br/>
                <br/>
                <br/>
                  <img src="assets/images/brand/bookotrip-logo.svg" alt />
                </SwiperSlide>{/* /.swiper-slide */}
        </div>
      </Swiper>
    </div>
  </div>
</section>

    </div>
  )
}

export default AboutSlider