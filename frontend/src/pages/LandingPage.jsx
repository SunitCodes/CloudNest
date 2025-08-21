import React, { useEffect } from 'react'
import HeroSection from '../components/landingpage/HeroSection'
import FeaturesSection from '../components/landingpage/FeaturesSection'
import { features } from '../assets/data'
import PricingSection from '../components/landingpage/PricingSection'
import FooterSection from '../components/landingpage/FooterSection'
import TestimonialSection from '../components/landingpage/TestimonialSection'
import CTASection from '../components/landingpage/CTASection'
import { useClerk, useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const {openSignIn, openSignUp} = useClerk();
  const {isSignedIn} = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if(isSignedIn){
      navigate("/dashboard")
    }
  }, [isSignedIn, navigate]);

  return (
    <div>
      {/* HeroSection */}
      <HeroSection openSignIn={openSignIn} openSignUp={openSignUp}/>
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
