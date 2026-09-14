import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiX,
  FiCamera,
  FiFilter,
  FiUploadCloud,
  FiCheckCircle,
  FiHeart
} from 'react-icons/fi'

// Showcase 3D Perspective Slider Data (WDC India Inspired Design Studio Cards)
const DESIGN_STUDIO_CAROUSEL = [
  {
    id: 'ds-1',
    title: 'Royal Mughal Rose Mandap & Water Pavilion',
    category: 'Floral & Environment Builds',
    location: 'Jaypee Palace, Agra',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80',
    description: '10,000+ Dutch roses and suspended crystal chandeliers engineered over a custom mirror pool floor.'
  },
  {
    id: 'ds-[#02]',
    title: '50-Foot German Truss Rigging & LED Kinetic Ceiling',
    category: 'German Truss & AV Lighting',
    location: 'Indira Gandhi Pratishthan, Lucknow',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80',
    description: 'Heavy-duty German truss structure with 120 motorized pixel moving heads and automated DMX control.'
  },
  {
    id: 'ds-3',
    title: 'Grand Palace Entrance Arch & Imperial Lighting',
    category: 'Luxury Wedding Mandaps',
    location: 'Taj Nadesar Palace, Varanasi',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80',
    description: 'Traditional carved pillar archway with warm amber wash lights and hand-strung marigold garlands.'
  },
  {
    id: 'ds-4',
    title: 'Contemporary Botanical Banquet Glasshouse',
    category: 'Floral & Environment Builds',
    location: 'Expo Centre, Noida',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80',
    description: 'Transparent glasshouse dining canopy adorned with hanging fern ceiling installations and warm fairy lights.'
  },
  {
    id: 'ds-5',
    title: 'Kinetic Laser & Cold Pyrotechnic Stage Show',
    category: 'German Truss & AV Lighting',
    location: 'Kanpur Club Grounds, Kanpur',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80',
    description: 'Synchronized cold pyro sparks and multi-beam lasers for executive award ceremony stage entry.'
  }
]

// Photo Gallery Grid Data
const GALLERY_PHOTOS = [
  {
    id: 1,
    title: 'Royal Palace Mandap Setup',
    category: 'Luxury Wedding Mandaps',
    city: 'Agra',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80',
    vendor: 'Royal Decor Crafts'
  },
  {
    id: 2,
    title: 'Outdoor German Truss Arena',
    category: 'German Truss & AV Lighting',
    city: 'Lucknow',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
    vendor: 'Apex Trussing & AV'
  },
  {
    id: 3,
    title: 'Exhibition Banquet Hall Interior',
    category: 'Royal Banquet Interiors',
    city: 'Noida',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
    vendor: 'Elegance Event Venues'
  },
  {
    id: 4,
    title: 'Varanasi Gala Night Red Carpet',
    category: 'Gala & Award Nights',
    city: 'Varanasi',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    vendor: 'Banaras Production House'
  },
  {
    id: 5,
    title: 'Intelligent DMX Moving Lighting',
    category: 'German Truss & AV Lighting',
    city: 'Kanpur',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80',
    vendor: 'Smart Stage Lights'
  },
  {
    id: 6,
    title: 'Luxury Floral Dining Pavilion',
    category: 'Floral & Environment Builds',
    city: 'Prayagraj',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
    vendor: 'Gourmet & Floral Concepts'
  },
  {
    id: 7,
    title: 'Imperial Chandelier Ceiling',
    category: 'Royal Banquet Interiors',
    city: 'Lucknow',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    vendor: 'Heritage Palace Designers'
  },
  {
    id: 8,
    title: 'Excellence Awards Trophy Stage',
    category: 'Gala & Award Nights',
    city: 'Agra',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    vendor: 'UPEMA Secretariat'
  }
]

const CATEGORIES = [
  'All Photos',
  'Luxury Wedding Mandaps',
  'German Truss & AV Lighting',
  'Floral & Environment Builds',
  'Gala & Award Nights',
  'Royal Banquet Interiors'
]

