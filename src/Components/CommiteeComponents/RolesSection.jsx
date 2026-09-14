import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiFileText, 
  FiLayers, 
  FiUsers, 
  FiAward, 
  FiBookOpen, 
  FiGlobe 
} from 'react-icons/fi'

const rolesData = [
  {
    icon: FiFileText,
    title: 'Policy Making',
    description: 'Drafting statutory bylaws, ethical conduct guidelines, safety protocols, and standard operating procedures for UP event managers.'
  },
  {
    icon: FiLayers,
    title: 'Event Planning',
    description: 'Organizing annual state conclaves, mega wedding expos, vendor networking meets, and high-profile industry conventions.'
  },
  {
    icon: FiUsers,
    title: 'Membership Development',
    description: 'Expanding UPEMA footprint across all 75 districts of UP while managing accreditation, verification, and member benefits.'
  },
  {
    icon: FiAward,
    title: 'Industry Representation',
    description: 'Advocating trade interests before national bodies, GST councils, tourism departments, and financial institutions.'
  },
  {
    icon: FiBookOpen,
    title: 'Training Programs',
    description: 'Conducting technical rigging workshops, fire safety drills, acoustic engineering certifications, and youth skill development.'
  },
  {
    icon: FiGlobe,
    title: 'Government Coordination',
    description: 'Liaising with UP Tourism, district magistrates, and police authorities for unified single-window permission portals.'
  }
]

const RolesSection = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#D4A017] text-xs font-bold uppercase tracking-widest block mb-2">
            Strategic Objectives
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2343] tracking-tight">
            Roles & Responsibilities
          </h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rolesData.map((role, idx) => {
            const Icon = role.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#D4A017]/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  {/* Gold Outline Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20 flex items-center justify-center text-2xl mb-6 group-hover:bg-[#0B2343] group-hover:text-[#D4A017] group-hover:border-[#0B2343] transition-all duration-300 shadow-sm">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0B2343] mb-3 group-hover:text-[#D4A017] transition-colors leading-snug">
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {role.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default RolesSection
