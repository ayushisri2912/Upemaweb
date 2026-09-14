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
  FiPhone,
  FiCheckCircle,
  FiArrowRight
} from 'react-icons/fi'
import Swal from 'sweetalert2'

// Sample Upcoming Events Data (Easily replaceable with Backend API GET /api/events)
const INITIAL_EVENTS = [
  {
    id: 1,
    title: 'UPEMA Grand Wedding & Event Expo 2026',
    category: 'Expos & Exhibitions',
    date: 'Oct 15 - 17, 2026',
    time: '09:30 AM - 07:00 PM',
    city: 'Lucknow',
    venue: 'Indira Gandhi Pratishthan, Lucknow',
    expectedAttendees: '3,500+ Delegates',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    description: 'Uttar Pradesh\'s premier trade fair for luxury wedding creators, truss fabricators, sound engineers, and banquet owners.'
  },
  {
    id: 2,
    title: 'Noida Acoustic & LED Truss Technology Summit',
    category: 'Summits & Conclaves',
    date: 'Nov 05, 2026',
    time: '10:00 AM - 05:00 PM',
    city: 'Noida',
    venue: 'Expo Centre Noida, Sector 62',
    expectedAttendees: '800+ AV Specialists',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    description: 'Technical summit on sound mapping, outdoor truss safety standards, and LED wall calibration for large scale events.'
  },
  {
    id: 3,
    title: 'Heritage & Destination Wedding Conclave',
    category: 'Summits & Conclaves',
    date: 'Nov 22 - 23, 2026',
    time: '10:30 AM - 06:30 PM',
    city: 'Agra',
    venue: 'Jaypee Palace Hotel, Agra',
    expectedAttendees: '1,200+ Planners',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    description: 'Exploring royal palace venues, single-window event permits, and luxury hospitality across Agra, Varanasi & Prayagraj.'
  },
  {
    id: 4,
    title: 'Varanasi Event Leaders Executive Networking Gala',
    category: 'Networking Galas',
    date: 'Dec 10, 2026',
    time: '06:00 PM - 10:30 PM',
    city: 'Varanasi',
    venue: 'Taj Nadesar Palace, Varanasi',
    expectedAttendees: '500+ Members',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    description: 'An exclusive evening of high-level networking, policy roundtables, and honoring outstanding event achievements.'
  },
  {
    id: 5,
    title: 'Luxury Catering & Banquet Food Safety Masterclass',
    category: 'Workshops',
    date: 'Jan 18, 2027',
    time: '10:00 AM - 04:30 PM',
    city: 'Prayagraj',
    venue: 'Hotel Kanha Shyam, Prayagraj',
    expectedAttendees: '600+ Chefs & Caterers',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    description: 'Masterclass covering high-capacity live catering, cold chain logistics, and FSSAI food hygiene standards.'
  },
  {
    id: 6,
    title: 'Kanpur Smart Lighting & AV Systems Expo',
    category: 'Expos & Exhibitions',
    date: 'Feb 12 - 13, 2027',
    time: '10:00 AM - 06:00 PM',
    city: 'Kanpur',
    venue: 'Kanpur Club Grounds, Kanpur',
    expectedAttendees: '1,500+ Designers',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    description: 'Discover the latest DMX controllers, pixel mapping, cold spark pyrotechnics, and kinetic lighting structures.'
  }
]

const CATEGORIES = ['All Categories', 'Expos & Exhibitions', 'Summits & Conclaves', 'Networking Galas', 'Workshops']
const CITIES = ['All Locations', 'Lucknow', 'Noida', 'Agra', 'Varanasi', 'Prayagraj', 'Kanpur']

