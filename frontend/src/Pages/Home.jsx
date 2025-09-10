import React from 'react'
import Hero from '../Components/Hero'
import Testimonials from '../Components/Testimonials'

import ContactBanner from '../Components/ContactBanner'
import TeamCarousel from '../Components/TeamCarousel'
import ServicesShowcase from '../Components/ServicesShowcase'
import Carousel from '../Components/Carousel'

const Home = () => {
  return (
    <div>
      
      <div className='bg-gradient-to-b from-black via-indigo-950 to-black
'><Carousel /></div>
        <Hero/>
        <ServicesShowcase />
        <Testimonials />
        <ContactBanner/>
        <TeamCarousel />
    </div>
  )
}

export default Home