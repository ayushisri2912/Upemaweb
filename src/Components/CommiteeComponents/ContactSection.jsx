import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMail } from 'react-icons/fi'

const ContactSection = () => {
  return (
    <section className="relative w-full bg-[#0B2343] text-white py-20 md:py-24 overflow-hidden">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4A017]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-[#D4A017]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Top Gold Icon Badge */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#D4A017]/15 text-[#D4A017] border border-[#D4A017]/30 mb-6 shadow-inner">
          <FiMail className="w-6 h-6" />
        </div>

        {/* Centered Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
          Need to Contact Executive Committee?
        </h2>

        {/* Short Supporting Text */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          Have queries regarding state policy dialogues, district accreditation, single-window clearances, or committee membership? Connect directly with the UPEMA secretariat.
        </p>

        {/* Gold Primary Button */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D4A017] text-[#0B2343] font-bold text-sm uppercase tracking-wider hover:bg-[#c39213] hover:scale-105 transition-all duration-300 shadow-[0_4px_25px_rgba(212,160,23,0.35)]"
          >
            <span>Contact Us</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