const UpcomingEvents = () => {
  // Filter States
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedCity, setSelectedCity] = useState('All Locations')

  // Selected Event for Registration Modal
  const [selectedEvent, setSelectedEvent] = useState(null)
  
  // Clean Form State for easy Backend API submission
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    passCount: 1
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Filtered Events Logic
  const filteredEvents = useMemo(() => {
    return INITIAL_EVENTS.filter((event) => {
      const search = searchTerm.toLowerCase().trim()
      const matchesSearch =
        !search ||
        event.title.toLowerCase().includes(search) ||
        event.venue.toLowerCase().includes(search) ||
        event.city.toLowerCase().includes(search) ||
        event.description.toLowerCase().includes(search)

      const matchesCategory =
        selectedCategory === 'All Categories' || event.category === selectedCategory

      const matchesCity =
        selectedCity === 'All Locations' || event.city === selectedCity

      return matchesSearch && matchesCategory && matchesCity
    })
  }, [searchTerm, selectedCategory, selectedCity])

  // Handle Form Submit (Ready for backend fetch call)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate backend API call (e.g. POST /api/events/register)
    setTimeout(() => {
      setIsSubmitting(false)
      const registeredEventTitle = selectedEvent?.title
      setSelectedEvent(null)

      Swal.fire({
        title: 'Registration Successful!',
        text: `Thank you ${formData.fullName}. Your registration request for "${registeredEventTitle}" has been received.`,
        icon: 'success',
        confirmButtonColor: '#C9A45C',
        background: '#FAF8F2'
      })

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        passCount: 1
      })
    }, 1000)
  }

  return (
    <main className="w-full bg-[#F7F5F0] min-h-screen selection:bg-[#C9A45C] selection:text-[#0B1F3A] font-sans">
      
      {/* =========================================================
          1. HERO SECTION (USING PLUS JAKARTA SANS FONT)
      ======================================================== */}
      <section className="relative w-full min-h-[460px] md:min-h-[520px] bg-[#0B1F3A] flex items-center justify-center overflow-hidden text-white font-sans border-b border-[#C9A45C]/30">
        
        {/* Background Image with Dark Navy Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80')"
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
            UPEMA UPCOMING EVENTS
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
              Discover Upcoming Events & Summits Across
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Uttar Pradesh
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
            Explore upcoming trade expos, wedding conclaves, and executive networking meets organized by Uttar Pradesh Event Management Association.
          </motion.p>

          {/* Integrated Statistics Row (Plus Jakarta Sans Font) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 md:mt-10 pt-6 border-t border-[#C9A45C]/20 max-w-3xl mx-auto font-sans"
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  300<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Verified Members
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  12<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Annual Events
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  5<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Cities Across UP
                </span>
              </div>
            </div>
            
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mx-auto mt-6 opacity-80" />
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          2. CLEAN SEARCH & FILTER BAR
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-6 relative z-20 font-sans">
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-[#E7E0D3]">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search event title, venue, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded focus:outline-none focus:border-[#C9A45C] transition-colors text-[#0B1F3A] font-sans"
              />
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

            {/* City Select */}
            <div className="md:col-span-3">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded focus:outline-none focus:border-[#C9A45C] text-[#0B1F3A] cursor-pointer font-sans"
              >
                {CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Result Count */}
          <div className="mt-3 flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100 font-sans">
            <div>
              Showing <strong className="text-[#0B1F3A] font-semibold">{filteredEvents.length}</strong> upcoming events
            </div>

            {(searchTerm || selectedCategory !== 'All Categories' || selectedCity !== 'All Locations') && (
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All Categories')
                  setSelectedCity('All Locations')
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
          3. CLEAN EVENT CARDS GRID (USING PLUS JAKARTA SANS FONT)
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 font-sans">
        
        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-lg p-10 text-center border border-gray-200 max-w-md mx-auto my-6 font-sans">
            <FiCalendar className="w-10 h-10 text-[#C9A45C] mx-auto mb-2 opacity-70" />
            <h3 className="text-base font-sans font-bold text-[#0B1F3A]">No Events Found</h3>
            <p className="text-xs text-gray-500 mt-1">
              Try searching with a different search term or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden border border-[#E7E0D3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between font-sans"
              >
                
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-[#0B1F3A] text-[#C9A45C] border border-[#C9A45C]/40 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-sans">
                      {event.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    
                    <h3 className="text-lg font-sans font-bold text-[#0B1F3A] leading-snug">
                      {event.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-normal font-sans">
                      {event.description}
                    </p>

                    {/* Metadata */}
                    <div className="pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-700 font-sans">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="text-[#C9A45C] w-3.5 h-3.5 flex-shrink-0" />
                        <span className="font-semibold text-[#0B1F3A]">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock className="text-[#C9A45C] w-3.5 h-3.5 flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-[#C9A45C] w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{event.venue}</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Single Primary Action Button per Card (Backend-friendly) */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-[#0B1F3A] hover:bg-[#173B5E] text-[#C9A45C] font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors text-center border border-[#C9A45C]/40 shadow-sm cursor-pointer flex items-center justify-center gap-2 font-sans"
                  >
                    Register Now <FiArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* =========================================================
          4. CLEAN CONTACT / HOST CTA SECTION
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 font-sans">
        <div className="bg-[#0B1F3A] text-white rounded-lg p-8 sm:p-10 border border-[#C9A45C]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs text-[#C9A45C] uppercase tracking-widest font-bold font-sans">
              UPEMA Event Desk
            </span>
            <h3 className="text-2xl font-sans font-bold">
              Want to Host or Sponsor an Event?
            </h3>
            <p className="text-xs text-slate-300 font-normal font-sans">
              Connect with UPEMA secretariat for official event listings and sponsorships.
            </p>
          </div>

          <a
            href="mailto:info@upema.in?subject=Event%20Inquiry"
            className="bg-[#C9A45C] hover:bg-[#D9B873] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors flex items-center gap-2 shadow cursor-pointer whitespace-nowrap font-sans"
          >
            <FiMail className="w-4 h-4" /> Contact UPEMA Desk
          </a>

        </div>
      </section>

      {/* =========================================================
          5. CLEAN REGISTRATION MODAL (READY FOR BACKEND POST CALL)
      ======================================================== */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm font-sans">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-lg max-w-md w-full overflow-hidden shadow-2xl border border-[#C9A45C]"
            >
              {/* Header */}
              <div className="bg-[#0B1F3A] text-white p-5 relative border-b border-[#C9A45C]">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-white p-1 cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>
                
                <span className="text-[10px] text-[#C9A45C] uppercase tracking-widest font-bold font-sans">
                  Event Pass Registration
                </span>
                <h3 className="text-lg font-sans font-bold mt-1 text-white">{selectedEvent.title}</h3>
                <p className="text-xs text-slate-300 mt-1 font-sans">
                  📅 {selectedEvent.date} | 📍 {selectedEvent.city}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs text-[#0B1F3A] font-sans">
                
                <div>
                  <label className="block font-semibold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F2] border border-gray-300 rounded focus:border-[#C9A45C] focus:outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F2] border border-gray-300 rounded focus:border-[#C9A45C] focus:outline-none font-sans"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF8F2] border border-gray-300 rounded focus:border-[#C9A45C] focus:outline-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF8F2] border border-gray-300 rounded focus:border-[#C9A45C] focus:outline-none font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Number of Passes</label>
                  <select
                    value={formData.passCount}
                    onChange={(e) => setFormData({ ...formData, passCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-[#FAF8F2] border border-gray-300 rounded focus:border-[#C9A45C] focus:outline-none cursor-pointer font-sans"
                  >
                    <option value={1}>1 Pass</option>
                    <option value={2}>2 Passes</option>
                    <option value={5}>5 Passes</option>
                  </select>
                </div>

                {/* Submit Action */}
                <div className="pt-3 flex items-center justify-end gap-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium cursor-pointer font-sans"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#C9A45C] hover:bg-[#D9B873] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-colors shadow cursor-pointer font-sans"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </button>
                </div>

              </form>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </main>
  )
}

export default UpcomingEvents
