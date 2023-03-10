import React from 'react'
import { Link } from 'react-router-dom';


const CustomService = () => {
  return (
    <div>
    {/*Services One Start*/}
    <section className="services-one">
     <div className="container">
       <div className="section-title text-center">
         {/* <span className="section-title__tagline">
          
         </span> */}
         <h2 className="section-title__title"> Wide Range of Services</h2>
       </div>
       <div className="row">
         <div  data-aos="fade-up-right"
           className="col-xl-4 col-lg-4 wow fadeInLeft"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
             <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/app-development.png" alt="" />
                        </div>
             <h3 className="services-one__title">
               <Link to="/software-development-platform">
                 Software & Platform <br /> Development
               </Link>
             </h3>
             <p className="services-one__text">
             Every business and organization will often require some kind of software at some point in their existence. 
             </p>
             
           </div>
         </div>
         <div data-aos="slide-up"
           className="col-xl-4 col-lg-4 wow fadeInUp"
           data-wow-delay="200ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/social-media.png" alt="" />
                        </div>
             <h3 className="services-one__title">
               <Link to="/digital-marketing">
                 Digital <br /> Marketing
               </Link>
             </h3>
             <p className="services-one__text">
             The modern world around us has offered us new ways to live and explore our lives.
             </p>
           
           </div>
         </div>
         <div data-aos="fade-up-left"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/migrating.png" alt="" />
                        </div>
             <h3 className="services-one__title">
               <Link to="cloud-service">
                 Cloud  <br /> Service
               </Link>
             </h3>
             <p className="services-one__text">
             Way WeDesign is a leading provider of cloud services, offering optimized technology and association 
             </p>

           </div>
         </div>
         <div data-aos="fade-up-right"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/mobile-shopping.png" alt="" />
                        </div>
             <h3 className="services-one__title">
               <Link to="software-development-platform/retail-and-ecommerce">
                 Retail &  <br /> Ecommerce
               </Link>
             </h3>
             <p className="services-one__text">
             In today's rapidly evolving online world, having a robust online presence is crucial for businesses
             </p>

           </div>
         </div>
         <div data-aos="slide-up"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/hrm.png" alt="" />
                        </div>
             <h3 className="services-one__title">
               <Link to="hrm">
                HRM
                <br/>
                <br/>
                
               </Link>
             </h3>
             <p className="services-one__text">
             Our talent acquisition team focus on offering the best. They have a deep understanding
             </p>

           </div>
         </div>
         <div data-aos="fade-up-left"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/academy.png" alt="" />
                        </div>
             <h3 className="services-one__title">
               <Link to='digital-marketing-academy'>
                 Digital Marketing  <br /> Institute
               </Link>
             </h3>
             <p className="services-one__text">
               There are many variations of passages of lorem im available,
               but majority suffered.
             </p>

           </div>
         </div>
       </div>
     </div>
     
   </section>
   {/*Services One End*/}
</div>
  )
}

export default CustomService