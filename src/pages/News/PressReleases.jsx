import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiFileText,
  FiMail,
  FiCalendar,
  FiSearch,
  FiCheckCircle,
  FiShare2,
  FiX,
  FiArrowRight,
  FiSend
} from 'react-icons/fi'

const PRESS_RELEASES_DATA = [
  {
    id: 'pr-1',
    prNo: 'UPEMA/PR/2026/04',
    title: 'Official Media Statement: UPEMA Welcomes State Government Single-Window Clearance Portal',
    date: 'Aug 20, 2026',
    location: 'Lucknow Media Desk',
    contactPerson: 'Media Relations Cell',
    summary: 'UPEMA President and Governing Body address press conference in Lucknow commending state authorities for expediting NOC permissions for commercial events and weddings.',
    body: `LUCKNOW — At a formal press conference convened at the UPEMA Headquarters in Lucknow, Executive Board members released an official statement expressing gratitude to Uttar Pradesh Tourism and Municipal Administration for approving single-window NOC clearances.

    The portal will eliminate administrative bottlenecks for wedding planners, sound fabricators, and hotel banquets, positioning Uttar Pradesh as a global destination wedding capital.`,
    highlights: [
      'Official statement issued by UPEMA Governing Board',
      'Covers 25 district chapters including Lucknow, Noida, Agra, and Varanasi',
      'Full media kit and high-res executive photos available for press outlets'
    ]
  },
  {
    id: 'pr-2',
    prNo: 'UPEMA/PR/2026/03',
    title: 'Press Note: UPEMA Issues Mandatory 12-Point Structural Safety Audit for Outdoor Stage Rigging',
    date: 'Aug 12, 2026',
    location: 'Noida Press Bureau',
    contactPerson: 'Technical Safety Desk',
    summary: 'Official media advisory informing event organizers and municipal authorities of new compulsory structural load certificates for outdoor German truss stages.',
    body: `NOIDA — UPEMA has issued a media advisory announcing mandatory safety inspections for all high-load outdoor stage setups exceeding 30 feet in height. Member fabricators must comply with wind shear and load sensor guidelines.`,
    highlights: [
      'Compulsory safety audit for stage setups exceeding 1,500 kg load',
      'Media advisory dispatched to district magistrates and fire safety authorities'
    ]
  },
  {
    id: 'pr-3',
    prNo: 'UPEMA/PR/2026/02',
    title: 'Market Report Release: Uttar Pradesh Destination Weddings Cross ₹12,000 Crore Milestone',
    date: 'Jul 28, 2026',
    location: 'Agra Media Cell',
    contactPerson: 'Trade Research Division',
    summary: 'UPEMA releases annual industry research document detailing economic impact, job creation, and growth trends across Agra, Varanasi, and Ayodhya luxury wedding hubs.',
    body: `AGRA — The annual trade report published by UPEMA highlights a 35% surge in heritage wedding bookings across Uttar Pradesh, generating over 50,000 seasonal jobs in decor, sound, and hospitality.`,
    highlights: [
      '35% YoY surge in royal heritage weddings across UP',
      'Over 50,000 seasonal employment opportunities generated'
    ]
  }
]

const PressReleases = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activePR, setActivePR] = useState(null)

  const filteredPR = PRESS_RELEASES_DATA.filter((item) => {
    const search = searchTerm.toLowerCase().trim()
    return (
      !search ||
      item.title.toLowerCase().includes(search) ||
      item.prNo.toLowerCase().includes(search) ||
      item.summary.toLowerCase().includes(search) ||
      item.location.toLowerCase().includes(search)
    )
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
            UPEMA MEDIA & PRESS STATEMENTS
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
              Official Press Releases &
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Statements
            </span>
          </h1>

          <div className="h-1 bg-[#C9A45C] mx-auto rounded-full mt-4 mb-4 w-24" />

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Official media statements, executive press notes, and accredited press release archives issued by UPEMA.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-6 relative z-20">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-[#E7E0D3]">
          <div className="relative">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search press statements by title, press release number, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded text-[#0B1F3A]"
            />
          </div>
        </div>
      </section>

      {/* Press Releases Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPR.map((pr) => (
            <div
              key={pr.id}
              className="bg-white rounded-xl p-6 border border-[#E7E0D3] hover:border-[#C9A45C] shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold bg-[#0B1F3A] text-[#C9A45C] px-2.5 py-0.5 rounded">
                    {pr.prNo}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">📍 {pr.location}</span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1F3A] leading-snug">
                  {pr.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {pr.summary}
                </p>

                <div className="text-[11px] text-gray-400">
                  📅 Dispatched: {pr.date} • Issued by {pr.contactPerson}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-[#0B1F3A] font-semibold flex items-center gap-1">
                  <FiCheckCircle className="text-[#C9A45C]" /> Verified Press Release
                </span>

                <button
                  onClick={() => setActivePR(pr)}
                  className="bg-[#0B1F3A] hover:bg-[#173B5E] text-[#C9A45C] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  View Press Note <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Lightbox Reader Modal */}
      <AnimatePresence>
        {activePR && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#C9A45C]"
            >
              <div className="bg-[#0B1F3A] text-white p-6 relative border-b border-[#C9A45C]">
                <button
                  onClick={() => setActivePR(null)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-white p-1 cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>
                <span className="text-[10px] bg-[#C9A45C] text-[#0B1F3A] font-bold uppercase px-2 py-0.5 rounded">
                  {activePR.prNo}
                </span>
                <h3 className="text-lg font-bold text-white mt-2 leading-snug">{activePR.title}</h3>
                <p className="text-xs text-slate-300 mt-1">📍 {activePR.location} • 📅 {activePR.date}</p>
              </div>

              <div className="p-6 space-y-4 text-xs text-[#0B1F3A]">
                <div>
                  <h4 className="font-bold uppercase text-gray-400 text-[10px] tracking-wider mb-1">Press Statement:</h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{activePR.body}</p>
                </div>

                <div>
                  <h4 className="font-bold uppercase text-gray-400 text-[10px] tracking-wider mb-1">Key Takeaways:</h4>
                  <ul className="space-y-1">
                    {activePR.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-slate-700">
                        <FiCheckCircle className="text-[#C9A45C] w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#FAF8F2] p-4 border-t border-gray-200 flex items-center justify-between">
                <a
                  href={`mailto:press@upema.in?subject=Press%20Kit%20Request%20${activePR.prNo}`}
                  className="text-xs font-bold text-[#0B1F3A] hover:text-[#C9A45C] flex items-center gap-1"
                >
                  <FiMail /> Request Press Kit & Media Assets
                </a>
                <button
                  onClick={() => setActivePR(null)}
                  className="bg-[#0B1F3A] text-[#C9A45C] font-bold text-xs uppercase px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  )
}

export default PressReleases