const PhotoGallery = () => {
  // 3D Coverflow Carousel Active Index State
  const [carouselIndex, setCarouselIndex] = useState(1) // middle card default
  
  // Gallery Filter State
  const [selectedCategory, setSelectedCategory] = useState('All Photos')

  // Lightbox Modal State
  const [lightboxPhoto, setLightboxPhoto] = useState(null)

  // Auto-slide 3D Carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % DESIGN_STUDIO_CAROUSEL.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + DESIGN_STUDIO_CAROUSEL.length) % DESIGN_STUDIO_CAROUSEL.length)
  }

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % DESIGN_STUDIO_CAROUSEL.length)
  }

  // Filtered Photos Grid
  const filteredPhotos = GALLERY_PHOTOS.filter(
    (photo) => selectedCategory === 'All Photos' || photo.category === selectedCategory
  )

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
            backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=80')"
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
            UPEMA VISUAL ARCHIVES
          </motion.div>

          {/* Main Heading (Exact gradient font styling as Why Become a Member) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
              Visual Showcase of Luxury &
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Stagecraft
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
            Explore real production photos of royal mandaps, German truss rigging, kinetic lighting, and luxury floral decor from accredited UPEMA members.
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
                  5,000<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  High-Res Photos
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  300<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Verified Vendors
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  15<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Collections
                </span>
              </div>
            </div>
            
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mx-auto mt-6 opacity-80" />
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          2. DESIGN STUDIO 3D COVERFLOW PERSPECTIVE CAROUSEL SECTION (WDC INDIA INSPIRED)
      ======================================================== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#FAF8F2] via-[#F4EFE3] to-[#FAF8F2] text-[#0B1F3A] relative overflow-hidden border-t-2 border-b-2 border-[#C9A45C] font-sans">
        
        {/* Subtle Luxury Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#C9A45C_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-[0.18] pointer-events-none" />

        {/* Animated Floating Ambient Glowing Spheres */}
        <motion.div
          animate={{
            y: [-25, 25, -25],
            x: [-15, 15, -15],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#C9A45C]/15 rounded-full blur-3xl pointer-events-none"
        />

        <motion.div
          animate={{
            y: [25, -25, 25],
            x: [15, -15, 15],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#0B1F3A]/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs text-[#C9A45C] uppercase tracking-[0.2em] font-bold">
              UPEMA DESIGN STUDIO SHOWCASE
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans text-[#0B1F3A]">
              <span>
                Design Studio &
              </span>{' '}
              <span className="font-serif italic font-bold text-[#C9A45C]">
                Stagecraft Builds
              </span>
            </h2>

            {/* Animated Gold Accent Bar */}
            <motion.div 
              animate={{ width: ['40px', '96px', '40px'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="h-1 bg-gradient-to-r from-[#C9A45C] via-[#D9B873] to-[#C9A45C] mx-auto rounded-full my-2 shadow-[0_0_12px_rgba(201,164,92,0.6)]"
            />

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              A quick look inside our floral, furniture, lighting, and environmental builds tested & executed across Uttar Pradesh.
            </p>
          </div>

          {/* 3D Perspective Card Slider Container */}
          <div className="relative py-8 flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
            
            {/* Left Nav Arrow Button */}
            <button
              onClick={handlePrevCarousel}
              className="absolute left-2 sm:left-6 z-30 w-12 h-12 rounded-full bg-[#0B1F3A] border-2 border-[#C9A45C] text-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#0B1F3A] transition-all flex items-center justify-center shadow-2xl cursor-pointer"
              title="Previous Design"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            {/* Cards 3D Perspective Layout */}
            <div className="w-full max-w-6xl flex items-center justify-center relative perspective-[1200px]">
              {DESIGN_STUDIO_CAROUSEL.map((item, index) => {
                
                // Calculate relative position to active carousel index
                const len = DESIGN_STUDIO_CAROUSEL.length
                let diff = (index - carouselIndex + len) % len
                if (diff > len / 2) diff -= len

                // Determine 3D transform styles
                let isCenter = diff === 0
                let isLeft = diff === -1 || (diff === len - 1 && len > 2)
                let isRight = diff === 1 || (diff === -(len - 1) && len > 2)

                // Hide cards further away
                if (!isCenter && !isLeft && !isRight) return null

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setCarouselIndex(index)}
                    animate={{
                      scale: isCenter ? 1 : 0.84,
                      rotateY: isLeft ? 18 : isRight ? -18 : 0,
                      x: isLeft ? '-45%' : isRight ? '45%' : '0%',
                      opacity: isCenter ? 1 : 0.7,
                      zIndex: isCenter ? 20 : 10
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute w-[85%] sm:w-[65%] lg:w-[50%] rounded-xl overflow-hidden shadow-2xl cursor-pointer border ${
                      isCenter
                        ? 'border-2 border-[#C9A45C] shadow-[0_15px_35px_rgba(11,31,58,0.3)]'
                        : 'border-gray-300 opacity-75 grayscale-[20%]'
                    }`}
                  >
                    <div className="relative h-[260px] sm:h-[340px] md:h-[400px] overflow-hidden bg-gray-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/20 to-transparent" />

                      {/* Card Content Overlay */}
                      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-left space-y-1">
                        <span className="text-[10px] sm:text-xs bg-[#C9A45C] text-[#0B1F3A] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded font-sans">
                          {item.category}
                        </span>
                        
                        <h3 className="text-base sm:text-xl font-bold font-sans text-white leading-snug">
                          {item.title}
                        </h3>

                        <div className="text-xs text-[#C9A45C] font-semibold">
                          📍 {item.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Right Nav Arrow Button */}
            <button
              onClick={handleNextCarousel}
              className="absolute right-2 sm:right-6 z-30 w-12 h-12 rounded-full bg-[#0B1F3A] border-2 border-[#C9A45C] text-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#0B1F3A] transition-all flex items-center justify-center shadow-2xl cursor-pointer"
              title="Next Design"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Active Carousel Details Bar */}
          <div className="mt-4 text-center max-w-xl mx-auto bg-[#0B1F3A] border border-[#C9A45C]/40 p-4 rounded-lg text-white shadow-md">
            <h4 className="text-sm font-bold text-[#C9A45C]">
              {DESIGN_STUDIO_CAROUSEL[carouselIndex].title}
            </h4>
            <p className="text-xs text-slate-200 mt-1">
              {DESIGN_STUDIO_CAROUSEL[carouselIndex].description}
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          3. FILTERABLE PHOTO GALLERY GRID
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
        
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? 'bg-[#0B1F3A] text-[#C9A45C] border border-[#C9A45C] shadow-md'
                    : 'bg-white text-[#0B1F3A] hover:bg-[#E7E0D3] border border-gray-200'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxPhoto(photo)}
              className="bg-white rounded-lg overflow-hidden border border-[#E7E0D3] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] bg-[#C9A45C] text-[#0B1F3A] px-2 py-0.5 rounded font-bold uppercase">
                      {photo.city}
                    </span>
                    <h4 className="text-sm font-bold mt-1 text-white">{photo.title}</h4>
                    <p className="text-[11px] text-slate-300">By {photo.vendor}</p>
                  </div>
                  <FiMaximize2 className="absolute top-4 right-4 text-[#C9A45C] w-5 h-5 opacity-90" />
                </div>
              </div>

              <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between text-xs text-[#0B1F3A]">
                <span className="font-semibold truncate">{photo.title}</span>
                <span className="text-[#C9A45C] font-bold text-[10px]">📍 {photo.city}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* =========================================================
          4. SUBMIT PORTFOLIO CTA SECTION
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 font-sans">
        <div className="bg-[#0B1F3A] text-white rounded-lg p-8 sm:p-10 border border-[#C9A45C]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs text-[#C9A45C] uppercase tracking-widest font-bold font-sans">
              UPEMA Member Showcase
            </span>
            <h3 className="text-2xl font-sans font-bold">
              Are You an Accredited UPEMA Member?
            </h3>
            <p className="text-xs text-slate-300 font-normal font-sans">
              Feature your stagecraft, floral design, or AV lighting portfolio in our official state directory gallery.
            </p>
          </div>

          <a
            href="mailto:gallery@upema.in?subject=Member%20Photo%20Submission"
            className="bg-[#C9A45C] hover:bg-[#D9B873] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors flex items-center gap-2 shadow cursor-pointer whitespace-nowrap font-sans"
          >
            <FiUploadCloud className="w-4 h-4" /> Submit Portfolio Photos
          </a>

        </div>
      </section>

      {/* =========================================================
          5. LIGHTBOX PHOTO MODAL
      ======================================================== */}
      <AnimatePresence>
        {lightboxPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md font-sans">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0B1F3A] rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl border border-[#C9A45C] relative"
            >
              <button
                onClick={() => setLightboxPhoto(null)}
                className="absolute top-4 right-4 z-20 text-gray-300 hover:text-white p-2 rounded bg-black/50 cursor-pointer"
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="h-[400px] sm:h-[500px] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={lightboxPhoto.image}
                  alt={lightboxPhoto.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#C9A45C]/30 bg-[#081729]">
                <div>
                  <span className="text-[10px] bg-[#C9A45C] text-[#0B1F3A] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {lightboxPhoto.category}
                  </span>
                  <h3 className="text-lg font-bold mt-1 text-white">{lightboxPhoto.title}</h3>
                  <p className="text-xs text-slate-300">
                    📍 {lightboxPhoto.city} • Production by <strong>{lightboxPhoto.vendor}</strong>
                  </p>
                </div>

                <button
                  onClick={() => setLightboxPhoto(null)}
                  className="bg-[#C9A45C] text-[#0B1F3A] font-bold text-xs uppercase px-4 py-2 rounded hover:bg-[#D9B873] cursor-pointer"
                >
                  Close Photo
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </main>
  )
}

export default PhotoGallery
