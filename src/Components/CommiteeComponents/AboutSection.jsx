import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[850px] mx-auto text-center"
      >
        {/* Subtle Decorative Icon/Badge */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0B2343]/5 text-[#D4A017] mb-4 border border-[#D4A017]/20 shadow-sm">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2343] tracking-tight mb-4">
          About Executive Committee
        </h2>

        {/* Small Gold Divider */}
        <div className="w-16 h-1 bg-[#D4A017] mx-auto rounded-full mb-6" />

        {/* Short Description */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          The Executive Committee of the Uttar Pradesh Event Management Association (UPEMA) is the core governing body responsible for driving strategic initiatives, establishing industry standards, and championing the growth of event management professionals across the state. Comprising visionaries and experienced leaders from wedding, corporate, live entertainment, and technical sectors, the committee ensures transparent governance, policy formulation, member advocacy, and seamless coordination with government authorities.
        </p>
      </motion.div>
    </section>
  )
}

export default AboutSection
