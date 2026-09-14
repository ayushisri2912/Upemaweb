import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiPlay,
  FiVideo,
  FiClock,
  FiMapPin,
  FiCalendar,
  FiX,
  FiSearch,
  FiFilm,
  FiShare2,
  FiUploadCloud
} from 'react-icons/fi'
import sampleVideo from '../../assets/videos/vido.mp4'

// Mock Data for Video Highlights
const VIDEO_HIGHLIGHTS_DATA = [
  {
    id: 'vid-1',
    title: 'UPEMA Grand Annual Convention Lucknow 2025 (Official Aftermovie)',
    category: 'Official Aftermovies',
    duration: '04:25',
    date: 'Oct 15, 2025',
    city: 'Lucknow',
    venue: 'Indira Gandhi Pratishthan, Lucknow',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    videoUrl: sampleVideo,
    description: 'Relive the highlights of UPEMA\'s flagship convention featuring 2,000+ delegates, 180+ exhibition stalls, and royal gala performances.',
    featured: true
  },
  {
    id: 'vid-2',
    title: 'German Truss Rigging & 120-head LED Laser Light Show Demos',
    category: 'Stagecraft & Sound Demos',
    duration: '03:10',
    date: 'Jul 20, 2025',
    city: 'Noida',
    venue: 'Expo Centre Noida, Sector 62',
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    videoUrl: sampleVideo,
    description: 'High-load outdoor truss stability tests, acoustic tuning, and motorized LED kinetic ceiling synchronization.',
    featured: false
  },
  {
    id: 'vid-3',
    title: 'Agra Heritage Palace Wedding Conclave Highlight Reel',
    category: 'Wedding Conclave Reels',
    duration: '05:40',
    date: 'Nov 19, 2024',
    city: 'Agra',
    venue: 'Jaypee Palace Hotel, Agra',
    thumbnail: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    videoUrl: sampleVideo,
    description: 'A cinematic look at royal palace venues, single-window government tourism permits, and floral mandap installations.',
    featured: false
  },
  {
    id: 'vid-4',
    title: 'Varanasi Leadership Oath Ceremony & Classical Fusion Gala',
    category: 'Keynote & Award Galas',
    duration: '02:55',
    date: 'Dec 05, 2024',
    city: 'Varanasi',
    venue: 'Taj Nadesar Palace, Varanasi',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    videoUrl: sampleVideo,
    description: 'Highlights from the Eastern UP Zonal Secretariat oath ceremony and felicitations evening in Varanasi.',
    featured: false
  },
  {
    id: 'vid-5',
    title: 'Kanpur DMX Intelligent Lighting & Pyrotechnics Showcase',
    category: 'Stagecraft & Sound Demos',
    duration: '03:45',
    date: 'Feb 16, 2023',
    city: 'Kanpur',
    venue: 'Kanpur Club Grounds, Kanpur',
    thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    videoUrl: sampleVideo,
    description: 'Demonstration of pixel mapping consoles, cold pyrotechnic spark fountains, and laser beam arrays.',
    featured: false
  },
  {
    id: 'vid-6',
    title: 'Prayagraj Gourmet Catering & Plating Masterclass Recap',
    category: 'Stagecraft & Sound Demos',
    duration: '04:15',
    date: 'May 10, 2023',
    city: 'Prayagraj',
    venue: 'Hotel Kanha Shyam, Prayagraj',
    thumbnail: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    videoUrl: sampleVideo,
    description: 'Live counters styling, cold chain logistics, and FSSAI hygiene audit certifications for banquet catering.',
    featured: false
  }
]

const CATEGORIES = [
  'All Videos',
  'Official Aftermovies',
  'Stagecraft & Sound Demos',
  'Keynote & Award Galas',
  'Wedding Conclave Reels'
]

