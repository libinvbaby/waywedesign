import React,{useEffect} from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Aos from "aos"
import 'aos/dist/aos.css' 
import Home from './pages/Home'
import About from './pages/About';
import Service from './pages/Service';
import CloudService from './pages/CloudService'
import DigitalMarketingAcademy from './pages/DigitalMarketingAcademy';
import Hrm from './pages/Hrm';
import DigitalMarketing from './pages/DigitalMarketing'
import SEO from './pages/SEO'
import SMM from './pages/SMM';
import GoogleAds from './pages/GoogleAds'
import GraphicDesigning from './pages/GraphicDesigning';
import SoftwareDevelopmentPlatform from './pages/SoftwarePlatformDevelopment';

const App = () => {
  useEffect(()=>{
    Aos.init({ duration:2000,
      easing: 'ease',
      delay: 100,
      duration: 1000 });
  },[])
  return (
    <div className="page-wrapper">
      <Router>
        {/* <BasicExample /> */}
        <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/cloud-service' element={<CloudService/>}/>
        <Route path='/digital-marketing-academy' element={<DigitalMarketingAcademy/>}/>
        <Route path='/hrm' element={<Hrm/>}/>
        <Route path='/digital-marketing' element={<DigitalMarketing/>}/>
        <Route path='/search-engine-optimization' element={<SEO/>}/>
        <Route path='/social-media-marketing' element={<SMM/>}/>
        <Route path='/google-ads' element={<GoogleAds/>}/>
        <Route path='/graphic-designing' element={<GraphicDesigning/>}/>
        <Route path='/software-development-platform' element={<SoftwareDevelopmentPlatform/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App