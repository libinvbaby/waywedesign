import React from 'react';

const BannerVideo = () => {
  return (
    <div style={{margin:" -10px"}}>
      <video style={{width:"100%",height:"100%"}} loop autoPlay muted>
        <source src="/assets/images/banner/banner-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BannerVideo;
