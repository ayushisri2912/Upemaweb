import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'

const officeBearersData = {
  president: {
    name: 'Shri Rajeshwar Singh',
    designation: 'President',
    company: 'Royal Grandeur Events & Exhibitions',
    location: 'Lucknow, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  tier2: [
    {
      name: 'Vikramaditya Khanna',
      designation: 'Vice President',
      company: 'Aura Stagecraft & Lighting Pvt. Ltd.',
      location: 'Noida / NCR',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Ananya Deshmukh',
      designation: 'General Secretary',
      company: 'Vivaha Luxury Weddings & MICE',
      location: 'Varanasi, Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
    }
  ],
  tier3: [
    {
      name: 'Amitabh Mehrotra',
      designation: 'Treasurer',
      company: 'Zenith Audio & Event Infrastructure',
      location: 'Kanpur, Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Gaurav Singhal',
      designation: 'Joint Secretary',
      company: 'Eclipse Production & Experiential',
      location: 'Agra, Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
    }
  ]
}

const OfficeBearers = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#D4A017] text-xs font-bold uppercase tracking-widest block mb-2">
            Leadership Hierarchy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2343] tracking-tight">
            Office Bearers
          </h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />
        </div>

        {/* Hierarchy Container */}
        <div className="space-y-8 md:space-y-12">
          
          {/* LEVEL 1: PRESIDENT (LARGER CARD) */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-lg bg-white rounded-2xl p-8 md:p-10 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group text-center relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0B2343] via-[#D4A017] to-[#0B2343]" />

              {/* President Profile Photo (Larger) */}
              <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto mb-6">
                <img
                  src={officeBearersData.president.image}
                  alt={officeBearersData.president.name}
                  className="w-full h-full object-cover rounded-full border-4 border-[#D4A017] shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 right-1 bg-[#0B2343] text-[#D4A017] text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-[#D4A017]/40 shadow-sm">
                  Apex Leader
                </span>
              </div>

              {/* President Details */}
              <span className="text-[#D4A017] font-bold text-sm uppercase tracking-wider block mb-1">
                {officeBearersData.president.designation}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B2343] mb-2 group-hover:text-[#D4A017] transition-colors">
                {officeBearersData.president.name}
              </h3>
              <p className="text-slate-600 font-medium text-sm md:text-base mb-3">
                {officeBearersData.president.company}
              </p>

              {/* Location with Icon */}
              <div className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-50 text-slate-500 text-xs font-medium border border-slate-100">
                <FiMapPin className="text-[#D4A017]" />
                <span>{officeBearersData.president.location}</span>
              </div>
            </motion.div>
          </div>

          {/* LEVEL 2: VICE PRESIDENT & GENERAL SECRETARY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {officeBearersData.tier2.map((bearer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center relative"
              >
                {/* Profile Photo */}
                <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-5">
                  <img
                    src={bearer.image}
                    alt={bearer.name}
                    className="w-full h-full object-cover rounded-full border-3 border-[#D4A017]/80 shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Designation */}
                <span className="text-[#D4A017] font-bold text-xs md:text-sm uppercase tracking-wider block mb-1">
                  {bearer.designation}
                </span>

                {/* Name */}
                <h3 className="text-xl md:text-2xl font-bold text-[#0B2343] mb-1.5 group-hover:text-[#D4A017] transition-colors">
                  {bearer.name}
                </h3>

                {/* Company Name */}
                <p className="text-slate-600 font-medium text-xs md:text-sm mb-3 line-clamp-1">
                  {bearer.company}
                </p>

                {/* Location */}
                <div className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                  <FiMapPin className="text-[#D4A017]" />
                  <span>{bearer.location}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LEVEL 3: TREASURER & JOINT SECRETARY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {officeBearersData.tier3.map((bearer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center relative"
              >
                {/* Profile Photo */}
                <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-5">
                  <img
                    src={bearer.image}
                    alt={bearer.name}
                    className="w-full h-full object-cover rounded-full border-3 border-[#D4A017]/80 shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Designation */}
                <span className="text-[#D4A017] font-bold text-xs md:text-sm uppercase tracking-wider block mb-1">
                  {bearer.designation}
                </span>

                {/* Name */}
                <h3 className="text-xl md:text-2xl font-bold text-[#0B2343] mb-1.5 group-hover:text-[#D4A017] transition-colors">
                  {bearer.name}
                </h3>

                {/* Company Name */}
                <p className="text-slate-600 font-medium text-xs md:text-sm mb-3 line-clamp-1">
                  {bearer.company}
                </p>

                {/* Location */}
                <div className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                  <FiMapPin className="text-[#D4A017]" />
                  <span>{bearer.location}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default OfficeBearers
