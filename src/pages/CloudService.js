import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ServiceSideMenu from '../components/ServiceSideMenu'
import Footer from './../components/Footer';
import Menu from './../components/Navbar';
import AccordionPage from './../components/Accordion';


const CloudService = () => {
  return (
<>
<Menu />

<Breadcrumbs pageurl="cloud-service"  subtitle="Cloud Service"/>

{/* <ServiceSideMenu /> */}
<section className="service-details">
  <div className="container">
    <div className="row">
      <div className="col-xl-8 col-lg-7">
        <div className="service-details__right">
          <div className="service-details__img">
            <img src="assets/images/resources/cloud.jpg" alt />
          </div>
          <div className="service-details__content">
            <h3 className="service-details__title">CLOUD SERVICE</h3>
            <p className="service-details__text ">Way WeDesign is a leading provider of cloud services, offering optimized technology and association with top providers such as AWS, Microsoft Azure, and Google. Our expert team in Cloud Management provides premium services that help businesses reduce IT costs, scale, maintain continuity, improve collaboration, and access automatic updates in a secure environment. Whether you're a small or large business, our services can help you overcome scalability obstacles and achieve successful cloud strategies.<br></br>
Way WeDesign’s cloud experts are one of the best in business and provide optimized cloud technology associating with the right cloud partners. With the best supporting team in Cloud Management, we provide premium cloud services too. Our cloud system offers you with reduced IT cost, scalability, business continuity, collaboration efficiency and access to automatic updates, all in a secured environment. At its core, cloud technology is about developing applications and services.<br></br>
Way WeDesign provides a variety of cloud services in association with AWS, Microsoft Azure, Google, and other leading providers. Our services are popular among businesses of all sizes across the globe.<br></br>
To overcome obstacles related to scalability, we recommend switching to our cloud platform. With the latest technological advancements and a great team, we are confident in our ability to provide successful cloud strategies.
</p>
          </div>
          {/* <div className="service-details__benefits">
            <div className="row">
              <div className="col-xl-6">
                <div className="service-details__benefits-text">
                  <h3 className="service-details__benefits-title">Why you Should Hire?</h3>
                  <p className="service-details__benefits-text">Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum.</p>
                  <ul className="list-unstyled service-details__benefits-list">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Refresing to get such a touch</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Duis aute irure dolor in in voluptate</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Velit esse cillum eu fugiat pariatur</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Duis aute irure dolor in in voluptate</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="service-details__benefits-img">
                  <img src="assets/images/resources/service-details__benefits-img.jpg" alt />
                </div>
              </div>
            </div>
          </div> */}
          <div className='py-5'>
          <h3 className="service-details__title ">FAQ</h3>

          <AccordionPage/>
          </div>
                
        
        </div>
      </div>
      <div className="col-xl-4 col-lg-5">
        <ServiceSideMenu/>
        
      </div>
    </div>
  </div>
</section>
<Footer/>





</> 
 )
}

export default CloudService