import React,{useEffect} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Aos from "aos"
import 'aos/dist/aos.css' 
import AnimatedRoutes from './AnimatedRoutes';
import Menu from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

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
      <Menu />
      <MobileMenu />
        <AnimatedRoutes />
        <Footer/>
      </Router>
    </div>
  )
}

export default App