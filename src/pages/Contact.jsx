import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiShield,
  FiChevronDown,
  FiArrowRight,
  FiUser
} from 'react-icons/fi'
import Swal from 'sweetalert2'

const ZONAL_CHAPTERS = [
  {
    id: 'lucknow',
    city: 'Lucknow',
    name: 'Lucknow Apex Headquarters',
    address: 'UPEMA Bhavan, Vibhuti Khand, Gomti Nagar, Lucknow - 226010',
    phone: '+91 522 234 5678',
    email: 'lucknow@upema.in',
    head: 'Secretariat General Desk',
    hours: 'Mon – Sat: 09:30 AM – 06:30 PM'
  },
  {
    id: 'noida',
    city: 'Noida / NCR',
    name: 'Noida & NCR Zonal Secretariat',
    address: 'Expo Trade Tower, Sector 62, Noida - 201309',
    phone: '+91 120 456 7890',
    email: 'noida@upema.in',
    head: 'Western UP Zonal Chair',
    hours: 'Mon – Sat: 09:30 AM – 06:30 PM'
  },
  {
    id: 'agra',
    city: 'Agra',
    name: 'Agra Heritage Secretariat',
    address: 'Hotel Jaypee Enclave, Fatehabad Road, Agra - 282001',
    phone: '+91 562 345 6789',
    email: 'agra@upema.in',
    head: 'Heritage Tourism Liaison',
    hours: 'Mon – Sat: 09:30 AM – 06:30 PM'
  },
  {
    id: 'varanasi',
    city: 'Varanasi',
    name: 'Varanasi Zonal Secretariat',
    address: 'Taj Nadesar Enclave, Cantt, Varanasi - 221002',
    phone: '+91 542 234 9876',
    email: 'varanasi@upema.in',
    head: 'Eastern UP Zonal Chair',
    hours: 'Mon – Sat: 09:30 AM – 06:30 PM'
  }
]

const INQUIRY_TYPES = [
  'General Executive Inquiry',
  'Membership Accreditation & Verification',
  'Single-Window Event NOC & Permits',
  'Legal & Payment Dispute Mediation Desk',
  'Sponsorship & Media Accreditation'
]

