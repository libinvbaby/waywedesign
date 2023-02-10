import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";



SwiperCore.use([Autoplay]);

const PartnerSlider = () => {
  return (
    <div>
         {/*Brand One Start*/}
         <section className="brand-one">
          <div className="container">
            <Swiper   
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
              className="thm-swiper__slider swiper-container"
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
          }}'
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-1.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-2.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-3.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-4.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-5.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-6.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-1.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-2.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-3.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-4.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-5.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/brand/brand-1-6.png" alt />
                </SwiperSlide>
                {/* /.swiper-slide */}
              </div>
            </Swiper>
          </div>
        </section>
        {/*Brand One End*/}
    </div>
  )
}

export default PartnerSlider