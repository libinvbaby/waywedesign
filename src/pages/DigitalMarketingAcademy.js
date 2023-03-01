import React from 'react'
import AccordionPage from '../components/Accordion'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import Menu from '../components/Navbar'
import ServiceSideMenu from '../components/ServiceSideMenu'

const digitalMarketingAcademy = () => {
  return (
    <>
    <Menu />
<Breadcrumbs pageurl="digital-marketing-academy"  subtitle="DIGITAL MARKETING ACADEMY"/>

{/* <ServiceSideMenu /> */}
<section className="service-details">
  <div className="container">
    <div className="row">
      <div className="col-xl-8 col-lg-7">
        <div className="service-details__right">
          <div className="service-details__img">
            <img src="assets/images/resources/digital-marketing-academy.jpg" alt />
          </div>
          <div className="service-details__content">
            <h3 className="service-details__title">DIGITAL MARKETING ACADEMY</h3>
            <p className="service-details__text ">The scope of digital marketing has greatly expanded in recent years, as more and more businesses recognize the importance of having a strong online presence. With the rise of e-commerce and the increasing use of the internet for research and communication, digital marketing has become a crucial tool for reaching and engaging with customers.<br/>
Given the growing demand for digital marketing skills and the rapid pace of change in the industry, it's no surprise that many individuals are seeking to develop their digital marketing knowledge and expertise. This is why Way WeDesign started its digital market academy - to provide individuals with the training and skills they need to succeed in this exciting and dynamic field.<br/>
By offering a comprehensive curriculum that covers the latest digital marketing techniques and tools, the digital market academy provides individuals with the knowledge and skills they need to succeed in a variety of roles, from marketing to sales and beyond. Whether you're just starting out in your career or looking to take your skills to the next level, the digital market academy is an excellent resource for anyone looking to succeed in the world of digital marketing.

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

export default digitalMarketingAcademy