import React from 'react'
import { Routes, Route,useLocation } from 'react-router-dom'
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
import DashboardReporting from './pages/DashboardReporting'
import MobileAppDevelopment from './pages/MobileAppDevelopment'
import PenTesting from './pages/PenTesting';
import WebDevelopment from './pages/WebDevelopment';
import IotDevelopment from './pages/IotDevelopment'
import Media from './pages/Media'
import RetailAndEcommerce from './pages/RetailAndEcommerce'
import AssessementPlatforms from './pages/AssessementPlatforms'
import PayrollManagementSoftwares from './pages/PayrollManagementSoftwares'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import { AnimatePresence } from 'framer-motion';
import BlogDeatil from './pages/BlogDeatil';

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path='/'  element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Service/>}/>
    <Route path='/cloud-service' element={<CloudService/>}/>
    <Route path='/digital-marketing-academy' element={<DigitalMarketingAcademy/>}/>
    <Route path='/hrm' element={<Hrm/>}/>
    <Route path='/digital-marketing' element={<DigitalMarketing/>}/>
    <Route path='/digital-marketing/search-engine-optimization' element={<SEO/>}/>
    <Route path='/digital-marketing/social-media-marketing' element={<SMM/>}/>
    <Route path='/digital-marketing/google-ads' element={<GoogleAds/>}/>
    <Route path='/digital-marketing/graphic-designing' element={<GraphicDesigning/>}/>
    <Route path='/software-development-platform' element={<SoftwareDevelopmentPlatform/>}/>
    <Route path='/software-development-platform/dashboard-reporting' element={<DashboardReporting/>}/>
    <Route path='/software-development-platform/mobile-app-development' element={<MobileAppDevelopment/>}/>
    <Route path='/software-development-platform/pen-testing' element={<PenTesting/>}/>
    <Route path='/software-development-platform/web-development' element={<WebDevelopment/>}/>
    <Route path='/software-development-platform/iot-development' element={<IotDevelopment/>}/>
    <Route path='/software-development-platform/media' element={<Media/>}/>
    <Route path='/software-development-platform/retail-and-ecommerce' element={<RetailAndEcommerce/>}/>
    <Route path='/software-development-platform/assessement-platforms' element={<AssessementPlatforms/>}/>
    <Route path='/software-development-platform/payroll-management-softwares' element={<PayrollManagementSoftwares/>}/>
    <Route path="/careers" element={<Careers/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/blog/:slug" element={<BlogDeatil />} />

    </Routes>
    </AnimatePresence>
    )
}

export default AnimatedRoutes