import React from 'react'
import AboutUs from '../Components/AboutUs'
import AboutHero from '../Components/AboutHero'
import AboutMid from '../Components/AboutMid'
import Stepper from '../Components/Stepper'
import JoinUs from '../Components/JoinUs'


const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutMid />
      <Stepper />
        <AboutUs/>
        <JoinUs />
        
    </div>
  )
}

export default About