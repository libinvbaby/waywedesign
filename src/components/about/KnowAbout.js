import React from 'react'

const KnowAbout = () => {
  return (
    <div>
        <section className="about-two">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 align-self-center">
        <div data-aos="slide-right" className="about-two__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
          <div className="about-two__img">
            <img src="assets/images/resources/about-two-img-1.jpg" alt />
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="about-two__right">
          <div className="section-title text-left">
            <span className="section-title__tagline">Get to Know About us</span>
            <h2 className="section-title__title">ABOUT US</h2>
          </div>
          <p style={{textAlign:'justify'}} className="about-two__text-1">Way WeDesign is a leading IT/ITES provider in cochin with 5 + years of proven track record in serving customers worldwide with a passion for business innovation and always striving to take our company to new pinnacles of excellence.<br/>
Our team stays at the forefront of technology advancements, constantly researching the latest developments to ensure that we offer our customers the best possible services. We invest in state-of-the-art facilities and technologies to be at the cutting edge of the industry.<br/>
We understand the importance of developing strong relationships and ensuring customer satisfaction. Our approach combines agility, innovation, technology, and relationships, which has led to our exponential growth in demand for our services across various verticals including Enterprise Mobility, Web Technologies, Internet Marketing, Business Services, Consultancy Services, Cloud Services, Hosting Services and Application Development.<br/>
We are committed to providing the highest level of service and support to our clients, and we will work closely with you to understand your unique needs and goals to deliver the best possible solutions
</p>
          {/* <p className="about-two__text-2">IZEETAK is the Largest Global IT Solution &amp; Services Business */}
            {/* in the World.</p> */}
          <div className="about-two__progress-wrap">
            <div className="about-two__progress">
              <div className="about-two__progress-box">
                <div className="circle-progress" data-options="{ &quot;value&quot;: 0.9,&quot;thickness&quot;: 3,&quot;emptyFill&quot;: &quot;#eef3f7&quot;,&quot;lineCap&quot;: &quot;square&quot;, &quot;size&quot;: 138, &quot;fill&quot;: { &quot;color&quot;: &quot;#42d9be&quot; } }">
                </div>{/* /.circle-progress */}
                <span>90%</span>
              </div>
              <div className="about-two__progress-content">
                <h3>Successful Projects</h3>
              </div>
            </div>
            <div className="about-two__progress">
              <div className="about-two__progress-box">
                <div className="circle-progress" data-options="{ &quot;value&quot;: 0.5,&quot;thickness&quot;: 3,&quot;emptyFill&quot;: &quot;#eef3f7&quot;,&quot;lineCap&quot;: &quot;square&quot;, &quot;size&quot;: 138, &quot;fill&quot;: { &quot;color&quot;: &quot;#42d9be&quot; } }">
                </div>{/* /.circle-progress */}
                <span>50%</span>
              </div>{/* /.about-five__progress-box */}
              <div className="about-two__progress-content">
                <h3>Problem Solved</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default KnowAbout