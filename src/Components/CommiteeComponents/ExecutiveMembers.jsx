import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiX, FiCheckCircle, FiBriefcase } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa6'

const executiveMembersData = [
  {
    id: 1,
    name: 'Alok Srivastava',
    designation: 'Executive Member',
    company: 'Avadh Stagecraft & Rigging',
    location: 'Lucknow, UP',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    email: 'alok.srivastava@upema.in',
    phone: '+91 98390 12345',
    linkedin: 'https://linkedin.com',
    bio: 'Specialist in high-capacity truss rigging, sound acoustic design, and venue technical compliance with over 18 years in North India event industry.',
    portfolio: ['High-Voltage Stage Rigging Safety', 'State Festival Technical Architecture', 'Venue Compliance & Permits']
  },
  {
    id: 2,
    name: 'Pooja Tandon',
    designation: 'Executive Member',
    company: 'Braj Heritage & Destination Weddings',
    location: 'Mathura / Agra, UP',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    email: 'pooja.tandon@upema.in',
    phone: '+91 94120 67890',
    linkedin: 'https://linkedin.com',
    bio: 'Pioneer in promoting heritage event tourism, royal palace decor, and regional artisan welfare across Western UP and Braj region.',
    portfolio: ['Destination Wedding Promotion', 'Artisan & Decorator Welfare', 'Cultural Heritage Events']
  },
  {
    id: 3,
    name: 'Sanjay Aggarwal',
    designation: 'Executive Member',
    company: 'Purvanchal Light & Sound Systems',
    location: 'Gorakhpur, UP',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    email: 'sanjay.aggarwal@upema.in',
    phone: '+91 99180 34567',
    linkedin: 'https://linkedin.com',
    bio: 'Renowned AV technician and stage fabricator driving single-window clearance protocols and vendor welfare in Eastern Uttar Pradesh.',
    portfolio: ['Single-Window Licensing Cell', 'AV & Acoustics Standards', 'Vendor Dispute Settlement']
  },
  {
    id: 4,
    name: 'Er. Alok Verma',
    designation: 'Executive Member',
    company: 'Verma Caterers & Hospitality Solutions',
    location: 'Kanpur, UP',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    email: 'alok.verma@upema.in',
    phone: '+91 93360 89012',
    linkedin: 'https://linkedin.com',
    bio: 'Expert in large-scale event catering logistics, food safety certifications, and banquet sustainability benchmarks.',
    portfolio: ['Food Safety & Hygiene Audit', 'Mass Catering Infrastructure', 'Eco-friendly Event Waste Disposal']
  },
  {
    id: 5,
    name: 'Ritu Rastogi',
    designation: 'Executive Member',
    company: 'Glitz Experiential & Brand Activations',
    location: 'Ghaziabad / NCR',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    email: 'ritu.rastogi@upema.in',
    phone: '+91 98100 54321',
    linkedin: 'https://linkedin.com',
    bio: 'Corporate brand activation strategist with expertise in trade expos, government summits, and immersive LED visual design.',
    portfolio: ['Corporate Summits & Expos', 'LED Visual Mapping & Tech', 'Women Entrepreneurship Desk']
  },
  {
    id: 6,
    name: 'Deepak Saxena',
    designation: 'Executive Member',
    company: 'Saxena Security & Crowd Management',
    location: 'Bareilly, UP',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    email: 'deepak.saxena@upema.in',
    phone: '+91 94560 98765',
    linkedin: 'https://linkedin.com',
    bio: 'Fire safety auditor and security expert overseeing crowd flow protocols, emergency egress, and VIP security clearances.',
    portfolio: ['Crowd Safety & Fire Audit', 'Emergency Protocols Desk', 'Security Accreditation']
  },
  {
    id: 7,
    name: 'Meenakshi Sharma',
    designation: 'Executive Member',
    company: 'Sanskriti Cultural & Live Shows',
    location: 'Prayagraj, UP',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
    email: 'meenakshi.sharma@upema.in',
    phone: '+91 94150 23456',
    linkedin: 'https://linkedin.com',
    bio: 'Specialist in religious festival infrastructure, mega congregation coordination, and classical artist management.',
    portfolio: ['Kumbh & Mega Event Planning', 'Artist & Performer Welfare', 'Government Cultural Cell']
  },
  {
    id: 8,
    name: 'Vikash Gupta',
    designation: 'Executive Member',
    company: 'Gupta Tentage & Temporary Structures',
    location: 'Jhansi, UP',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    email: 'vikash.gupta@upema.in',
    phone: '+91 95590 76543',
    linkedin: 'https://linkedin.com',
    bio: 'Master fabricator of weather-resistant German hangars, waterproofing solutions, and Bundelkhand regional event development.',
    portfolio: ['German Hangar Fabrication', 'Bundelkhand Chapter Ops', 'Structural Wind Audit']
  }
]

