import React from 'react'
import HeroSection from '../components/landingpage/HeroSection'
import FeaturesSection from '../components/landingpage/FeaturesSection'
import { features } from '../assets/data'

const LandingPage = () => {
  return (
    <div>
      {/* HeroSection */}
      <HeroSection/>
      {/* Features */}
      <FeaturesSection features={features}/>
      {/* Pricing */}

    </div>
    
  )
}

export default LandingPage
