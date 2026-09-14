import React from 'react'
import { motion } from 'framer-motion'
import DirectoryStats from './DirectoryStats'

const DirectoryHero = () => {
  return (
    <section className="relative w-full min-h-[460px] md:min-h-[520px] bg-[#0B1F3A] flex items-center justify-center overflow-hidden text-white font-sans border-b border-[#C9A45C]/30">
      {/* Background Image with Dark Navy Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      
      {/* Dark Navy Overlay (#0B1F3A with high opacity for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/90 via-[#0B1F3A]/85 to-[#0B1F3A]/95 pointer-events-none" />

      {/* Decorative Radial Lighting Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C9A45C]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Minimal Decorative Gold Line Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 border border-[#C9A45C]/15 rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-[#C9A45C]/15 rounded-full pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-14">
        
        {/* Small Gold Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9A45C]/40 text-[#C9A45C] text-xs font-bold uppercase tracking-widest mb-5 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
          UPEMA MEMBER DIRECTORY
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
        >
          <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
            Find Trusted Event Professionals Across
          </span>{' '}
          <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
            Uttar Pradesh
          </span>
        </motion.h1>

        {/* Thin Gold Accent Line Below Heading */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "96px" }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="h-1 bg-[#C9A45C] mx-auto rounded-full mt-5 mb-5 shadow-[0_0_12px_rgba(201,164,92,0.6)]"
        />

        {/* Supporting Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Discover verified wedding planners, event professionals, production companies and service providers from across Uttar Pradesh.
        </motion.p>

        {/* Integrated Statistics Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <DirectoryStats />
        </motion.div>
      </div>
    </section>
  )
}

export default DirectoryHero