const ExecutiveMembers = () => {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#D4A017] text-xs font-bold uppercase tracking-widest block mb-2">
            State Advisory Council
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2343] tracking-tight">
            Executive Members
          </h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />
        </div>

        {/* Responsive Grid: Desktop 4 cards, Tablet 2 cards, Mobile 1 card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {executiveMembersData.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group text-center"
            >
              <div>
                {/* Circular Photo */}
                <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-3 border-[#D4A017]/50 group-hover:border-[#D4A017] transition-all shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-[#0B2343] mb-1 group-hover:text-[#D4A017] transition-colors leading-snug">
                  {member.name}
                </h3>

                {/* Designation Tag */}
                <span className="inline-block text-[#D4A017] font-semibold text-xs uppercase tracking-wider mb-2">
                  {member.designation}
                </span>

                {/* Company Name */}
                <p className="text-slate-600 text-xs font-medium mb-3 line-clamp-1">
                  {member.company}
                </p>

                {/* Location */}
                <div className="flex items-center justify-center gap-1 text-xs text-slate-500 font-medium mb-5">
                  <FiMapPin className="text-[#D4A017] flex-shrink-0" />
                  <span>{member.location}</span>
                </div>
              </div>

              {/* Card Footer: Social Icons & View Profile Button */}
              <div>
                {/* Social/Contact Icons */}
                <div className="flex items-center justify-center gap-3 pt-3 border-t border-slate-100 mb-4 text-slate-400">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 hover:bg-[#0B2343] hover:text-[#D4A017] hover:border-[#0B2343] flex items-center justify-center transition-all duration-300"
                    title={member.email}
                  >
                    <FiMail className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 hover:bg-[#0B2343] hover:text-[#D4A017] hover:border-[#0B2343] flex items-center justify-center transition-all duration-300"
                    title={member.phone}
                  >
                    <FiPhone className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 hover:bg-[#0B2343] hover:text-[#D4A017] hover:border-[#0B2343] flex items-center justify-center transition-all duration-300"
                    title="LinkedIn Profile"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Small View Profile Button */}
                <button
                  onClick={() => setSelectedMember(member)}
                  className="w-full py-2 px-4 rounded-xl bg-[#0B2343] text-white hover:bg-[#D4A017] hover:text-[#0B2343] text-xs font-bold uppercase tracking-wider transition-colors duration-300 shadow-sm"
                >
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MEMBER DETAIL MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2343]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-[#0B2343] hover:text-white flex items-center justify-center transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#D4A017]"
                />
                <div>
                  <span className="text-[#D4A017] text-xs font-bold uppercase tracking-wider block">
                    {selectedMember.designation}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0B2343]">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    {selectedMember.company}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                    <FiMapPin className="text-[#D4A017]" />
                    <span>{selectedMember.location}</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#0B2343] uppercase tracking-wider mb-2">
                  Biography & Background
                </h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Key Portfolios */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#0B2343] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FiBriefcase className="text-[#D4A017]" /> Key Areas of Expertise
                </h4>
                <div className="space-y-2">
                  {selectedMember.portfolio.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <FiCheckCircle className="text-[#D4A017] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact Buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="flex-1 py-2.5 rounded-xl bg-[#0B2343] text-white hover:bg-[#D4A017] hover:text-[#0B2343] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <FiMail /> Email Member
                </a>
                <a
                  href={`tel:${selectedMember.phone}`}
                  className="flex-1 py-2.5 rounded-xl border border-slate-300 text-[#0B2343] hover:bg-slate-100 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <FiPhone /> Call Member
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ExecutiveMembers
