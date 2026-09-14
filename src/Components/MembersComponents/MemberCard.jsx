import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiMapPin, 
  FiCheckCircle, 
  FiArrowRight, 
  FiMail, 
  FiPhone, 
  FiGlobe, 
  FiX, 
  FiCalendar, 
  FiAward,
  FiSend
} from 'react-icons/fi'
import Swal from 'sweetalert2'

const MemberCard = ({ member }) => {
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [showInquireModal, setShowInquireModal] = useState(false)

  // Form state for inquiry modal
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  })

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    setShowInquireModal(false)
    Swal.fire({
      icon: 'success',
      title: 'Inquiry Sent!',
      text: `Your inquiry has been sent to ${member.companyName}. They will get back to you shortly.`,
      confirmButtonColor: '#0B1F3A'
    })
    setInquiryData({ name: '', email: '', phone: '', eventDate: '', message: '' })
  }

  return (
    <>
      {/* MEMBER CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl p-6 border border-[#E5E5E5] shadow-sm hover:shadow-xl hover:border-[#C9A45C] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
      >
        {/* Subtle Top Gold Hover Bar Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          {/* Top Row: Company Logo Container & Verification Badge */}
          <div className="flex items-start justify-between gap-3 mb-4">
            {/* Company Logo Container */}
            <div className="w-14 h-14 rounded-xl bg-[#F7F5F0] border border-slate-200 text-[#0B1F3A] font-extrabold flex items-center justify-center text-lg font-serif shadow-inner flex-shrink-0 group-hover:border-[#C9A45C] transition-colors">
              {member.logoText}
            </div>

            {/* Green Verified Badge */}
            {member.verified ? (
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2E8B57]/10 text-[#2E8B57] border border-[#2E8B57]/30 text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                <FiCheckCircle className="w-3 h-3 text-[#2E8B57]" />
                <span>Verified Member</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 text-[10px] font-semibold uppercase tracking-wider">
                <span>Associate Member</span>
              </div>
            )}
          </div>

          {/* Company Name */}
          <h3 className="text-lg font-bold text-[#0B1F3A] mb-1 font-serif group-hover:text-[#C9A45C] transition-colors leading-snug line-clamp-1">
            {member.companyName}
          </h3>

          {/* Contact Person */}
          <p className="text-xs text-slate-500 font-medium mb-3">
            Founder: <span className="text-[#1D2733] font-semibold">{member.founder}</span>
          </p>

          {/* Location Row */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-4">
            <FiMapPin className="text-[#C9A45C] flex-shrink-0" />
            <span>{member.district}</span>
          </div>

          {/* Service Pill Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {member.services.map((service, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-[#F7F5F0] text-slate-600 text-[11px] font-medium border border-slate-200/60"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Card Bottom CTA Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          {/* Primary View Profile Button */}
          <button
            onClick={() => setShowProfileModal(true)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#0B1F3A] text-white hover:bg-[#C9A45C] hover:text-[#0B1F3A] text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-1.5 group/btn cursor-pointer"
          >
            <span>View Profile</span>
            <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Inquire Button */}
          <button
            onClick={() => setShowInquireModal(true)}
            className="py-2.5 px-4 rounded-xl border border-[#0B1F3A]/20 text-[#0B1F3A] hover:bg-[#F7F5F0] hover:border-[#0B1F3A] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Inquire
          </button>
        </div>
      </motion.div>

      {/* 1. VIEW PROFILE DETAIL MODAL */}
      <AnimatePresence>
        {showProfileModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowProfileModal(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-[#0B1F3A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#F7F5F0] border border-[#C9A45C]/40 text-[#0B1F3A] font-extrabold flex items-center justify-center text-xl font-serif shadow-inner flex-shrink-0">
                  {member.logoText}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#C9A45C] text-xs font-bold uppercase tracking-wider">
                      {member.category}
                    </span>
                    {member.verified && (
                      <span className="px-2 py-0.5 rounded-full bg-[#2E8B57]/10 text-[#2E8B57] text-[10px] font-bold flex items-center gap-1">
                        <FiCheckCircle /> Verified Member
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0B1F3A] font-serif">
                    {member.companyName}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Contact Person: <span className="text-slate-800 font-semibold">{member.founder}</span> • Est. {member.established}
                  </p>
                </div>
              </div>

              {/* Location & Rating Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#F7F5F0] p-4 rounded-xl mb-6 border border-slate-200/60 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Location</span>
                  <span className="font-semibold text-[#0B1F3A] flex items-center gap-1">
                    <FiMapPin className="text-[#C9A45C]" /> {member.district}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Projects Delivered</span>
                  <span className="font-semibold text-[#0B1F3A] flex items-center gap-1">
                    <FiAward className="text-[#C9A45C]" /> {member.projectsCompleted}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Member Rating</span>
                  <span className="font-semibold text-[#0B1F3A]">★ {member.rating} / 5.0</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-2">
                  About Company
                </h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {member.description}
                </p>
              </div>

              {/* Specialized Services Offered */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-2">
                  Specialized Services Offered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.services.map((srv, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs font-semibold border border-[#0B1F3A]/10"
                    >
                      ✓ {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Communication Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                <a
                  href={`mailto:${member.email}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0B1F3A] text-white hover:bg-[#C9A45C] hover:text-[#0B1F3A] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FiMail /> {member.email}
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="py-3 px-5 rounded-xl border border-slate-300 text-[#0B1F3A] hover:bg-slate-100 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FiPhone /> Call Direct
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. INQUIRE FORM MODAL */}
      <AnimatePresence>
        {showInquireModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-100 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowInquireModal(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-[#0B1F3A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Title */}
              <div className="mb-6">
                <span className="text-[#C9A45C] text-xs font-bold uppercase tracking-wider block mb-1">
                  DIRECT INQUIRY
                </span>
                <h3 className="text-xl font-bold text-[#0B1F3A] font-serif">
                  Inquire with {member.companyName}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Send event requirements directly to {member.founder}
                </p>
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryData.name}
                    onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C9A45C]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      placeholder="Email address"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C9A45C]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      placeholder="Mobile number"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C9A45C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Tentative Event Date
                  </label>
                  <input
                    type="date"
                    value={inquiryData.eventDate}
                    onChange={(e) => setInquiryData({ ...inquiryData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C9A45C]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Event Requirements
                  </label>
                  <textarea
                    rows="3"
                    required
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    placeholder="Briefly describe your event type, guest count, and location..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C9A45C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#0B1F3A] text-white hover:bg-[#C9A45C] hover:text-[#0B1F3A] text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                >
                  <FiSend /> Send Inquiry Now
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MemberCard
