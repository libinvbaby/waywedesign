import React, { useState, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MissionVisionSlider = () => {
  const owlRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNavClick = (index) => {
    setActiveSlide(index);
    owlRef.current.to(index);
  };

  return (
    <div className="container owl-container">
      {/* <div className="slider-nav">
        <button onClick={() => handleNavClick(0)}>Mission</button>
        <button onClick={() => handleNavClick(1)}>Vision</button>
      </div> */}
      <OwlCarousel
        ref={owlRef}
        loop
        margin={50}
        items={1}
        autoplay={true}
        className="owl-theme carousel-container"
        
      >
        <div className="item  owl-carousel-new">
          <h4>Mission</h4>
          <p>
            Delivering innovative and reliable solutions to fulfill the
            requirements of our clients with exceptional standards and
            uncompromising integrity
          </p>
        </div>
        <div className="item owl-carousel-item">
          <h4>Vision</h4>
          <p>
            To be leading Web Solutions Company in the IT industry, our goal is
            to continue to solidify our position in the market. We know that the
            success of our clients
          </p>
        </div>
        <div className="item owl-carousel-item">
          <h4>Core Values</h4>
          <p>
          Our core values of integrity, innovation, and customer focus are the foundation of our culture. They inspire us to strive for excellence and set us apart as a trusted leader in our industry
          </p>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default MissionVisionSlider;
