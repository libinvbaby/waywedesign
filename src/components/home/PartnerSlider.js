import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const PartnerSlider = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <div>
      {/*Brand One Start*/}
      <section className="brand-one">
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 text-center ">
                <div className="counter-wrapper">
                  <h1 class=" section-title__title text-white">
                    {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                    +
                  </h1>
                  <h4 class="text-white">Projects</h4>
                </div>
              </div>
              <div className="col-md-3 text-center counter-col">
                <div className="counter-wrapper">
                  <h1 class=" section-title__title text-white">
                    {counterOn && <CountUp start={0} end={10} duration={2} delay={0}/>}
                    +
                  </h1>
                  <h4 class="text-white">Countries</h4>
                </div>
              </div>
              <div className="col-md-3 text-center counter-col">
                <div className="counter-wrapper">
                  <h1 class=" section-title__title text-white">
                    {counterOn && <CountUp start={0} end={10} duration={2} delay={0}/>}
                    +
                  </h1>
                  <h4 class="text-white">Services</h4>
                </div>
              </div>
              <div className="col-md-3 text-center counter-col">
                <div className="counter-wrapper">
                  <h1 class=" section-title__title text-white">
                    {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                    +
                  </h1>
                  <h4 class="text-white">Projects</h4>
                </div>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </section>
      {/*Brand One End*/}
    </div>
  )
}

export default PartnerSlider


// // <Swiper   
// autoplay={{
//   delay: 4000,
//   disableOnInteraction: false,
// }}
// spaceBetween={100}

// slidesPerView={5}
// loop={true}
// breakpoints={{
//   "0": {
//       "spaceBetween": 30,
//       "slidesPerView": 2
//   },
//   "375": {
//       "spaceBetween": 30,
//       "slidesPerView": 2
//   },
//   "575": {
//       "spaceBetween": 30,
//       "slidesPerView": 3
//   },
//   "767": {
//       "spaceBetween": 50,
//       "slidesPerView": 4
//   },
//   "991": {
//       "spaceBetween": 50,
//       "slidesPerView": 5
//   },
//   "1199": {
//       "spaceBetween": 100,
//       "slidesPerView": 6
//   }
// }}
// className="thm-swiper__slider swiper-container"
// data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
// "0": {
//     "spaceBetween": 30,
//     "slidesPerView": 2
// },
// "375": {
//     "spaceBetween": 30,
//     "slidesPerView": 2
// },
// "575": {
//     "spaceBetween": 30,
//     "slidesPerView": 3
// },
// "767": {
//     "spaceBetween": 50,
//     "slidesPerView": 4
// },
// "991": {
//     "spaceBetween": 50,
//     "slidesPerView": 5
// },
// "1199": {
//     "spaceBetween": 100,
//     "slidesPerView": 6
// }
// }}'
// >
// <div className="swiper-wrapper">
//   <SwiperSlide className="swiper-slide">
//     <img src="assets/images/brand/millow-logo.png" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
//   <SwiperSlide className="swiper-slide">
//     <img src="assets/images/brand/marcom-logo.svg" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
//   <SwiperSlide className="swiper-slide">
//     <img width="100%" src="assets/images/brand/kompan-logo.png" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
//   <SwiperSlide className="swiper-slide">
//     <img src="assets/images/brand/kingdom-logo.png" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
//   <SwiperSlide className="swiper-slide">
//   <br/>
//   <br/>
//     <img src="assets/images/brand/SEAFORD-logo.png" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
//   <SwiperSlide className="swiper-slide">
//     <img src="assets/images/brand/tuteLink-logo.png" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
//   <SwiperSlide className="swiper-slide">
//     <img src="assets/images/brand/liberty_logo.jpg" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
//   <SwiperSlide className="swiper-slide">
//     <img src="assets/images/brand/foodro-logo.png" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
//   <SwiperSlide className="swiper-slide">
//     <img src="assets/images/brand/abet-logo.jpg" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
//   <SwiperSlide className="swiper-slide">
//   <br/>
//   <br/>
//     <img src="assets/images/brand/bhc-logo.png" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
//   <SwiperSlide className="swiper-slide">
//   <br/>
//   <br/>
//   <br/>
//     <img src="assets/images/brand/fotech-logo.svg" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
//   <SwiperSlide className="swiper-slide">
//   <br/>
//   <br/>
//   <br/>
//     <img src="assets/images/brand/bookotrip-logo.svg" alt />
//   </SwiperSlide>
//   {/* /.swiper-slide */}
// </div>
// </Swiper>