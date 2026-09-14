import React from 'react'
import { motion } from 'framer-motion'

const meetingsData = [
  {
    id: 1,
    title: 'Annual Leadership Summit 2026',
    date: 'Lucknow Central Secretariat',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: 'State Policy & Regulatory Conclave',
    date: 'Noida / NCR Chapter',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    title: 'Quarterly Executive Committee Review',
    date: 'Varanasi Heritage Secretariat',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    title: 'Safety Standards & Accreditation Meet',
    date: 'Kanpur Technical Campus',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1000&q=80'
  }
]

const MeetingSection = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#D4A017] text-xs font-bold uppercase tracking-widest block mb-2">
            Governance In Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2343] tracking-tight">
            Executive Committee Meetings
          </h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />
        </div>

        {/* Gallery Grid (4 professional meeting images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {meetingsData.map((meeting, idx) => (
            <motion.div
              key={meeting.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Meeting Image with Hover Zoom Effect */}
              <img
                src={meeting.image}
                alt={meeting.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2343]/90 via-[#0B2343]/30 to-transparent group-hover:from-[#0B2343]/95 transition-colors duration-300" />

              {/* Gold Top Accent Tag */}
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#D4A017] text-[#0B2343] text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                Official Conclave
              </span>

              {/* Bottom Caption Box */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-base font-bold text-white mb-1 leading-snug group-hover:text-[#D4A017] transition-colors">
                  {meeting.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  {meeting.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MeetingSection
