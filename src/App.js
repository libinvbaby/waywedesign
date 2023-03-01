import React,{useEffect} from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Aos from "aos"
import 'aos/dist/aos.css' 
import Home from './pages/Home'
import About from './pages/About';
import Service from './pages/Service';
import CloudService from './pages/CloudService'
import DigitalMarketingAcademy from './pages/DigitalMarketingAcademy';

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
        </Routes>
      </Router>
    </div>
  )
}

export default App