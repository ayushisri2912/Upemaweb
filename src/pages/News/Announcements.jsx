import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiBell,
  FiCalendar,
  FiFileText,
  FiDownload,
  FiAlertCircle,
  FiSearch,
  FiCheckCircle,
  FiMail
} from 'react-icons/fi'

const ANNOUNCEMENTS_DATA = [
  {
    id: 'ann-1',
    refNo: 'UPEMA/ANN/2026/12',
    title: 'Urgent: Mandatory Submission of GST & MSME Certificates for Member Directory 2026-27',
    category: 'High Priority',
    date: 'Aug 22, 2026',
    deadline: 'Sept 15, 2026',
    description: 'All accredited wedding planners, venue owners, and AV fabricators are required to re-verify their GSTIN and MSME Udyam registration prior to the annual directory publication.',
    urgent: true
  },
  {
    id: 'ann-2',
    refNo: 'UPEMA/ANN/2026/11',
    title: 'Notice for Biennial General Body Meeting (AGM) 2026 in Lucknow',
    category: 'Meeting Notice',
    date: 'Aug 15, 2026',
    deadline: 'Oct 14, 2026',
    description: 'The Annual General Body Meeting of UPEMA will be held at Indira Gandhi Pratishthan, Lucknow. All executive members and zonal chairs are requested to attend.',
    urgent: false
  },
  {
    id: 'ann-3',
    refNo: 'UPEMA/ANN/2026/10',
    title: 'Schedule for German Truss Rigging & Sound Safety Certification Course (Noida Batch)',
    category: 'General Notice',
    date: 'Aug 05, 2026',
    deadline: 'Nov 01, 2026',
    description: 'Registrations are now open for the 3-day technical safety certification for outdoor stage fabricators. Limited to 50 seats per zonal batch.',
    urgent: false
  },
  {
    id: 'ann-4',
    refNo: 'UPEMA/ANN/2026/09',
    title: 'Establishment of Eastern UP Legal Mediation Desk in Varanasi',
    category: 'General Notice',
    date: 'Jul 20, 2026',
    deadline: 'Immediate',
    description: 'UPEMA member agencies facing delayed client payments or vendor contract disputes across Varanasi, Prayagraj, and Mirzapur can now submit arbitration claims to the Zonal Secretariat.',
    urgent: false
  }
]

const CATEGORIES = ['All Notices', 'High Priority', 'Meeting Notice', 'General Notice']

const Announcements = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Notices')

  const filteredAnnouncements = ANNOUNCEMENTS_DATA.filter((item) => {
    const search = searchTerm.toLowerCase().trim()
    const matchesSearch =
      !search ||
      item.title.toLowerCase().includes(search) ||
      item.refNo.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)

    const matchesCategory =
      selectedCategory === 'All Notices' || item.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <main className="w-full bg-[#FAF8F2] min-h-screen selection:bg-[#C9A45C] selection:text-[#0B1F3A] font-sans">
      
      {/* Hero Banner */}
      <section className="relative w-full min-h-[440px] bg-[#0B1F3A] flex items-center justify-center overflow-hidden text-white border-b border-[#C9A45C]/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C9A45C]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C9A45C]/40 text-[#C9A45C] text-xs font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
            UPEMA OFFICIAL ANNOUNCEMENTS
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
              Official Trade Notices &
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Announcements
            </span>
          </h1>

          <div className="h-1 bg-[#C9A45C] mx-auto rounded-full mt-4 mb-4 w-24" />

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Official trade bulletins, member compliance notices, AGM invitations, and zonal secretariat updates.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-6 relative z-20">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-[#E7E0D3]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            <div className="md:col-span-8 relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by announcement title, reference number, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded text-[#0B1F3A]"
              />
            </div>

            <div className="md:col-span-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded text-[#0B1F3A] cursor-pointer"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-4">
          {filteredAnnouncements.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl p-6 border shadow-sm transition-all ${
                item.urgent
                  ? 'border-red-300 bg-red-50/20'
                  : 'border-[#E7E0D3] hover:border-[#C9A45C]'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#C9A45C] bg-[#0B1F3A] px-2.5 py-0.5 rounded">
                    {item.refNo}
                  </span>
                  {item.urgent && (
                    <span className="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded flex items-center gap-1">
                      <FiAlertCircle /> URGENT
                    </span>
                  )}
                  <span className="text-xs text-gray-500 font-semibold">{item.category}</span>
                </div>

                <div className="text-xs text-gray-500 flex items-center gap-3">
                  <span>📅 Published: {item.date}</span>
                  <span>⏳ Deadline: {item.deadline}</span>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <h3 className="text-lg font-bold text-[#0B1F3A] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-[#0B1F3A] font-semibold flex items-center gap-1">
                  <FiCheckCircle className="text-[#C9A45C]" /> Verified UPEMA Secretariat Directive
                </span>

                <a
                  href="mailto:info@upema.in?subject=Inquiry%20regarding%20Announcement"
                  className="bg-[#0B1F3A] hover:bg-[#173B5E] text-[#C9A45C] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded transition-colors flex items-center gap-1.5"
                >
                  <FiMail /> Contact Secretariat Desk
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Announcements

