import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCalendar,
  FiFileText,
  FiSearch,
  FiX,
  FiArrowRight,
  FiCheckCircle,
  FiMail,
  FiClock,
  FiZap,
  FiAward,
  FiTrendingUp
} from 'react-icons/fi'

// Mock Data for Latest News & Press Coverage
const NEWS_DATA = [
  {
    id: 'news-1',
    title: 'UPEMA Secures Single-Window Clearance Framework with UP Tourism Board',
    subtitle: 'Streamlining Police, Fire, Municipal, and Sound NOC permissions across 25 UP Districts.',
    category: 'Government Policy & NOCs',
    date: 'Aug 20, 2026',
    publisher: 'Times of India / Trade Desk',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    summary: 'In a major boost to Uttar Pradesh’s wedding and corporate events sector, UPEMA officials met with state authorities to inaugurate a unified portal for event approvals.',
    fullArticle: `
      LUCKNOW — Uttar Pradesh Event Management Association (UPEMA) has officially signed a historic memorandum of understanding with state tourism and municipal authorities to establish North India’s first single-window clearance portal for wedding conclaves and commercial expos.

      Under this new directive, event organizers will no longer need to visit multiple municipal offices for Police NOCs, Fire Safety Approvals, and Sound Curfew Extensions. Instead, UPEMA accredited members can lodge a single digital application 7 days prior to an event.

      "This is a transformative milestone for over 300+ accredited wedding planners, venue owners, and technical crews in Uttar Pradesh," stated UPEMA Governing Body in Lucknow today.
    `,
    highlights: [
      'Single digital application replaces 6 separate government NOC approvals',
      'Turnaround time for event permits reduced from 14 days to 48 hours',
      'Applies to Lucknow, Noida, Agra, Varanasi, Prayagraj, and Kanpur'
    ],
    featured: true
  },
  {
    id: 'news-2',
    title: 'New Safety Audit Guidelines Released for Outdoor High-Load German Truss Stages',
    subtitle: 'Mandatory structural load certificates required for outdoor event setups above 30 feet.',
    category: 'Event Safety Norms',
    date: 'Aug 12, 2026',
    publisher: 'Economic Times & Event Reporter',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    summary: 'UPEMA Technical Safety Cell releases safety guidelines covering wind shear calculations, electrical grounding, and structural truss rigging audits.',
    fullArticle: `
      NOIDA — Following unpredictable weather turbulence during summer expos, UPEMA’s Technical Cell has released compulsory safety protocols for high-load truss rigging and outdoor LED screen structures.

      All member fabricators must now complete a certified 12-point structural audit prior to mounting line-array speakers or heavy lighting rigs exceeding 1,500 kg.

      Free technical masterclasses are being organized in Noida and Kanpur to train on-site rigging supervisors on digital load sensor installation.
    `,
    highlights: [
      'Mandatory wind speed resistance rating of 65 km/h for stage setups',
      'Compulsory dual-line safety wire backups for all suspended LED panels',
      'UPEMA certification badges issued to certified rigging engineers'
    ],
    featured: false
  },
  {
    id: 'news-3',
    title: 'Uttar Pradesh Destination Wedding Market Projected to Cross ₹12,000 Crore',
    subtitle: 'Agra, Varanasi, and Prayagraj emerging as top royal wedding circuits in India.',
    category: 'Trade Exhibitions',
    date: 'Jul 28, 2026',
    publisher: 'Hindustan Times Hospitality',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    summary: 'A joint market research report by UPEMA and Tourism Consultants highlights a 35% year-on-year surge in luxury heritage weddings across UP.',
    fullArticle: `
      AGRA — Uttar Pradesh is rapidly rising as India’s leading destination wedding hub. Heritage fort properties, riverside ghat convention lawns, and palace resorts in Agra, Varanasi, and Ayodhya are experiencing record bookings.

      The report indicates that high-net-worth NRI families are choosing UP properties for royal theme weddings, generating employment for over 50,000 seasonal decorators, florists, and hospitality staff.

      UPEMA is launching the 'Destination UP' portal to connect verified local vendors directly with international wedding agencies.
    `,
    highlights: [
      '35% YoY growth in luxury destination weddings across UP',
      'Over 50,000 seasonal jobs generated across decor, catering, and sound sectors',
      'UPEMA introducing direct B2B vendor matching portal'
    ],
    featured: false
  },
  {
    id: 'news-4',
    title: 'UPEMA Announces Executive Committee Elections for 2026-2028 Biennial Term',
    subtitle: 'Nomination desk opens for Zonal Secretariat posts across 8 regional chapters.',
    category: 'Executive Appointments',
    date: 'Jul 15, 2026',
    publisher: 'UPEMA Official Bulletin',
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    summary: 'The biennial election committee has published the official voter list and timetable for electing UPEMA President, Vice Presidents, and Zonal Chairs.',
    fullArticle: `
      LUCKNOW — The Governing Body of UPEMA has formally announced the schedule for the 2026-2028 Executive Elections. Voting will take place across Lucknow, Noida, Varanasi, and Agra chapters.

      Accredited corporate members and associate vendor delegates with active membership standing are eligible to cast votes for key leadership posts.
    `,
    highlights: [
      'Digital & In-Person Voting options for zonal members',
      'Final election results and oath ceremony set for October 2026',
      'Independent Returning Officer appointed to oversee election transparency'
    ],
    featured: false
  },
  {
    id: 'news-5',
    title: 'FSSAI & UPEMA Launch Joint Food Safety Certification for Banquet Caterers',
    subtitle: 'Ensuring zero-waste gourmet dining and cold-chain hygiene in royal weddings.',
    category: 'Event Safety Norms',
    date: 'Jun 30, 2026',
    publisher: 'Food & Culinary Trade Journal',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    summary: 'Over 200+ catering firms receive official UPEMA-FSSAI hygiene seals following audits on cold storage and live kitchen sanitation.',
    fullArticle: `
      PRAYAGRAJ — Food safety officers alongside UPEMA Food Cell leads have concluded a state-wide inspection drive for large-scale wedding caterers.

      Catering firms meeting strict temperature control, clean water filtration, and eco-friendly waste disposal guidelines have been awarded serialized compliance seals.
    `,
    highlights: [
      '200+ verified catering firms awarded FSSAI-UPEMA Hygiene Seals',
      'Mandatory cold chain maintenance for raw dairy and meat ingredients',
      'Partnership with food recovery NGOs for zero-waste wedding buffets'
    ],
    featured: false
  }
]

