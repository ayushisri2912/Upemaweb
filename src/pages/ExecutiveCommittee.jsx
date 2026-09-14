import React from 'react'
import HeroSection from '../Components/CommiteeComponents/HeroSection'
import AboutSection from '../Components/CommiteeComponents/AboutSection'
import OfficeBearers from '../Components/CommiteeComponents/OfficeBearers'
import ExecutiveMembers from '../Components/CommiteeComponents/ExecutiveMembers'
import RolesSection from '../Components/CommiteeComponents/RolesSection'
import OrganizationStructure from '../Components/CommiteeComponents/OrganizationStructure'
import MeetingSection from '../Components/CommiteeComponents/MeetingSection'
import ContactSection from '../Components/CommiteeComponents/ContactSection'

const ExecutiveCommittee = () => {
  return (
    <main className="w-full bg-white min-h-screen selection:bg-[#D4A017] selection:text-[#0B2343]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Executive Committee */}
      <AboutSection />

      {/* 3. Office Bearers Hierarchy */}
      <OfficeBearers />

      {/* 4. Executive Members Responsive Grid */}
      <ExecutiveMembers />

      {/* 5. Roles & Responsibilities */}
      <RolesSection />

      {/* 6. Organization Structure Hierarchy */}
      <OrganizationStructure />

      {/* 7. Executive Committee Meetings Gallery */}
      <MeetingSection />

      {/* 8. Contact CTA Section */}
      <ContactSection />
    </main>
  )
}

export default ExecutiveCommittee