const FAQS = [
  {
    q: 'How do I apply for Single-Window Event NOC clearances through UPEMA?',
    a: 'Accredited members can submit event details via our single-window portal 7 days prior to an event. Our liaison cell coordinates Police, Fire, and Sound permits within 48 hours.'
  },
  {
    q: 'What is the processing time for new membership verification?',
    a: 'Membership applications undergo 3-tier verification by the Governing Body and are processed within 5 business days.'
  },
  {
    q: 'How can member agencies access dispute arbitration support?',
    a: 'Members facing delayed client payments or vendor contract issues can lodge a formal grievance with the UPEMA Legal Cell.'
  }
]

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'General Executive Inquiry',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeZonalTab, setActiveZonalTab] = useState('lucknow')
  const [openFaq, setOpenFaq] = useState(null)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      Swal.fire({
        title: 'Message Dispatched',
        text: `Thank you ${formData.fullName}. Your ${formData.inquiryType} request has been routed to the UPEMA Secretariat Desk.`,
        icon: 'success',
        confirmButtonColor: '#C9A45C',
        background: '#FAF8F2'
      })
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: 'General Executive Inquiry',
        message: ''
      })
    }, 900)
  }

  const selectedChapter = ZONAL_CHAPTERS.find((c) => c.id === activeZonalTab) || ZONAL_CHAPTERS[0]

  return (
    <main className="w-full bg-[#FAF8F2] min-h-screen selection:bg-[#C9A45C] selection:text-[#0B1F3A] font-sans">
      
      {/* =========================================================
          1. HERO SECTION (SPACIOUS & ELEGANT LUXURY HEADER)
      ======================================================== */}
      <section className="relative w-full py-24 md:py-32 bg-[#0B1F3A] flex items-center justify-center overflow-hidden text-white border-b-2 border-[#C9A45C]/40">
        
        {/* Background Image with Ambient Glow */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/95 via-[#0B1F3A]/90 to-[#0B1F3A] pointer-events-none" />

        {/* Floating Radial Gold Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9A45C]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs sm:text-sm text-[#C9A45C] uppercase tracking-[0.25em] font-extrabold px-4 py-1.5 rounded-full bg-white/5 border border-[#C9A45C]/30 mb-6 shadow-sm font-sans"
          >
            UPEMA APEX SECRETARIAT
          </motion.span>

          {/* Main Title (Matching Gradient & Serif Highlight) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-sans"
          >
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent">
              Get in Touch with
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C9A45C] bg-clip-text text-transparent">
              UPEMA Desk
            </span>
          </motion.h1>

          <div className="h-1 bg-[#C9A45C] mx-auto rounded-full mt-5 mb-5 w-24 shadow-[0_0_12px_rgba(201,164,92,0.6)]" />

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Reach out to our apex secretariat for trade accreditation, government single-window NOC permits, or executive legal arbitration.
          </p>

        </div>
      </section>

      {/* 2. MINIMAL 3-COLUMN CONTACT HIGHLIGHT BAR */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 font-sans">
        <div className="bg-white rounded-2xl shadow-xl border border-[#E7E0D3] p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          {/* Item 1 */}
          <div className="flex items-center gap-4 pt-4 md:pt-0">
            <div className="w-14 h-14 rounded-full bg-[#0B1F3A] text-[#C9A45C] flex items-center justify-center text-xl shadow flex-shrink-0">
              <FiPhone />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Executive Helpline</span>
              <span className="text-base font-bold text-[#0B1F3A] block">+91 522 234 5678</span>
              <span className="text-xs text-[#C9A45C] font-semibold block">Toll Free: 1800-UPEMA-DESK</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 pt-6 md:pt-0 md:pl-8">
            <div className="w-14 h-14 rounded-full bg-[#0B1F3A] text-[#C9A45C] flex items-center justify-center text-xl shadow flex-shrink-0">
              <FiMail />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Official Email</span>
              <span className="text-base font-bold text-[#0B1F3A] block">info@upema.in</span>
              <span className="text-xs text-gray-500 block">secretariat@upema.in</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 pt-6 md:pt-0 md:pl-8">
            <div className="w-14 h-14 rounded-full bg-[#0B1F3A] text-[#C9A45C] flex items-center justify-center text-xl shadow flex-shrink-0">
              <FiMapPin />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Apex Headquarters</span>
              <span className="text-sm font-bold text-[#0B1F3A] block">Gomti Nagar, Lucknow</span>
              <span className="text-xs text-gray-500 block">Mon – Sat: 9:30 AM – 6:30 PM</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SPACIOUS 2-COLUMN SECTION WITH HIGH CONTRAST */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: MINIMAL ELEGANT FORM (7 COLS - LIGHT BACKGROUND) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-[#E7E0D3] space-y-8">
            
            <div>
              <span className="text-xs text-[#C9A45C] font-extrabold uppercase tracking-widest block">
                DIRECT SECRETARIAT INQUIRY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mt-1">
                Send an Executive Message
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Please fill out the form below. Your request will be directly assigned to our secretariat desk.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6 text-xs text-[#0B1F3A]">
              
              <div>
                <label className="block font-bold text-gray-700 uppercase tracking-wider text-[11px] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Singh"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg. [#FAF8F2] bg-[#FAF8F2] border border-gray-200 rounded-lg text-sm focus:border-[#C9A45C] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold text-gray-700 uppercase tracking-wider text-[11px] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F2] border border-gray-200 rounded-lg text-sm focus:border-[#C9A45C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 uppercase tracking-wider text-[11px] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F2] border border-gray-200 rounded-lg text-sm focus:border-[#C9A45C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase tracking-wider text-[11px] mb-2">
                  Inquiry Department
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF8F2] border border-gray-200 rounded-lg text-sm focus:border-[#C9A45C] focus:bg-white focus:outline-none transition-colors cursor-pointer"
                >
                  {INQUIRY_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase tracking-wider text-[11px] mb-2">
                  Your Message / Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your requirement, event permit detail, or arbitration query..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF8F2] border border-gray-200 rounded-lg text-sm focus:border-[#C9A45C] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0B1F3A] hover:bg-[#173B5E] text-[#C9A45C] font-extrabold text-xs uppercase tracking-widest py-4 rounded-lg transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2 border border-[#C9A45C]/40"
              >
                {isSubmitting ? 'Dispatching Message...' : 'Dispatch Message'} <FiSend />
              </button>

            </form>

          </div>

          {/* RIGHT: IMPERIAL NAVY HEADQUARTERS CARD (5 COLS - HIGH CONTRAST DARK NAVY) */}
          <div className="lg:col-span-5 bg-[#0B1F3A] text-white rounded-2xl p-8 sm:p-10 border-2 border-[#C9A45C] shadow-2xl space-y-8 relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A45C]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3">
              <span className="text-xs text-[#C9A45C] font-extrabold uppercase tracking-widest block">
                HEADQUARTERS LOCATION
              </span>
              <h3 className="text-2xl font-bold text-white">
                UPEMA Apex Secretariat
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Visit our state headquarters in Lucknow for official member seal verification, Single-Window permits, and board appointments.
              </p>
            </div>

            <div className="space-y-6 text-xs text-slate-200">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-[#C9A45C]/40 text-[#C9A45C] flex items-center justify-center text-lg flex-shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <span className="text-gray-400 font-semibold block text-[11px]">Address:</span>
                  <span className="text-white font-bold block text-sm mt-0.5">
                    UPEMA Apex Bhavan, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-[#C9A45C]/40 text-[#C9A45C] flex items-center justify-center text-lg flex-shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <span className="text-gray-400 font-semibold block text-[11px]">Landline & Mobile:</span>
                  <span className="text-white font-bold block text-sm mt-0.5">
                    +91 522 234 5678 / +91 98765 43210
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-[#C9A45C]/40 text-[#C9A45C] flex items-center justify-center text-lg flex-shrink-0">
                  <FiMail />
                </div>
                <div>
                  <span className="text-gray-400 font-semibold block text-[11px]">Email Desk:</span>
                  <span className="text-white font-bold block text-sm mt-0.5">
                    info@upema.in
                  </span>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="https://maps.google.com/?q=Lucknow"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#C9A45C] hover:bg-[#D9B873] text-[#0B1F3A] font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-lg transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                View Location Map <FiArrowRight />
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* 4. UNCLUTTERED TABBED ZONAL CHAPTERS SELECTOR */}
      <section className="bg-white py-16 border-t border-b border-[#E7E0D3] font-sans">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs text-[#C9A45C] font-extrabold uppercase tracking-widest">
              REGIONAL CHAPTERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
              Connect with Zonal Secretariats
            </h2>
            <p className="text-xs text-gray-500">
              Select a chapter to view local secretariat address and regional contact leads.
            </p>
          </div>

          {/* Clean Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {ZONAL_CHAPTERS.map((chap) => (
              <button
                key={chap.id}
                onClick={() => setActiveZonalTab(chap.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeZonalTab === chap.id
                    ? 'bg-[#0B1F3A] text-[#C9A45C] border-2 border-[#C9A45C] shadow-md'
                    : 'bg-[#FAF8F2] text-gray-600 border border-gray-200 hover:border-[#C9A45C]'
                }`}
              >
                📍 {chap.city} Chapter
              </button>
            ))}
          </div>

          {/* Selected Chapter Details Card */}
          <motion.div
            key={selectedChapter.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FAF8F2] rounded-2xl p-8 border border-[#C9A45C]/40 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center shadow-sm"
          >
            <div className="space-y-2">
              <span className="text-[10px] bg-[#C9A45C] text-[#0B1F3A] font-extrabold uppercase px-2.5 py-0.5 rounded">
                {selectedChapter.head}
              </span>
              <h3 className="text-xl font-bold text-[#0B1F3A]">{selectedChapter.name}</h3>
              <p className="text-xs text-gray-600">{selectedChapter.address}</p>
            </div>

            <div className="space-y-3 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6 text-xs text-[#0B1F3A]">
              <div>
                <span className="text-gray-400 font-bold block text-[10px] uppercase">Phone:</span>
                <span className="font-bold text-sm text-[#0B1F3A]">{selectedChapter.phone}</span>
              </div>
              <div>
                <span className="text-gray-400 font-bold block text-[10px] uppercase">Email:</span>
                <a href={`mailto:${selectedChapter.email}`} className="font-bold text-sm text-[#C9A45C] hover:underline">
                  {selectedChapter.email}
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. MINIMAL CLEAN ACCORDION FAQ SECTION */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 font-sans">
        
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-xs text-[#C9A45C] font-extrabold uppercase tracking-widest">
            HELP DESK & FAQS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E7E0D3] overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-5 text-left font-bold text-sm text-[#0B1F3A] flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F2]"
              >
                <span>{faq.q}</span>
                <FiChevronDown
                  className={`w-5 h-5 text-[#C9A45C] transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-gray-100 pt-3"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

      </section>

      {/* =========================================================
          6. EMERGENCY HOTLINE CTA
      ======================================================== */}
      {/* <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20 font-sans">
        <div className="bg-[#0B1F3A] text-white rounded-2xl p-8 sm:p-10 border-2 border-[#C9A45C] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs text-[#C9A45C] font-extrabold uppercase tracking-widest flex items-center gap-1.5 justify-center md:justify-start">
              <FiShield className="w-4 h-4" /> UPEMA EMERGENCY ADVOCACY DESK
            </span>
            <h3 className="text-2xl font-bold">
              Facing Event NOC Permission Issues or Payment Disputes?
            </h3>
            <p className="text-xs text-slate-300">
              Our legal and government liaison desk assists accredited members with administrative advocacy across UP.
            </p>
          </div>

          <a
            href="tel:+915222345678"
            className="bg-[#C9A45C] hover:bg-[#D9B873] text-[#0B1F3A] font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-lg transition-colors shadow flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <FiPhone className="w-4 h-4" /> Contact Emergency Hotline
          </a>
        </div>
      </section> */}

    </main>
  )
}

export default Contact
