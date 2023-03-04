import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import Menu from '../components/Navbar'

const Contact = () => {
  return (
   <div className="page-wrapper">
  <Menu/>
  
  <Breadcrumbs  pageurl="contact" subtitle="Contact" />
  {/*Page Header End*/}
  {/*Contact Page Start*/}
  <section className="contact-page">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4">
          <div className="contact-page__left">
            <div className="section-title text-left">
              <span className="section-title__tagline">Contact with us</span>
              <h2 className="section-title__title">Write A Message </h2>
            </div>
            <p className="contact-page__text">Lorem ipsum is simply free text available the market dolor sit
              amet, consectetur notted adipisicing elit sed do.</p>
            <div className="contact-page__social-list">
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-facebook" /></a>
              <a href="#"><i className="fab fa-pinterest-p" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8">
          <div className="contact-page__right">
            <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated" noValidate="novalidate">
              <div className="row">
                <div className="col-xl-6">
                  <div className="comment-form__input-box">
                    <input type="text" placeholder="Full Name" name="name" />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="comment-form__input-box">
                    <input type="email" placeholder="Email Address" name="email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="comment-form__input-box">
                    <textarea name="message" placeholder="Write Message" defaultValue={""} />
                  </div>
                  <button type="submit" className="thm-btn comment-form__btn">Send a message</button>
                </div>
              </div>
            </form>
            <div className="result" />{/* /.result */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Contact Page End*/}
  {/*Contact Details End*/}
  <section className="contact-details">
    <div className="container">
      <div className="contact-details__inner">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="contact-details__single">
              <div className="contact-details__icon">
                <span className="icon-map" />
              </div>
              <div className="contact-details__content">
                <p className="contact-details__sub-title">Office</p>
                <h5>Way WeDesign,
47/1403A,Ivees, MRERA-69, Chalikkavattom, Vennala
Kochi, Kerala
682028</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="contact-details__single contact-details__single-2">
              <div className="contact-details__icon">
                <span className="icon-email-1" />
              </div>
              <div className="contact-details__content">
                <p className="contact-details__sub-title">Send Email</p>
                <h4><a href="mailto:needhelp@company.com">Contact@waywedesign.com</a></h4>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="contact-details__single contact-details__single-3">
              <div className="contact-details__icon">
                <span className="icon-phone-call" />
              </div>
              <div className="contact-details__content">
                <p className="contact-details__sub-title">Call Anytime</p>
                <h4><a href="tel:+91799 464 3673">+91 799 464 3673</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Contact Details End*/}
  {/*Google Map Start*/}
  <section className="contact-page-google-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" className="contact-page-google-map__one" allowFullScreen />
  </section>
  {/*Google Map End*/}
  <Footer/>
</div>

  )
}

export default Contact