const MEDIA_OUTLETS = [
  'Times of India',
  'Economic Times',
  'Hindustan Times',
  'Event Reporter',
  'Financial Express',
  'UPEMA Gazette'
]

const CATEGORIES = [
  'All News',
  'Government Policy & NOCs',
  'Event Safety Norms',
  'Trade Exhibitions',
  'Executive Appointments'
]

const LatestNews = () => {
  // Filter States
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All News')

  // Lightbox Article Reader Modal State
  const [activeArticle, setActiveArticle] = useState(null)

  // Filtered News Logic
  const filteredNews = useMemo(() => {
    return NEWS_DATA.filter((item) => {
      const search = searchTerm.toLowerCase().trim()
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.subtitle.toLowerCase().includes(search) ||
        item.summary.toLowerCase().includes(search) ||
        item.publisher.toLowerCase().includes(search)

      const matchesCategory =
        selectedCategory === 'All News' || item.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const featuredNews = NEWS_DATA.find((n) => n.featured) || NEWS_DATA[0]
  const sideArticles = NEWS_DATA.filter((n) => n.id !== featuredNews.id)

  return (
    <main className="w-full bg-[#FAF8F2] min-h-screen selection:bg-[#C9A45C] selection:text-[#0B1F3A] font-sans">
      
      {/* =========================================================
          1. HERO SECTION (MATCHING WHY BECOME A MEMBER FONT & GRADIENT)
      ======================================================== */}
      <section className="relative w-full min-h-[460px] md:min-h-[500px] bg-[#0B1F3A] flex items-center justify-center overflow-hidden text-white font-sans border-b border-[#C9A45C]/30">
        
        {/* Background Image with Dark Navy Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        
        {/* Dark Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/90 via-[#0B1F3A]/85 to-[#0B1F3A]/95 pointer-events-none" />

        {/* Decorative Lighting Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C9A45C]/10 rounded-full blur-[130px] pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-14">
          
          {/* Small Gold Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9A45C]/40 text-[#C9A45C] text-xs font-bold uppercase tracking-widest mb-5 shadow-md font-sans"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
            UPEMA OFFICIAL MEDIA & PRESS DESK
          </motion.div>

          {/* Main Heading (Exact gradient font styling as Why Become a Member) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
              Latest Industry News &
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Press Releases
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
            Stay updated with official UPEMA trade announcements, policy updates, government clearances, and national media coverage.
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
                  150<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Press Bulletins
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  25<span className="text-[#C9A45C]">+</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Media Partners
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-sans">
                  100<span className="text-[#C9A45C]">%</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase font-sans">
                  Verified Releases
                </span>
              </div>
            </div>
            
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mx-auto mt-6 opacity-80" />
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          2. LIVE BREAKING NEWS MARQUEE TICKER (EDITORIAL ACCENT)
      ======================================================== */}
      <div className="bg-[#07172B] border-b border-[#C9A45C]/30 text-[#D9B873] py-2.5 px-4 font-sans overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex items-center gap-4 text-xs">
          
          <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider bg-[#C9A45C] text-[#0B1F3A] px-2.5 py-0.5 rounded text-[10px] whitespace-nowrap flex-shrink-0">
            <FiZap className="w-3 h-3" /> BREAKING NEWS
          </div>

          <div className="truncate text-slate-200">
            <span className="font-semibold text-[#D9B873]">LATEST DIRECTIVE:</span> UPEMA Secures Single-Window NOC Portal Across 25 Districts • UP EMA Safety Audit Regulations 2.0 Issued • Destination Wedding Market Crosses ₹12,000 Cr.
          </div>

        </div>
      </div>

      {/* =========================================================
          3. ASYMMETRIC EDITORIAL FRONT PAGE (MAGAZINE STYLE LAYOUT)
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT MAIN EDITORIAL COLUMN (7 COLS) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#E7E0D3] shadow-md p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <span className="text-xs bg-[#C9A45C] text-[#0B1F3A] font-extrabold uppercase tracking-wider px-3 py-1 rounded">
                ★ FEATURED COVER STORY
              </span>

              <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <FiCalendar className="text-[#C9A45C]" /> {featuredNews.date}
                <span>•</span>
                <FiClock className="text-[#C9A45C]" /> {featuredNews.readTime}
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-snug">
              {featuredNews.title}
            </h2>

            {/* Feature Cover Image */}
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-gray-100 group cursor-pointer" onClick={() => setActiveArticle(featuredNews)}>
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  Click to read full press release <FiArrowRight />
                </span>
              </div>
            </div>

            {/* Excerpt Subtitle */}
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {featuredNews.subtitle}
            </p>

            {/* Key Outcomes Box */}
            <div className="bg-[#FAF8F2] border-l-4 border-[#C9A45C] p-4 rounded-r-md space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                Key Directives Summary:
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                {featuredNews.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#C9A45C] w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Read Action Button */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-semibold">
                Source: <strong>{featuredNews.publisher}</strong>
              </span>

              <button
                onClick={() => setActiveArticle(featuredNews)}
                className="bg-[#0B1F3A] hover:bg-[#173B5E] text-[#C9A45C] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors shadow cursor-pointer flex items-center gap-2"
              >
                Read Cover Story <FiArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* RIGHT EDITORIAL COLUMN: TRENDING BULLETINS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header Tag */}
            <div className="bg-[#0B1F3A] text-white p-4 rounded-xl border border-[#C9A45C]/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FiTrendingUp className="text-[#C9A45C] w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Trending Trade Bulletins
                </h3>
              </div>
              <span className="text-[10px] text-[#C9A45C] font-semibold">OFFICIAL DESK</span>
            </div>

            {/* Vertical Bulletin Items */}
            <div className="space-y-4">
              {sideArticles.map((article, index) => (
                <div
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="bg-white rounded-xl p-5 border border-[#E7E0D3] shadow-sm hover:shadow-md hover:border-[#C9A45C] transition-all cursor-pointer group flex items-start gap-4"
                >
                  {/* Number Badge */}
                  <span className="text-2xl font-serif font-bold text-[#C9A45C] opacity-80 group-hover:opacity-100 flex-shrink-0">
                    0{index + 1}
                  </span>

                  <div className="space-y-1.5">
                    <span className="text-[10px] bg-[#FAF8F2] border border-[#C9A45C]/30 text-[#0B1F3A] font-bold uppercase px-2 py-0.5 rounded">
                      {article.category}
                    </span>

                    <h4 className="text-sm font-bold text-[#0B1F3A] group-hover:text-[#C9A45C] transition-colors leading-snug">
                      {article.title}
                    </h4>

                    <div className="flex items-center justify-between text-[11px] text-gray-500 pt-1">
                      <span>📅 {article.date}</span>
                      <span className="text-[#C9A45C] font-semibold flex items-center gap-0.5">
                        Read <FiArrowRight />
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          4. MEDIA OUTLETS LOGO STRIP (WDC INDIA INSPIRED EDITORIAL)
      ======================================================== */}
      <section className="bg-white py-8 border-t border-b border-[#E7E0D3] font-sans">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em]">
            FEATURED IN NATIONAL MEDIA & TRADE PUBLICATIONS
          </span>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75">
            {MEDIA_OUTLETS.map((outlet, i) => (
              <span key={i} className="text-xs sm:text-sm font-serif font-bold text-[#0B1F3A] border border-gray-200 px-4 py-2 rounded-md bg-[#FAF8F2] shadow-sm">
                📰 {outlet}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. SEARCH & CATEGORY FILTER BAR + ARTICLES ARCHIVE
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs text-[#C9A45C] font-bold uppercase tracking-widest">
            UPEMA PRESS ARCHIVE
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
            Explore All Official Announcements & Articles
          </h3>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#E7E0D3] shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            <div className="md:col-span-8 relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search archive by keyword, topic, or publisher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded focus:outline-none focus:border-[#C9A45C] text-[#0B1F3A]"
              />
            </div>

            <div className="md:col-span-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded focus:outline-none focus:border-[#C9A45C] text-[#0B1F3A] cursor-pointer"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E7E0D3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#0B1F3A] text-[#C9A45C] border border-[#C9A45C]/40 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase">
                    {news.category}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-500">
                    <span>📅 {news.date}</span>
                    <span>⏱ {news.readTime}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#0B1F3A] leading-snug group-hover:text-[#C9A45C] transition-colors">
                    {news.title}
                  </h4>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {news.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveArticle(news)}
                  className="w-full bg-[#FAF8F2] hover:bg-[#0B1F3A] text-[#0B1F3A] hover:text-[#C9A45C] font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors text-center border border-[#E7E0D3] shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  Read Release <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* =========================================================
          6. PRESS ACCREDITATION CTA
      ======================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 font-sans">
        <div className="bg-[#0B1F3A] text-white rounded-xl p-8 sm:p-10 border border-[#C9A45C]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs text-[#C9A45C] uppercase tracking-widest font-bold">
              UPEMA Press & Media Cell
            </span>
            <h3 className="text-2xl font-bold">
              Journalist or Media House Representative?
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              Request official press kits, executive interview appointments, or media pass accreditation.
            </p>
          </div>

          <a
            href="mailto:press@upema.in?subject=Media%20Accreditation%20Inquiry"
            className="bg-[#C9A45C] hover:bg-[#D9B873] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors flex items-center gap-2 shadow cursor-pointer whitespace-nowrap"
          >
            <FiMail className="w-4 h-4" /> Contact Press Office
          </a>

        </div>
      </section>

      {/* =========================================================
          7. ARTICLE READER LIGHTBOX MODAL
      ======================================================== */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-sans">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#C9A45C]"
            >
              {/* Modal Header */}
              <div className="bg-[#0B1F3A] text-white p-6 relative border-b border-[#C9A45C]">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-white p-1 cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>

                <span className="text-[10px] bg-[#C9A45C] text-[#0B1F3A] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                  {activeArticle.category}
                </span>

                <h3 className="text-xl font-bold text-white mt-2 leading-snug">
                  {activeArticle.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  📰 {activeArticle.publisher} • 📅 {activeArticle.date}
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6 text-[#0B1F3A]">
                
                <div className="h-56 rounded overflow-hidden bg-gray-100 border border-gray-200">
                  <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#0B1F3A] mb-2">
                    Executive Press Release
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                    {activeArticle.fullArticle}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                    Key Directives Summary
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {activeArticle.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 bg-[#FAF8F2] p-2.5 rounded border border-gray-200">
                        <FiCheckCircle className="text-[#C9A45C] w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="bg-[#FAF8F2] p-4 border-t border-gray-200 flex items-center justify-between">
                <a
                  href={`mailto:press@upema.in?subject=Inquiry%20regarding%20${encodeURIComponent(activeArticle.title)}`}
                  className="text-xs font-bold text-[#0B1F3A] hover:text-[#C9A45C] flex items-center gap-1 cursor-pointer"
                >
                  <FiMail /> Request Full Official PDF
                </a>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="bg-[#0B1F3A] hover:bg-[#173B5E] text-[#C9A45C] font-bold text-xs uppercase tracking-wider px-5 py-2 rounded transition-colors cursor-pointer"
                >
                  Close Article
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </main>
  )
}

export default LatestNews
