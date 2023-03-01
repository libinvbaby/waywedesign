import React from 'react'
import { Link } from 'react-router-dom'
const ServiceSideMenu = () => {
  return (
    
    
//    
<>
<div className="service-details__sidebar">
          <div className="service-details__sidebar-service">
            <h4 className="service-details__sidebar-title">Categories</h4>
            <ul className="service-details__sidebar-service-list list-unstyled">
              <li><Link to="">Software & Platform Development <span className="icon-right-arrow" /></Link>
              </li>
              <li><Link to="">Digital Marketing <span className="icon-right-arrow" /></Link>
              </li>
              <li><Link to="/cloud-service">Cloud Service<span className="icon-right-arrow" /></Link></li>
              <li><Link to="">HRM <span className="icon-right-arrow" /></Link></li>
              <li><Link to=""> Digital Academy<span className="icon-right-arrow" /></Link></li>
              <li><Link to=""> <span className="icon-right-arrow" /></Link></li>
            </ul>
          </div>
          <div className="service-details__need-help">
            <div className="service-details__need-help-bg" style={{backgroundImage: 'url(assets/images/backgrounds/service-details-need-help-bg.jpg)'}}>
            </div>
            <div className="service-details__need-help-bg-overly" />
            <div className="service-details__need-help-icon">
              <img src="assets/images/shapes/phone-icon.png" alt />
            </div>
            <h2 className="service-details__need-help-text-box">Get Professional Help to Solve <br /> IT
              Software Problems</h2>
            <div className="service-details__need-help-contact">
              <a href="tel:926668880000">92 666 888 0000</a>
              <p>Call Anytime Our <br /> to Experts</p>
            </div>
          </div>
        </div></>
  )
}

export default ServiceSideMenu