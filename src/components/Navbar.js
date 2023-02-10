import React,{useState} from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [hiddenMenu, setHiddenMenu] = useState(false)
  return (
    <div>
        <header className="main-header clearfix">
      <div className="main-header__top clearfix">
        <div className="main-header__top-inner clearfix">
          <div className="main-header__top-left">
            <ul className="list-unstyled main-header__top-address">
              <li>
                <div className="icon">
                  <span className="icon-pin" />
                </div>
                <div className="text">
                  <p>66 Road Broklyn Golden Street. New York</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-email" />
                </div>
                <div className="text">
                  <p><a href="mailto:needhelp@company.com">needhelp@company.com</a></p>
                </div>
              </li>
            </ul>
          </div>
          <div className="main-header__top-right">
            <div className="main-header__top-right-text">
              <p><span>Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?</p>
            </div>
            <div className="main-header__top-right-social">

              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-facebook" /></a>
              <a href="#"><i className="fab fa-pinterest-p" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-menu clearfix">
        <div className="main-menu-wrapper clearfix">
          <div className="main-menu-wrapper-inner clearfix">
            <div className="main-menu-wrapper__left clearfix">
              <div className="main-menu-wrapper__logo">
                    <Link to='/'><img src="assets/images/resources/logo-1.png" alt /></Link>
                
              </div>
              <div className="main-menu-wrapper__main-menu">
                <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                <ul className="main-menu__list">
                <li><Link to='/'>Home</Link></li>            
                <li><Link to='/about'>About</Link></li>            
                <li><Link to='/services'>Services</Link></li>            
                <li><Link to='/projects'>Projects</Link></li>            
                <li><Link to='/blog'>Blog</Link></li>            
                <li><Link to='/contact'>Contact</Link></li>            
                      
                </ul>
              </div>
            </div>
            <div className="main-menu-wrapper__right">
              <div className="main-menu-wrapper__call">
                <div className="main-menu-wrapper__call-icon">
                  <img src="assets/images/shapes/phone-icon.png" alt />
                </div>
                <div className="main-menu-wrapper__call-number">
                  <p>Have any questions?</p>
                  <h5><a href="tel:926668880000">Free: + 92 666 888 0000</a></h5>
                </div>
              </div>
              <div className="main-menu-wrapper__search-box-cart-box">
                <a href="#" className="main-menu-wrapper__search search-toggler icon-magnifying-glass" />

                <a href="contact.html" className="main-menu-wrapper__cart icon-avatar" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div className="stricky-header stricked-menu main-menu">
      <div className="sticky-header__content" />{/* /.sticky-header__content */}
    </div>{/* /.stricky-header */}
    </div>
  )
}

export default Navbar