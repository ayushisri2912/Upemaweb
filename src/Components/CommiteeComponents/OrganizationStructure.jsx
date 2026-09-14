import React from 'react'
import { motion } from 'framer-motion'
import { FaCrown } from 'react-icons/fa6'
import { 
  FiAward, 
  FiFileText, 
  FiCreditCard, 
  FiUsers,
  FiChevronDown
} from 'react-icons/fi'

const structureNodes = [
  {
    role: 'President',
    icon: FaCrown,
    desc: 'Apex Executive Lead'
  },
  {
    role: 'Vice President',
    icon: FiAward,
    desc: 'Zonal & Operations'
  },
  {
    role: 'General Secretary',
    icon: FiFileText,
    desc: 'Secretariat & Admin'
  },
  {
    role: 'Treasurer',
    icon: FiCreditCard,
    desc: 'Finance & Accounts'
  },
  {
    role: 'Executive Members',
    icon: FiUsers,
    desc: 'State Advisory Council'
  }
]

const OrganizationStructure = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#D4A017] text-xs font-bold uppercase tracking-widest block mb-2">
            Governance Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2343] tracking-tight">
            Organization Structure
          </h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />
        </div>

        {/* Desktop Horizontal Layout & Mobile Vertical Flow */}
        <div className="relative py-4">
          
          {/* Connecting Thin Gold Line (Desktop Horizontal) */}
          <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#0B2343] via-[#D4A017] to-[#0B2343] z-0" />

          {/* Grid/Flex Container */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative z-10">
            {structureNodes.map((node, idx) => {
              const Icon = node.icon
              const isLast = idx === structureNodes.length - 1

              return (
                <React.Fragment key={idx}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex flex-col items-center group text-center w-full max-w-[200px]"
                  >
                    {/* Circular Icon with Gold Border & Navy BG */}
                    <div className="w-20 h-20 rounded-full bg-[#0B2343] border-4 border-[#D4A017] text-[#D4A017] flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:bg-[#D4A017] group-hover:text-[#0B2343] group-hover:border-[#0B2343] transition-all duration-300 relative cursor-pointer">
                      <Icon />
                      <span className="absolute -bottom-1 right-0 w-6 h-6 rounded-full bg-[#D4A017] text-[#0B2343] text-xs font-bold flex items-center justify-center border border-white">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-base font-extrabold text-[#0B2343] mt-4 mb-1 group-hover:text-[#D4A017] transition-colors">
                      {node.role}
                    </h3>

                    {/* Short Subtitle */}
                    <span className="text-xs text-slate-500 font-medium">
                      {node.desc}
                    </span>
                  </motion.div>

                  {/* Connecting Arrow for Mobile (Vertical) */}
                  {!isLast && (
                    <div className="flex lg:hidden items-center justify-center my-1 text-[#D4A017]">
                      <FiChevronDown className="w-6 h-6 animate-bounce" />
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

export default OrganizationStructure
