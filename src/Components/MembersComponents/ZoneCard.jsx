import React from 'react'
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi'

const ZoneCard = ({ zone }) => {
  return (
    <div className="bg-[#0B1F3A] rounded-2xl p-6 border border-[#C9A45C]/30 text-white shadow-md hover:shadow-xl hover:border-[#C9A45C] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden">
      {/* Top Metallic Gold Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A45C] via-[#E2B768] to-[#C9A45C]" />

      <div>
        {/* Zone Badge */}
        <span className="inline-block text-[#C9A45C] text-xs font-extrabold uppercase tracking-widest mb-3 bg-[#C9A45C]/10 px-3 py-1 rounded-full border border-[#C9A45C]/20">
          {zone.zone}
        </span>

        {/* Coverage Region */}
        <p className="text-xs text-slate-300 font-medium mb-4 flex items-center gap-1.5">
          <FiMapPin className="text-[#C9A45C] flex-shrink-0" />
          <span>{zone.region}</span>
        </p>

        {/* Regional Head Info */}
        <div className="pt-3 border-t border-white/10 mb-4">
          <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">
            {zone.designation}
          </span>
          <h3 className="text-lg font-bold text-white font-serif mt-0.5 group-hover:text-[#C9A45C] transition-colors">
            {zone.headName}
          </h3>
        </div>

        {/* Phone & Email */}
        <div className="space-y-2 mb-6 text-xs text-slate-300">
          <a href={`tel:${zone.phone}`} className="flex items-center gap-2 hover:text-[#C9A45C] transition-colors">
            <FiPhone className="text-[#C9A45C] w-3.5 h-3.5" />
            <span>{zone.phone}</span>
          </a>
          <a href={`mailto:${zone.email}`} className="flex items-center gap-2 hover:text-[#C9A45C] transition-colors">
            <FiMail className="text-[#C9A45C] w-3.5 h-3.5" />
            <span className="truncate">{zone.email}</span>
          </a>
        </div>
      </div>

      {/* Button */}
      <a
        href={`mailto:${zone.email}`}
        className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#C9A45C] text-white hover:text-[#0B1F3A] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-white/15 cursor-pointer group/btn"
      >
        <span>Contact Secretariat</span>
        <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </div>
  )
}

export default ZoneCard
