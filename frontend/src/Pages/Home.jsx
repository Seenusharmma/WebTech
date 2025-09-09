import React from 'react'
import Hero from '../Components/Hero'
import Testimonials from '../Components/Testimonials'
import FullScreenCarousel from '../Components/FullScreenCarousel'
import ContactBanner from '../Components/ContactBanner'
import TeamCarousel from '../Components/TeamCarousel'
import ServicesShowcase from '../Components/ServicesShowcase'

const Home = () => {
  return (
    <div>
      <FullScreenCarousel />
        <Hero/>
        <ServicesShowcase />
        <Testimonials />
        <ContactBanner/>
        <TeamCarousel />
    </div>
  )
}

export default Home