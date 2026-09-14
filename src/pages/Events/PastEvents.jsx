import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCalendar,
  FiMapPin,
  FiClock,
  FiUsers,
  FiSearch,
  FiX,
  FiMail,
  FiAward,
  FiImage,
  FiArrowRight,
  FiCheckCircle,
  FiFileText
} from 'react-icons/fi'

// Mock Data for Past Events
const PAST_EVENTS_DATA = [
  {
    id: 'past-1',
    year: '2025',
    title: 'UPEMA Annual Mega Wedding Conclave 2025',
    category: 'State Conventions',
    date: 'Oct 12 - 14, 2025',
    city: 'Lucknow',
    venue: 'Indira Gandhi Pratishthan, Lucknow',
    delegates: '2,200+ Attendees',
    stalls: '180+ Stalls',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    summary: 'The largest wedding and event trade convention in North India bringing together planners, venue owners, and state tourism officials.',
    highlights: [
      'Passed 5-point Single-Window Event Clearance resolution with UP Tourism Board',
      'Unveiled UPEMA Standardized Vendor Contract Framework 2.0',
      'Honored 24 veteran event leaders with Excellence Lifetime Medals'
    ],
    speakers: ['UP Tourism Principal Secretary', 'President UPEMA', 'National Event Safety Auditor'],
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'past-2',
    year: '2025',
    title: 'German Truss Rigging & Outdoor Load Safety Workshop',
    category: 'Technical Masterclasses',
    date: 'Jul 20, 2025',
    city: 'Noida',
    venue: 'Expo Centre Noida, Sector 62',
    delegates: '650+ AV Engineers',
    stalls: 'Technical Lab Demos',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    summary: 'An intensive technical certification course on German truss load calculations, wind turbulence safety, and digital sound mapping.',
    highlights: [
      'Certified 150+ senior stage rigging supervisors',
      'Live wind shear simulation tests on 40-foot truss structures',
      'Released UPEMA Stage Safety Operational Handbook'
    ],
    speakers: ['Senior Structural Engineer', 'German Audio-Visual Auditor', 'UPEMA Tech Cell Lead'],
    gallery: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'past-3',
    year: '2024',
    title: 'Heritage Destination Wedding Summit Agra',
    category: 'State Conventions',
    date: 'Nov 18 - 19, 2024',
    city: 'Agra',
    venue: 'Jaypee Palace Hotel, Agra',
    delegates: '1,400+ Planners',
    stalls: '60 Palace Venues',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    summary: 'A landmark gathering focused on heritage monument permissions, luxury hospitality integration, and royal wedding logistics.',
    highlights: [
      'MoU signed with Agra Hotel & Restaurant Association',
      'Unveiled Heritage Venue Direct Booking Portal',
      'Promoted Agra, Varanasi & Orchha wedding circuits'
    ],
    speakers: ['District Magistrate Agra', 'UP EMA General Secretary', 'Heritage Hotel Owners Guild'],
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'past-4',
    year: '2024',
    title: 'Varanasi Zonal Leadership Oath & Excellence Gala',
    category: 'Gala Nights',
    date: 'Dec 05, 2024',
    city: 'Varanasi',
    venue: 'Taj Nadesar Palace, Varanasi',
    delegates: '450+ Executive Members',
    stalls: 'VIP Gala Night',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    summary: 'Formal induction of Eastern UP Zonal Secretariat members followed by an evening of classical fusion and industry felicitations.',
    highlights: [
      'Inducted 32 new Zonal Governing Board members',
      'Awarded 15 Outstanding Service Plaques',
      'Established Eastern UP Legal Dispute Desk'
    ],
    speakers: ['UPEMA Founder Chairman', 'Varanasi Zonal Secretariat Chair'],
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'past-5',
    year: '2023',
    title: 'Uttar Pradesh Sound & Light Technology Expo 2023',
    category: 'Trade Expos',
    date: 'Feb 15 - 16, 2023',
    city: 'Kanpur',
    venue: 'Kanpur Club Grounds, Kanpur',
    delegates: '1,800+ AV Operators',
    stalls: '95 Equipment Brands',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    summary: 'Exhibition showcasing advanced DMX lighting consoles, outdoor line arrays, and kinetic stage ceiling installations.',
    highlights: [
      'Live laser mapping & cold pyro safety demos',
      'Direct manufacturer discount agreements for UPEMA members'
    ],
    speakers: ['Kanpur Zonal Convener', 'Chief Sound Engineer'],
    gallery: [
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'past-6',
    year: '2023',
    title: 'Prayagraj Gourmet Catering & Hygiene Summit',
    category: 'Technical Masterclasses',
    date: 'May 10, 2023',
    city: 'Prayagraj',
    venue: 'Hotel Kanha Shyam, Prayagraj',
    delegates: '500+ Caterers',
    stalls: '30 Live Counters',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    summary: 'Comprehensive masterclass on FSSAI food hygiene audits, cold chain logistics, and high-capacity live catering.',
    highlights: [
      'Awarded 200+ FSSAI Compliance Seals',
      'Live demonstration of zero-waste banquet disposal'
    ],
    speakers: ['FSSAI Regional Officer', 'Master Executive Chef'],
    gallery: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80'
    ]
  }
]

