import React from 'react'
import HeroSection from '../components/landingpage/HeroSection'
import FeaturesSection from '../components/landingpage/FeaturesSection'
import { features } from '../assets/data'
import PricingSection from '../components/landingpage/PricingSection'
import FooterSection from '../components/landingpage/FooterSection'
import TestimonialSection from '../components/landingpage/TestimonialSection'
import CTASection from '../components/landingpage/CTASection'

const LandingPage = () => {
  return (
    <div>
      {/* HeroSection */}
      <HeroSection/>
      {/* Features */}
      <FeaturesSection features={features}/>
      {/* Pricing */}
      <PricingSection/>
      {/* Testimonial Section */}
      <TestimonialSection/>
      {/* CTA Section */}
      <CTASection/>
      {/* Footer Section */}
      <FooterSection/>
    </div>
    
  )
}

export default LandingPage
