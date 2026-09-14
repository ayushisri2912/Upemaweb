import React from 'react'
import MemberCard from './MemberCard'

const MemberGrid = ({ members, totalCount }) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      {/* Section Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
        <div>
          <span className="text-[#C9A45C] text-xs font-bold uppercase tracking-widest block mb-1">
            OUR MEMBERS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] font-serif tracking-tight">
            Meet Our Verified Members
          </h2>
          <p className="mt-1 text-slate-600 text-xs sm:text-sm md:text-base font-normal max-w-2xl">
            Connect with trusted professionals and businesses working across the Uttar Pradesh event industry.
          </p>
        </div>

        {/* Right Side Member Count Badge */}
        <div className="flex-shrink-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1F3A] text-[#C9A45C] text-xs font-bold uppercase tracking-wider shadow-sm border border-[#C9A45C]/30">
            <span className="w-2 h-2 rounded-full bg-[#C9A45C]" />
            {totalCount > 0 ? `${totalCount} Verified Members Found` : '300+ Members'}
          </span>
        </div>
      </div>

      {/* Grid: 3 cols Desktop, 2 cols Tablet, 1 col Mobile */}
      {members.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm max-w-xl mx-auto my-8">
          <div className="w-16 h-16 rounded-full bg-amber-50 text-[#C9A45C] flex items-center justify-center mx-auto text-2xl mb-4">
            🔍
          </div>
          <h3 className="text-xl font-bold text-[#0B1F3A] font-serif mb-2">
            No Members Found
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            We couldn't find any member matching your search query or filter criteria. Try resetting filters.
          </p>
        </div>
      )}
    </section>
  )
}

export default MemberGrid