const YEARS = ['All Years', '2025', '2024', '2023']
const CATEGORIES = ['All Categories', 'State Conventions', 'Trade Expos', 'Gala Nights', 'Technical Masterclasses']

const PastEvents = () => {
  // Filter States
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('All Years')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')

  // Selected Event for Detailed Recap Modal
  const [activeRecapEvent, setActiveRecapEvent] = useState(null)

  // Filtered Events Logic
  const filteredEvents = useMemo(() => {
    return PAST_EVENTS_DATA.filter((event) => {
      const search = searchTerm.toLowerCase().trim()
      const matchesSearch =
        !search ||
        event.title.toLowerCase().includes(search) ||
        event.venue.toLowerCase().includes(search) ||
        event.city.toLowerCase().includes(search) ||
        event.summary.toLowerCase().includes(search)

      const matchesYear = selectedYear === 'All Years' || event.year === selectedYear
      const matchesCategory =
        selectedCategory === 'All Categories' || event.category === selectedCategory

      return matchesSearch && matchesYear && matchesCategory
    })
  }, [searchTerm, selectedYear, selectedCategory])

  return (
    <main className="w-full bg-[#F7F5F0] min-h-screen selection:bg-[#C9A45C] selection:text-[#0B1F3A] font-sans">
      
      {/* =========================================================
          1. HERO SECTION (MATCHING WHY BECOME A MEMBER FONT & GRADIENT)
      ======================================================== */}
      <section className="relative w-full min-h-[460px] md:min-h-[520px] bg-[#0B1F3A] flex items-center justify-center overflow-hidden text-white font-sans border-b border-[#C9A45C]/30">
        
        {/* Background Image with Dark Navy Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        
        {/* Dark Navy Overlay (#0B1F3A with high opacity for readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/90 via-[#0B1F3A]/85 to-[#0B1F3A]/95 pointer-events-none" />

        {/* Decorative Radial Lighting Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C9A45C]/10 rounded-full blur-[130px] pointer-events-none" />

        {/* Minimal Decorative Gold Line Shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 border border-[#C9A45C]/15 rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-[#C9A45C]/15 rounded-full pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-14">
          
          {/* Small Gold Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9A45C]/40 text-[#C9A45C] text-xs font-bold uppercase tracking-widest mb-5 shadow-md font-sans"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
            UPEMA LANDMARK ARCHIVES
          </motion.div>

          {/* Main Heading (Exact gradient font styling as Why Become a Member) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
              Reliving UPEMA Landmark Summits &
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Past Expos
            </span>
          </motion.h1>

          {/* Thin Gold Accent Line Below Heading */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "96px" }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="h-1 bg-[#C9A45C] mx-auto rounded-full mt-5 mb-5 shadow-[0_0_12px_rgba(201,164,92,0.6)]"
          />

          {/* Supporting Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-sans font-normal"
          >
            A retrospective gallery of state conventions, trade conclaves, technical masterclasses, and executive galas organized by UPEMA.
          </motion.p>

          {/* Integrated Statistics Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 md:mt-10 pt-6 border-t border-[#C9A45C]/20 max-w-3xl mx-auto font-sans"
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  50<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Past Conventions
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  25K<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Total Delegates
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  120<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Keynote Speakers
                </span>
              </div>
            </div>
            
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mx-auto mt-6 opacity-80" />
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          2. MINIMAL SEARCH & FILTER BAR
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-6 relative z-20 font-sans">
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-[#E7E0D3]">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search past event title, city, or venue..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded focus:outline-none focus:border-[#C9A45C] transition-colors text-[#0B1F3A] font-sans"
              />
            </div>

            {/* Year Select */}
            <div className="md:col-span-3">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded focus:outline-none focus:border-[#C9A45C] text-[#0B1F3A] cursor-pointer font-sans"
              >
                {YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y === 'All Years' ? '🗓️ All Event Years' : `🗓️ Year ${y}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Select */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded focus:outline-none focus:border-[#C9A45C] text-[#0B1F3A] cursor-pointer font-sans"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Result Count & Reset */}
          <div className="mt-3 flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100 font-sans">
            <div>
              Showing <strong className="text-[#0B1F3A] font-semibold">{filteredEvents.length}</strong> archived landmark events
            </div>

            {(searchTerm || selectedYear !== 'All Years' || selectedCategory !== 'All Categories') && (
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedYear('All Years')
                  setSelectedCategory('All Categories')
                }}
                className="text-[#C9A45C] hover:underline font-semibold cursor-pointer font-sans"
              >
                Reset Filters
              </button>
            )}
          </div>

        </div>
      </section>

      {/* =========================================================
          3. MINIMAL & ELEGANT PAST EVENT CARDS GRID
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 font-sans">
        
        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-lg p-10 text-center border border-gray-200 max-w-md mx-auto my-6 font-sans">
            <FiCalendar className="w-10 h-10 text-[#C9A45C] mx-auto mb-2 opacity-70" />
            <h3 className="text-base font-sans font-bold text-[#0B1F3A]">No Past Events Found</h3>
            <p className="text-xs text-gray-500 mt-1">
              Try adjusting your search criteria or year selection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden border border-[#E7E0D3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between font-sans group"
              >
                
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 bg-[#0B1F3A] text-[#C9A45C] border border-[#C9A45C]/40 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-sans">
                      {event.category}
                    </span>

                    {/* Year Tag Ribbon */}
                    <span className="absolute bottom-3 right-3 bg-[#C9A45C] text-[#0B1F3A] px-2.5 py-0.5 rounded text-xs font-bold font-sans shadow">
                      {event.year}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    
                    <h3 className="text-lg font-sans font-bold text-[#0B1F3A] leading-snug group-hover:text-[#C9A45C] transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-normal font-sans">
                      {event.summary}
                    </p>

                    {/* Metadata */}
                    <div className="pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-700 font-sans">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="text-[#C9A45C] w-3.5 h-3.5 flex-shrink-0" />
                        <span className="font-semibold text-[#0B1F3A]">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-[#C9A45C] w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiUsers className="text-[#C9A45C] w-3.5 h-3.5 flex-shrink-0" />
                        <span>{event.delegates} • {event.stalls}</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Single Clean Action Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setActiveRecapEvent(event)}
                    className="w-full bg-[#FAF8F2] hover:bg-[#0B1F3A] text-[#0B1F3A] hover:text-[#C9A45C] font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-all text-center border border-[#E7E0D3] hover:border-[#C9A45C]/40 shadow-sm cursor-pointer flex items-center justify-center gap-2 font-sans"
                  >
                    <FiImage className="w-3.5 h-3.5" /> View Recap & Gallery
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* =========================================================
          4. ARCHIVE INQUIRY CTA SECTION
      ======================================================== */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 font-sans">
        <div className="bg-[#0B1F3A] text-white rounded-lg p-8 sm:p-10 border border-[#C9A45C]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs text-[#C9A45C] uppercase tracking-widest font-bold font-sans">
              UPEMA Archives & Documentation Desk
            </span>
            <h3 className="text-2xl font-sans font-bold">
              Looking for Official Event Press Releases or Whitepapers?
            </h3>
            <p className="text-xs text-slate-300 font-normal font-sans">
              Request past convention proceedings, resolutions, or photo archives directly from the UPEMA secretariat.
            </p>
          </div>

          <a
            href="mailto:archives@upema.in?subject=Past%20Event%20Archive%20Request"
            className="bg-[#C9A45C] hover:bg-[#D9B873] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors flex items-center gap-2 shadow cursor-pointer whitespace-nowrap font-sans"
          >
            <FiMail className="w-4 h-4" /> Contact Archives Desk
          </a>

        </div>
      </section>

      {/* =========================================================
          5. EVENT RECAP & GALLERY MODAL
      ======================================================== */}
      <AnimatePresence>
        {activeRecapEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm font-sans">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#C9A45C]"
            >
              {/* Modal Header */}
              <div className="relative bg-[#0B1F3A] text-white p-6 border-b border-[#C9A45C]">
                <button
                  onClick={() => setActiveRecapEvent(null)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-white p-1 rounded bg-black/30 cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs text-[#C9A45C] uppercase font-bold tracking-wider mb-1">
                  <span>{activeRecapEvent.category}</span>
                  <span>•</span>
                  <span>{activeRecapEvent.year}</span>
                </div>

                <h3 className="text-xl font-sans font-bold text-white leading-snug">
                  {activeRecapEvent.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  📍 {activeRecapEvent.venue} | 📅 {activeRecapEvent.date}
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 text-[#0B1F3A]">
                
                {/* Summary */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2 font-sans flex items-center gap-1.5">
                    <FiFileText className="text-[#C9A45C]" /> Executive Overview
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {activeRecapEvent.summary}
                  </p>
                </div>

                {/* Key Resolutions & Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2 font-sans flex items-center gap-1.5">
                    <FiCheckCircle className="text-[#C9A45C]" /> Key Outcomes & Resolutions
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {activeRecapEvent.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 bg-[#FAF8F2] p-2.5 rounded border border-gray-200">
                        <FiCheckCircle className="text-[#C9A45C] w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Keynote Speakers */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2 font-sans flex items-center gap-1.5">
                    <FiAward className="text-[#C9A45C]" /> Keynote Dignitaries
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {activeRecapEvent.speakers.map((sp, i) => (
                      <span key={i} className="bg-[#0B1F3A]/5 text-[#0B1F3A] border border-[#0B1F3A]/10 px-3 py-1 rounded font-medium">
                        👤 {sp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Photo Gallery Grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2 font-sans flex items-center gap-1.5">
                    <FiImage className="text-[#C9A45C]" /> Event Photo Highlights
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {activeRecapEvent.gallery.map((img, i) => (
                      <div key={i} className="h-32 rounded overflow-hidden border border-gray-200 bg-gray-100">
                        <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="bg-[#FAF8F2] p-4 border-t border-gray-200 flex items-center justify-end">
                <button
                  onClick={() => setActiveRecapEvent(null)}
                  className="bg-[#0B1F3A] hover:bg-[#173B5E] text-[#C9A45C] font-bold text-xs uppercase tracking-wider px-5 py-2 rounded transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </main>
  )
}

export default PastEvents
