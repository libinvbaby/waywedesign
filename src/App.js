import React,{useEffect} from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Aos from "aos"
import 'aos/dist/aos.css' 
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About';
import Footer from './components/Footer';
import Service from './pages/Service';

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
      <Navbar />
        <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App