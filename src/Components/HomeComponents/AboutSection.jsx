import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiShield, 
  FiFileText, 
  FiAward, 
  FiArrowRight 
} from 'react-icons/fi'
import aboutWeddingImg from '../../assets/images/hero4.jpg';

// Smooth Count-Up Animated Number Component
const AnimatedCounter = ({ target, suffix = '+' }) => {
  const [count, setCount] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 1600 // 1.6 seconds total
      const steps = 40
      const increment = target / steps
      const stepTime = duration / steps

      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <span ref={containerRef}>
      {count}{suffix}
    </span>
  )
}

const AboutSection = () => {
  return (
    <section className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-white border-t border-slate-100">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#1279CF]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#C9A45C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. TOP CENTERED EYEBROW BADGE (Matching PillarsSection & BenefitsSection Header) */}
        <div className="text-center mb-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-[#1279CF] text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-sm"
          >
            <span>🏛️</span>
            <span>ABOUT UPEMA</span>
          </motion.div>
        </div>

        {/* 2. MAIN HEADLINE (Matching PillarsSection Typography & Highlight Style) */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight text-center max-w-4xl mx-auto mb-12"
        >
          We Are The Voice of Uttar Pradesh’s{' '}
          <span className="text-[#1279CF]">Event Fraternity</span>
        </motion.h2>

        {/* 3. TWO-COLUMN CORE CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          
          {/* LEFT COLUMN: LARGE GOLD DROP CAP "U" & ENHANCED NARRATIVE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-between h-full"
          >
            {/* Expanded Paragraph with Large Prominent Gold Drop Cap "U" */}
            {/* <div className="mb-8 overflow-hidden">
              <span className="float-left text-7xl sm:text-8xl md:text-[88px] font-extrabold font-serif text-[#C9A45C] leading-none pr-4 sm:pr-5 pt-1 select-none drop-shadow-sm">
                U
              </span>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                <strong className="text-slate-900 font-bold">PEMA</strong> stands as the definitive collective for Uttar Pradesh's professional event industry—uniting planners, designers, suppliers, and creators under one recognized chamber. We advocate for excellence, strategic collaboration, and sustainable trade growth across weddings, corporate conclaves, exhibitions, and cultural productions, ensuring our fraternity is respected, statutory cleared, regulated, and future-ready across all 75 districts.
              </p>
            </div> */}
            <div className="mb-8">
  <span className="float-left text-[92px] sm:text-[105px] lg:text-[115px] font-black font-serif text-[#C9A45C] leading-[0.8] pr-4 sm:pr-5 select-none drop-shadow-sm inline-block">
    UP
  </span>
  <p className="text-slate-700 text-sm sm:text-base md:text-[16px] leading-[1.65] font-normal text-justify">
    <strong className="text-slate-900 font-bold">EMA</strong> stands as the definitive collective for Uttar Pradesh's professional event industry—uniting planners, designers, suppliers, and creators under one recognized chamber. We advocate for excellence, strategic collaboration, and sustainable trade growth across weddings, corporate conclaves, exhibitions, and cultural productions, ensuring our fraternity is respected, statutory cleared, regulated, and future-ready across all 75 districts.
  </p>
</div>
{/* <div className="mb-8">
  <span className="float-left text-[80px] sm:text-[95px] lg:text-[105px] font-black font-serif text-[#C9A45C] leading-[0.8] pr-3 sm:pr-4 select-none drop-shadow-sm tracking-tight inline-block">
    UP
  </span>
  <p className="text-slate-700 text-sm sm:text-base md:text-[16px] leading-[1.65] font-normal text-justify">
    <strong className="text-slate-900 font-bold">EMA</strong> stands as the definitive collective for Uttar Pradesh's professional event industry—uniting planners, designers, suppliers, and creators under one recognized chamber. We advocate for excellence, strategic collaboration, and sustainable trade growth across weddings, corporate conclaves, exhibitions, and cultural productions, ensuring our fraternity is respected, statutory cleared, regulated, and future-ready across all 75 districts.
  </p>
</div> */}


            {/* 3 Key Pillar Feature Cards with Blue & White Theme Icons */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-300/80">
              
              {/* Pillar 1 */}
              <div className="fraternity-feature-card">
                <div className="icon-wrapper">
                  <FiAward />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Government <br /> Recognized
                </h4>
              </div>

              {/* Pillar 2 */}
              <div className="fraternity-feature-card">
                <div className="icon-wrapper">
                  <FiFileText />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Single Window <br /> Permissions
                </h4>
              </div>

              {/* Pillar 3 */}
              <div className="fraternity-feature-card">
                <div className="icon-wrapper">
                  <FiShield />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Safety <br /> Norms
                </h4>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: ORNATE GOLD-FRAMED PHOTO & OVERLAPPING STAT CARD WITH COUNT-UP ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Ornate Gold Border Image Wrapper */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C9A45C] bg-slate-900 p-1">
              <img
                src={aboutWeddingImg}
                alt="Royal Wedding & Event Production Staging"
                className="w-full h-[340px] sm:h-[400px] object-cover rounded-xl hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Overlapping Frosted Glass Stat Card (Bottom-Right) with Animated Count-Up Numbers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-5 -right-2 sm:-right-5 w-[190px] sm:w-[220px] rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-2xl p-4 sm:p-5 text-center z-20"
            >
              {/* Stat 1: Animated Count-Up to 300+ */}
              <div className="pb-2.5 border-b border-[#C9A45C]/40">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0D2238] block leading-none font-sans">
                  <AnimatedCounter target={300} suffix="+" />
                </span>
                <span className="text-xs font-semibold text-slate-600 block mt-1 uppercase tracking-wider">
                  Enterprises
                </span>
              </div>

              {/* Stat 2: Animated Count-Up to 25+ */}
              <div className="pt-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0D2238] block leading-none font-sans">
                  <AnimatedCounter target={25} suffix="+" />
                </span>
                <span className="text-xs font-semibold text-slate-600 block mt-1 uppercase tracking-wider">
                  Districts
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* 4. BOTTOM ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {/* Primary Navy Button -> Links to /about/history */}
          <Link
            to="/about/history"
            className="px-8 py-3.5 rounded-xl bg-[#0D2238] text-white hover:bg-[#1279CF] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg flex items-center gap-2 cursor-pointer group"
          >
            <span>Know Our Journey</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary Gold Border Button -> Links to /about/governing-body */}
          <Link
            to="/about/governing-body"
            className="px-8 py-3.5 rounded-xl bg-white text-slate-900 border-2 border-[#C9A45C] hover:bg-[#0D2238] hover:text-white hover:border-[#0D2238] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer"
          >
            <span>Meet Leadership</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutSection