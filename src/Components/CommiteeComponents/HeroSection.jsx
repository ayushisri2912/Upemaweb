import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[480px] md:min-h-[560px] flex items-center justify-center bg-[#0B2343] overflow-hidden text-white font-sans">
      {/* Background Image with Dark Navy Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      
      {/* Dark Navy Overlay (#0B2343 with high opacity) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2343]/90 via-[#0B2343]/85 to-[#0B2343]/95 pointer-events-none" />

      {/* Decorative Radial Lighting Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4A017]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        
        {/* Top Tagline Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-6 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
          UPEMA Leadership & Governance
        </motion.div>

        {/* Main Large Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
        >
          <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
            Executive
          </span>{' '}
          <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
            Committee
          </span>
        </motion.h1>

        {/* Thin Gold Accent Line Below Heading */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "96px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-[#D4A017] mx-auto rounded-full mt-5 mb-6 shadow-[0_0_12px_rgba(212,160,23,0.6)]"
        />

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Leading UPEMA with Vision, Experience & Commitment
        </motion.p>
      </div>

      {/* Decorative Bottom Curve subtle border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}

export default HeroSection
