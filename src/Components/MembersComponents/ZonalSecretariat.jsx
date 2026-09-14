import React from 'react'
import { motion } from 'framer-motion'
import ZoneCard from './ZoneCard'
import { zonalSecretariats } from '../../data/membersData'

const ZonalSecretariat = () => {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#C9A45C] text-xs font-bold uppercase tracking-widest block mb-2">
            REGIONAL GOVERNANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] font-serif tracking-tight">
            UPEMA Zonal Secretariat
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base font-normal">
            Connect with our regional representatives for assistance, member enquiries and association support.
          </p>
          <div className="w-16 h-1 bg-[#C9A45C] mx-auto rounded-full mt-4" />
        </div>

        {/* 4 Zonal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {zonalSecretariats.map((zone, idx) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <ZoneCard zone={zone} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ZonalSecretariat
