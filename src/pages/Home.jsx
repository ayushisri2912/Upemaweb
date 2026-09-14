import React from 'react'
import Hero from '../Components/HomeComponents/Hero'
import AboutSection from '../Components/HomeComponents/AboutSection'
import PillarsSection from '../Components/HomeComponents/PillarsSection'
import InitiativesSection from '../Components/HomeComponents/InitiativesSection'
import LeadershipSection from '../Components/HomeComponents/LeaderSection'
import BenefitsSection from '../Components/HomeComponents/BenefitsSection'
import StatsImpactSection from '../Components/HomeComponents/StatsImpactSection'
import TestimonialsSection from '../Components/HomeComponents/TestimonialsSection'
import InstagramFeed from '../Components/HomeComponents/InstagramFeed'
import LatestNewsSection from '../Components/HomeComponents/LatestNewsSection'
import CTASection from '../Components/HomeComponents/CTASection'

const Home = () => {
  return (
    <main className="w-full bg-[#F8F6F1] min-h-screen">
      {/* Restored Hero Section */}
      <Hero />
      <AboutSection/>
      <PillarsSection/>
      <InitiativesSection/>
      <LeadershipSection/>
      <BenefitsSection/>
      <StatsImpactSection/>
      <TestimonialsSection/>
      <LatestNewsSection/>
      <InstagramFeed/>
      <CTASection/>
      

      {/* <Hero/>
      <AboutSection/>
      <BenefitsSection/>
      <StatsImpactSection/>
      <PillarsSection/>
      <InitiativesSection/>
      <LeadershipSection/> */}
      
      
    </main>
  )
}

export default Home
