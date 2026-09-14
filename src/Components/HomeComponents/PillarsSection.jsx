import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiMapPin, 
  FiArrowRight, 
  FiCheckCircle, 
  FiStar,
  FiShield,
  FiAward
} from 'react-icons/fi'
import heroimg from "../../assets/images/hero.jpg"
import heroimg1 from "../../assets/images/hero1.jpg"
import heroimg2 from "../../assets/images/hero2.jpg"

const destinationHubs = [
  {
    id: 1,
    tag: 'ROYAL HERITAGE',
    region: 'Lucknow & Awadh Region',
   title: 'Heritage & Royal Weddings',
    description:
      'Blending Nawabi hospitality, royal palace setups, and bespoke cultural entertainment for unforgettable destination weddings.',
    highlights: [
      'Palace & Haveli Venues with Royal Decor',
      'Awadhi Cultural Performers & Ghazal Evenings',
      'Single-Window Administrative & Permit Ease'
    ],
    rating: '4.9 Apex Heritage Venue',
    image: heroimg,
    link: '/member-directory'
  },
  {
    id: 2,
    tag: 'SPIRITUAL & CULTURAL GALAS',
    region: 'Varanasi & Ayodhya',
    title: 'Spiritual & Cultural Celebrations',
    description:
      'Grand riverfront events, traditional festivities, and divine musical evenings with state-of-the-art sound and lighting architecture.',
    highlights: [
      'Riverfront Ghat & Heritage Pavilion Setups',
      'Vedic Acoustic & Architectural Lighting',
      'Eco-Norms & Sound Safety Compliance'
    ],
    rating: '5.0 Cultural Hub',
    image: heroimg1,
    link: '/member-directory'
  },
  {
    id: 3,
    tag: 'BUSINESS & EXPOS',
    region: 'Noida & Greater Noida',
    title: 'Corporate Conclaves & Mega Expos',
    description:
      'High-tech mega conferences, global exhibitions, and trade expos hosted in world-class convention centers and modern arenas.',
    highlights: [
      'India Expo Mart & Global Arena Integration',
      'Heavy Structural Rigging & Power Infra',
      'Jewar Airport & Express Transit Connectivity'
    ],
    rating: '4.8 Business Expo Zone',
    image: heroimg2,
    link: '/member-directory'
  }
]

const PillarsSection = () => {
  return (
    <section className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-[#F0F6FB] border-t border-blue-100/60 transition-colors duration-300">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[300px] bg-[#1279CF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[300px] bg-[#C9A45C]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-[#1279CF] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 shadow-xs"
          >
            <span>🏛️</span>
            <span>EXPERIENTIAL DESTINATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Uttar Pradesh: Where Heritage Meets{' '}
            <span className="text-[#1279CF]">Modern Celebrations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Explore UP's premier event hubs—crafted for royal weddings, spiritual galas, and mega business expos.
          </motion.p>
        </div>

        {/* Alternating Horizontal Split Showcase Cards (Reference Style from Luxury Venue Directories) */}
        <div className="space-y-12 sm:space-y-16">
          {destinationHubs.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:border-[#C9A45C]"
              >
                
                {/* Image Container (Alternates Left / Right on Large Screens) */}
                <div
                  className={`lg:col-span-6 relative overflow-hidden h-[300px] sm:h-[380px] lg:h-auto min-h-[340px] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Floating Rating Badge Top-Left */}
                  <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/90 backdrop-blur-md text-[#C9A45C] text-xs font-bold border border-[#C9A45C]/40 shadow-md">
                    <FiStar className="w-3.5 h-3.5 fill-[#C9A45C]" />
                    <span>{item.rating}</span>
                  </div>

                  {/* Region Name Tag Bottom-Left */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider bg-slate-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20">
                    <FiMapPin className="w-4 h-4 text-[#C9A45C]" />
                    <span>{item.region}</span>
                  </div>
                </div>

                {/* Content Details Container */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    {/* Category Eyebrow Pill */}
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#1279CF] border border-blue-200/60 text-xs font-bold uppercase tracking-wider mb-4">
                      {item.tag}
                    </div>

                    {/* Card Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 group-hover:text-[#1279CF] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2.5 mb-8 border-t border-b border-slate-100 py-4">
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                          <FiCheckCircle className="w-4 h-4 text-[#1279CF] flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link Button */}
                  <div className="pt-2">
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0B1F3A] hover:bg-[#1279CF] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group/btn cursor-pointer"
                    >
                      <span>Explore {item.region.split('&')[0]} Directory</span>
                      <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default PillarsSection
