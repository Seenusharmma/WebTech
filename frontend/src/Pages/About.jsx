import React from 'react'
import AboutUs from '../Components/AboutUs'
import AboutHero from '../Components/AboutHero'
import AboutMid from '../Components/AboutMid'
import Stepper from '../Components/Stepper'


const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutMid />
      <Stepper />
        <AboutUs/>
        
    </div>
  )
}

export default About