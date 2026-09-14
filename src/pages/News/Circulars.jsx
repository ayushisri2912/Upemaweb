import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiFileText,
  FiDownload,
  FiCalendar,
  FiSearch,
  FiCheckCircle,
  FiLock,
  FiMail
} from 'react-icons/fi'

const CIRCULARS_DATA = [
  {
    id: 'circ-1',
    circNo: 'UPEMA/CIR/2026/08',
    title: 'Directive on Sound Curfew Permissions & Decibel Limit Standards for Banquet Halls',
    category: 'Regulatory Directive',
    date: 'Aug 18, 2026',
    issuedBy: 'UPEMA Environment & Legal Cell',
    size: '1.4 MB PDF',
    description: 'Official notification detailing police noise curfew timings (10:00 PM cutoff) and ambient decibel threshold norms prescribed by UP State Pollution Control Board.'
  },
  {
    id: 'circ-2',
    circNo: 'UPEMA/CIR/2026/07',
    title: 'Standard Operating Procedure (SOP) for Single-Window Tourism NOC Portal',
    category: 'SOP & Guidelines',
    date: 'Aug 02, 2026',
    issuedBy: 'Government Liaison Desk',
    size: '2.1 MB PDF',
    description: 'Step-by-step user guide for accredited member agencies to apply for combined Fire, Police, and Municipal NOC clearances via the UPEMA Single-Window Desk.'
  },
  {
    id: 'circ-3',
    circNo: 'UPEMA/CIR/2026/06',
    title: 'GST & E-Invoicing Mandates for Event Production Houses & Truss Rental Vendors',
    category: 'Finance & Tax Norms',
    date: 'Jul 14, 2026',
    issuedBy: 'UPEMA Finance Committee',
    size: '850 KB PDF',
    description: 'Advisory on 18% GST applicability, input tax credit eligibility for B2B stage rentals, and compulsory QR e-invoicing for billing above ₹50,000.'
  },
  {
    id: 'circ-4',
    circNo: 'UPEMA/CIR/2026/05',
    title: 'Advisory on Electrical Fire Safety & Generator Grounding at Wedding Venues',
    category: 'Safety Regulation',
    date: 'Jun 22, 2026',
    issuedBy: 'Technical Safety Auditor',
    size: '1.8 MB PDF',
    description: 'Safety guidelines detailing generator earthing spikes, fire retardant fabric ratings for wedding mandaps, and emergency exit walkway clearances.'
  }
]

const Circulars = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCirculars = CIRCULARS_DATA.filter((item) => {
    const search = searchTerm.toLowerCase().trim()
    return (
      !search ||
      item.title.toLowerCase().includes(search) ||
      item.circNo.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
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
            UPEMA OFFICIAL CIRCULARS & NOTIFICATIONS
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
              Official Executive Circulars &
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Directives
            </span>
          </h1>

          <div className="h-1 bg-[#C9A45C] mx-auto rounded-full mt-4 mb-4 w-24" />

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Download verified state circulars, regulatory advisories, tax norms, and safety SOP documents.
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
              placeholder="Search circulars by circular number, title, or regulatory category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF8F2] border border-gray-200 rounded text-[#0B1F3A]"
            />
          </div>
        </div>
      </section>

      {/* Circulars Registry Table / Cards */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-4">
          {filteredCirculars.map((circ) => (
            <div
              key={circ.id}
              className="bg-white rounded-xl p-6 border border-[#E7E0D3] hover:border-[#C9A45C] shadow-sm transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold bg-[#0B1F3A] text-[#C9A45C] px-2.5 py-0.5 rounded">
                    {circ.circNo}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">{circ.category}</span>
                  <span className="text-xs text-gray-400">📅 {circ.date}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] leading-snug">
                  {circ.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {circ.description}
                </p>

                <div className="text-[11px] text-[#C9A45C] font-semibold">
                  Issuing Authority: {circ.issuedBy}
                </div>
              </div>

              {/* Download Action */}
              <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                <a
                  href={`mailto:info@upema.in?subject=Request%20Circular%20PDF%20${circ.circNo}`}
                  className="w-full md:w-auto bg-[#C9A45C] hover:bg-[#D9B873] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-colors text-center shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FiDownload className="w-4 h-4" /> Download PDF ({circ.size})
                </a>
                <span className="text-[10px] text-gray-400">Verified Serial Seal</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Circulars
