import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const DirectoryCTA = ({ onExploreClick }) => {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 md:py-24 border-t border-slate-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] font-serif tracking-tight mb-4">
          Looking for the Right Event Partner?
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal mb-8">
          Explore verified UPEMA members and find trusted professionals for your next wedding, corporate summit, or exhibition.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary Button */}
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B1F3A] text-white hover:bg-[#122B4A] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
          >
            <span>Explore Members</span>
            <FiArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Button */}
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0B1F3A] border border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
          >
            <span>Become a Member</span>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default DirectoryCTA
