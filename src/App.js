import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About';
import Footer from './components/Footer';
import Service from './pages/Service';

const App = () => {
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