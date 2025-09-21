import React from 'react'
import Navbar from './Components/Navbar'

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Gallery from './Pages/Gallery'
import Review from './Pages/Review'
import Contact from './Pages/Contact'
import Footer from './Components/Footer.jsx'
import ServiceDetail from './Pages/ServiceDetail.jsx'
import FigmaDesigns from './Pages/FigmaDesigns.jsx'
import WebDevelopment from './Pages/WebDevelopment.jsx'
import AppDevelopment from './Pages/AppDevelopment.jsx'
import GraphicsDesign from './Pages/GraphicsDesign.jsx'
import CloudDeployment from './Components/CloudDeployment.jsx'
import AiAutomation from './Components/AiAutomation.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Service/>}/>
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/reviews' element={<Review/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/* Details page routing */}
            <Route path="/figma-designs" element={<FigmaDesigns />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/graphics-design" element={<GraphicsDesign />} />
            <Route path='/cloud-deployment' element={<CloudDeployment/>} />
            <Route path='/ai-automation' element={<AiAutomation/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
