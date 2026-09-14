import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiUsers, 
  FiAward, 
  FiShield, 
  FiTrendingUp, 
  FiArrowRight, 
  FiCheckCircle 
} from 'react-icons/fi'

const whyChooseCards = [
  {
    id: 1,
    title: 'State-Wide Networking',
    subtitle: 'CONNECTING 25+ UP DISTRICTS',
    description:
      'Connect directly with top wedding planners, luxury decor fabricators, artists, and sound/light suppliers across Uttar Pradesh.',
    icon: FiUsers,
    sphereBg: 'bg-gradient-to-tr from-[#0B1F3A] via-[#1279CF] to-[#3B82F6] text-white',
    badgeBg: 'bg-blue-50 text-[#1279CF] border-blue-200/60',
    cardBg: 'bg-[#F0F6FB]',
    pillIconColor: 'text-[#1279CF]',
    columnClass: ''
  },
  {
    id: 2,
    title: 'Official Certification',
    subtitle: 'VERIFIED TRADE RECOGNITION',
    description:
      'Gain high client credibility and official recognition with verified UPEMA trade badges and state member certificates.',
    icon: FiAward,
    sphereBg: 'bg-gradient-to-tr from-[#0B1F3A] via-[#9E7A32] to-[#C9A45C] text-[#F8C54E]',
    badgeBg: 'bg-amber-50 text-[#9E7A32] border-amber-200/60',
    cardBg: 'bg-[#FAF6EE]',
    pillIconColor: 'text-[#9E7A32]',
    columnClass: 'lg:mt-10' // Smooth controlled staggered offset on desktop
  },
  {
    id: 3,
    title: 'Government Advocacy',
    subtitle: 'SINGLE-WINDOW CLEARANCES',
    description:
      'Enjoy collective representation before municipal and tourism bodies for single-window event permissions and sound norms.',
    icon: FiShield,
    sphereBg: 'bg-gradient-to-tr from-[#1279CF] to-[#2563EB] text-white',
    badgeBg: 'bg-sky-50 text-[#1279CF] border-sky-200/60',
    cardBg: 'bg-[#F0F7FF]',
    pillIconColor: 'text-[#1279CF]',
    columnClass: ''
  },
  {
    id: 4,
    title: 'Direct B2B Referrals',
    subtitle: 'TENDERS & EQUIPMENT LEADS',
    description:
      'Access verified vendor tenders, premium event leads, inter-city equipment sharing, and corporate event listings.',
    icon: FiTrendingUp,
    sphereBg: 'bg-gradient-to-tr from-[#0B1F3A] to-[#1279CF] text-[#C9A45C]',
    badgeBg: 'bg-slate-100 text-slate-700 border-slate-200',
    cardBg: 'bg-[#F4F6F9]',
    pillIconColor: 'text-[#0B1F3A]',
    columnClass: 'lg:mt-10' // Smooth controlled staggered offset on desktop
  }
]

const BenefitsSection = () => {
  return (
    <section className="w-full bg-[#F8F6F1] py-16 sm:py-20 lg:py-24 border-t border-slate-200/60 font-sans relative overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[#1279CF]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#C9A45C]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header (Matching PillarsSection & Other Home Sections Typography Exactly) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-[#1279CF] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3.5 shadow-xs"
          >
            <span>★</span>
            <span>MEMBERSHIP PRIVILEGES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight mb-3"
          >
            Why Join <span className="text-[#1279CF]">UPEMA</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Build brand credibility, gain state-wide statutory protection, and unlock high-value B2B collaborations across Uttar Pradesh.
          </motion.p>
        </div>

        {/* Staggered 2x2 Floating Cards Container with Background Connecting Dashed Lines */}
        <div className="relative">
          
          {/* Dashed SVG Connecting Path (Visible on Large Screens) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block opacity-25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 280 140 Q 500 220 760 180 Q 500 440 280 400 Q 500 480 760 440"
              fill="none"
              stroke="#1279CF"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>

          {/* 4 Staggered Offset Node Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start relative z-10">
            {whyChooseCards.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className={`relative group ${item.columnClass}`}
                >
                  <div className="bg-white rounded-[2rem] p-3.5 sm:p-4 shadow-md hover:shadow-xl border border-slate-200/90 hover:border-[#1279CF]/60 transition-all duration-300 transform group-hover:-translate-y-1.5 relative">
                    
                    {/* Floating 3D/Sphere Icon Badge (Overlapping Top Boundary) */}
                    <div
                      className={`absolute -top-5 left-6 sm:left-8 w-11 h-11 rounded-2xl shadow-md border-2 border-white flex items-center justify-center text-lg ${item.sphereBg} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <IconComponent />
                    </div>

                    {/* Inner Soft-Tinted Card Container */}
                    <div className={`${item.cardBg} rounded-[1.3rem] p-5 sm:p-6 pt-7 border border-slate-100/90`}>
                      
                      {/* Subtitle Badge & Small Icon */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className={`w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-2xs ${item.pillIconColor}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className={`text-[10px] font-bold tracking-wider px-3 py-1 rounded-full border ${item.badgeBg}`}>
                          {item.subtitle}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#1279CF] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-3">
                        {item.description}
                      </p>

                      {/* Key Verification Bullet */}
                      <div className="flex items-center gap-2 pt-2.5 border-t border-slate-200/60 text-xs font-semibold text-slate-800">
                        <FiCheckCircle className={`w-3.5 h-3.5 ${item.pillIconColor}`} />
                        <span>Standardized UPEMA Trade Protocol</span>
                      </div>

                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>

        {/* Bottom CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-12 sm:pt-16"
        >
          {/* Primary Navy Button -> Links to /membership */}
          <Link
            to="/membership"
            className="px-8 py-3.5 rounded-xl bg-[#0D2238] text-white hover:bg-[#1279CF] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg flex items-center gap-2 cursor-pointer group"
          >
            <span>Join UPEMA Today</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary Gold Border Button -> Links to /about/governing-body */}
          <Link
            to="/about/governing-body"
            className="px-8 py-3.5 rounded-xl bg-white text-slate-900 border-2 border-[#C9A45C] hover:bg-[#0D2238] hover:text-white hover:border-[#0D2238] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer"
          >
            <span>Learn Rules & Bylaws</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default BenefitsSection
