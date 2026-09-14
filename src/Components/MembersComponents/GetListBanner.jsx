import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const GetListBanner = () => {
  return (
    <section className="relative w-full bg-[#0B1F3A] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#C9A45C]/30">
      {/* Background Radial Glow & Gold Geometry */}
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#C9A45C]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 border border-[#C9A45C]/15 rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-[#C9A45C] text-xs font-extrabold uppercase tracking-widest block mb-2">
            JOIN THE UPEMA NETWORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight leading-tight">
            Get Your Business Listed
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            Showcase your business to clients, wedding couples, and event industry professionals across Uttar Pradesh.
          </p>
        </motion.div>

        {/* Right Side Action */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-end flex-shrink-0"
        >
          <Link
            to="/membership"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#C9A45C] text-[#0B1F3A] font-extrabold text-sm uppercase tracking-wider hover:bg-[#d8b56d] hover:scale-105 transition-all duration-300 shadow-[0_4px_25px_rgba(201,164,92,0.35)]"
          >
            <span>Get Listed</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>

          <span className="mt-3 text-xs text-slate-300 font-medium flex items-center gap-1.5">
            <FiCheckCircle className="text-[#C9A45C]" /> Become a verified UPEMA member
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default GetListBanner
