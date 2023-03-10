import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
const ToolsUsed = () => {
  return (
    <div className='py-2'>
    <section className="brand-two" style={{boxShadow: "0px 0px 17px -4px rgba(71,71,71,1)"}}>
<div className="container" >
<h5 className="section-title__title_tools text-center">Technologies That We Uses</h5>
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
        <img src="assets/images/techno/Website-1.avif" alt />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/techno/Website-2.avif" alt />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/techno/Website-3.avif" alt />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/techno/Website-4.avif" alt />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/techno/Website-5.avif" alt />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/techno/Website-6.avif" alt />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/techno/Website-7.avif" alt />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/techno/Website-8.avif" alt />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/techno/Website-9.avif" alt />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
       
        <img src="assets/images/techno/Website-10.avif" alt />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/images/techno/mobile-1.avif" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
              <img src="assets/images/techno/mobile-2.avif" alt />
            </SwiperSlide>{/* /.swiper-slide */}
        <SwiperSlide className="swiper-slide">
              <img src="assets/images/techno/mobile-3.avif" alt />
            </SwiperSlide>{/* /.swiper-slide */}
        <SwiperSlide className="swiper-slide">
              <img src="assets/images/techno/mobile-4.avif" alt />
            </SwiperSlide>{/* /.swiper-slide */}
        <SwiperSlide className="swiper-slide">
              <img src="assets/images/techno/mobile-5.avif" alt />
            </SwiperSlide>{/* /.swiper-slide */}
        <SwiperSlide className="swiper-slide">
              <img src="assets/images/techno/mobile-6.avif" alt />
            </SwiperSlide>{/* /.swiper-slide */}
        <SwiperSlide className="swiper-slide">
              <img src="assets/images/techno/mobile-7.avif" alt />
            </SwiperSlide>{/* /.swiper-slide */}
        <SwiperSlide className="swiper-slide">
              <img src="assets/images/techno/mobile-8.avif" alt />
            </SwiperSlide>{/* /.swiper-slide */}
        <SwiperSlide className="swiper-slide">
              <img src="assets/images/techno/mobile-9.avif" alt />
            </SwiperSlide>{/* /.swiper-slide */}
        <SwiperSlide className="swiper-slide">
              <img src="assets/images/techno/Cloud-1.avif" alt />
            </SwiperSlide>{/* /.swiper-slide */}
        <SwiperSlide className="swiper-slide">
              <img src="assets/images/techno/Cloud-3.avif" alt />
            </SwiperSlide>{/* /.swiper-slide */}
        <SwiperSlide className="swiper-slide">
              <img src="assets/images/techno/Cloud-3.avif" alt />
            </SwiperSlide>{/* /.swiper-slide */}
    </div>
  </Swiper>
</div>
</div>
</section>

</div>
  )
}

export default ToolsUsed