const VideoHighlights = () => {
  // Filter States
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Videos')

  // Selected Video Modal State
  const [activeVideo, setActiveVideo] = useState(null)

  // Filtered Videos Logic
  const filteredVideos = useMemo(() => {
    return VIDEO_HIGHLIGHTS_DATA.filter((video) => {
      const search = searchTerm.toLowerCase().trim()
      const matchesSearch =
        !search ||
        video.title.toLowerCase().includes(search) ||
        video.city.toLowerCase().includes(search) ||
        video.venue.toLowerCase().includes(search) ||
        video.description.toLowerCase().includes(search)

      const matchesCategory =
        selectedCategory === 'All Videos' || video.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const featuredVideo = VIDEO_HIGHLIGHTS_DATA.find((v) => v.featured) || VIDEO_HIGHLIGHTS_DATA[0]

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
            backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        
        {/* Dark Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/90 via-[#0B1F3A]/85 to-[#0B1F3A]/95 pointer-events-none" />

        {/* Decorative Lighting Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C9A45C]/10 rounded-full blur-[130px] pointer-events-none" />

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
            UPEMA CINEMATIC SHOWCASE
          </motion.div>

          {/* Main Heading (Exact gradient font styling as Why Become a Member) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
              Video Highlights &
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Event Reels
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
            Experience high-definition 4K video recaps of grand wedding conclaves, live stagecraft demos, light shows, and UPEMA annual galas.
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
                  100<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  4K Video Recaps
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  50<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Event Reels
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  25<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Zonal Chapters
                </span>
              </div>
            </div>
            
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mx-auto mt-6 opacity-80" />
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          2. MINIMAL FEATURED SPOTLIGHT CINEMA BANNER
      ======================================================== */}
      {featuredVideo && (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 font-sans">
          <div className="bg-[#0B1F3A] text-white rounded-xl shadow-2xl overflow-hidden border border-[#C9A45C]/40 grid grid-cols-1 lg:grid-cols-12">
            
            {/* Player / Thumbnail Column */}
            <div
              onClick={() => setActiveVideo(featuredVideo)}
              className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] overflow-hidden group cursor-pointer bg-black"
            >
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-black/30" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C9A45C] text-[#0B1F3A] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <FiPlay className="w-8 h-8 ml-1" />
                </div>
              </div>

              <span className="absolute top-4 left-4 bg-[#C9A45C] text-[#0B1F3A] font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded shadow">
                ★ FEATURED AFTERMOVIE
              </span>

              <span className="absolute bottom-4 right-4 bg-black/80 text-[#C9A45C] border border-[#C9A45C]/40 px-2.5 py-1 rounded text-xs font-bold font-sans">
                ⏱ {featuredVideo.duration}
              </span>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs text-[#C9A45C] font-bold uppercase tracking-wider">
                  {featuredVideo.category}
                </span>

                <h2 className="text-xl sm:text-2xl font-bold font-sans text-white mt-2 leading-snug">
                  {featuredVideo.title}
                </h2>

                <p className="text-xs text-slate-300 mt-2 font-normal leading-relaxed">
                  {featuredVideo.description}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-[#C9A45C]" /> {featuredVideo.venue}
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-[#C9A45C]" /> {featuredVideo.date}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveVideo(featuredVideo)}
                className="w-full bg-[#C9A45C] hover:bg-[#D9B873] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider py-3 rounded transition-colors text-center shadow cursor-pointer flex items-center justify-center gap-2"
              >
                <FiPlay className="w-4 h-4" /> Watch Official Aftermovie
              </button>
            </div>

          </div>
        </section>
      )}

      {/* =========================================================
          3. MINIMAL FILTER & SEARCH BAR
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-[#E7E0D3]">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search video highlights, venue, city, or event..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded focus:outline-none focus:border-[#C9A45C] transition-colors text-[#0B1F3A] font-sans"
              />
            </div>

            {/* Category Select */}
            <div className="md:col-span-4">
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

          {/* Result Count */}
          <div className="mt-3 flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100 font-sans">
            <div>
              Showing <strong className="text-[#0B1F3A] font-semibold">{filteredVideos.length}</strong> video highlights
            </div>

            {(searchTerm || selectedCategory !== 'All Videos') && (
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All Videos')
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
          4. MINIMAL & ELEGANT VIDEO HIGHLIGHTS CARDS GRID
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 font-sans">
        
        {filteredVideos.length === 0 ? (
          <div className="bg-white rounded-lg p-10 text-center border border-gray-200 max-w-md mx-auto my-6 font-sans">
            <FiFilm className="w-10 h-10 text-[#C9A45C] mx-auto mb-2 opacity-70" />
            <h3 className="text-base font-sans font-bold text-[#0B1F3A]">No Videos Found</h3>
            <p className="text-xs text-gray-500 mt-1">
              Try searching with a different search term or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg overflow-hidden border border-[#E7E0D3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between font-sans group"
              >
                
                <div>
                  {/* Thumbnail Container */}
                  <div
                    onClick={() => setActiveVideo(video)}
                    className="relative h-48 overflow-hidden bg-black cursor-pointer"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#C9A45C] text-[#0B1F3A] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <FiPlay className="w-5 h-5 ml-0.5" />
                      </div>
                    </div>

                    {/* Category Tag */}
                    <span className="absolute top-3 left-3 bg-[#0B1F3A] text-[#C9A45C] border border-[#C9A45C]/40 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-sans">
                      {video.category}
                    </span>

                    {/* Duration Badge */}
                    <span className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-0.5 rounded text-[11px] font-semibold">
                      {video.duration}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-sans font-bold text-[#0B1F3A] leading-snug group-hover:text-[#C9A45C] transition-colors">
                      {video.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-normal">
                      {video.description}
                    </p>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <span className="truncate">📍 {video.city}</span>
                      <span>📅 {video.date}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="w-full bg-[#0B1F3A] hover:bg-[#173B5E] text-[#C9A45C] font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors text-center border border-[#C9A45C]/40 shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <FiPlay className="w-3.5 h-3.5" /> Watch Highlight
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* =========================================================
          5. SUBMIT VIDEO COVERAGE CTA
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 font-sans">
        <div className="bg-[#0B1F3A] text-white rounded-lg p-8 sm:p-10 border border-[#C9A45C]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs text-[#C9A45C] uppercase tracking-widest font-bold font-sans">
              UPEMA Media Coverage Desk
            </span>
            <h3 className="text-2xl font-sans font-bold">
              Filmed a High-Definition Event Reel in UP?
            </h3>
            <p className="text-xs text-slate-300 font-normal font-sans">
              Share your accredited event aftermovies and technical stagecraft videos for official UPEMA media listing.
            </p>
          </div>

          <a
            href="mailto:media@upema.in?subject=Video%20Highlight%20Submission"
            className="bg-[#C9A45C] hover:bg-[#D9B873] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors flex items-center gap-2 shadow cursor-pointer whitespace-nowrap font-sans"
          >
            <FiUploadCloud className="w-4 h-4" /> Submit Video Reel
          </a>

        </div>
      </section>

      {/* =========================================================
          6. LIGHTBOX VIDEO PLAYER MODAL
      ======================================================== */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md font-sans">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0B1F3A] rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl border border-[#C9A45C] relative"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 text-gray-300 hover:text-white p-2 rounded bg-black/50 cursor-pointer"
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="h-[320px] sm:h-[450px] bg-black flex items-center justify-center overflow-hidden">
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#C9A45C]/30 bg-[#081729]">
                <div>
                  <span className="text-[10px] bg-[#C9A45C] text-[#0B1F3A] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {activeVideo.category}
                  </span>
                  <h3 className="text-lg font-bold mt-1 text-white">{activeVideo.title}</h3>
                  <p className="text-xs text-slate-300">
                    📍 {activeVideo.venue} • 📅 {activeVideo.date}
                  </p>
                </div>

                <button
                  onClick={() => setActiveVideo(null)}
                  className="bg-[#C9A45C] text-[#0B1F3A] font-bold text-xs uppercase px-4 py-2 rounded hover:bg-[#D9B873] cursor-pointer"
                >
                  Close Player
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </main>
  )
}

export default VideoHighlights
