import React from 'react'

const MemberFilters = ({
  selectedCategory,
  setSelectedCategory,
  selectedCity,
  setSelectedCity,
  selectedVerification,
  setSelectedVerification
}) => {
  const categories = [
    'All Categories',
    'Wedding Planner',
    'Decor & Production',
    'Audio Visual',
    'Venue',
    'Catering',
    'Photography',
    'Entertainment',
    'Event Technology'
  ]

  const locations = [
    'All Locations',
    'Lucknow',
    'Noida',
    'Varanasi',
    'Kanpur',
    'Agra',
    'Prayagraj',
    'Gorakhpur',
    'Meerut'
  ]

  const verifications = [
    'All Members',
    'Verified Members'
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* 1. Category Filter */}
      <div className="flex flex-col">
        <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-[#1D2733] focus:outline-none focus:ring-2 focus:ring-[#C9A45C] focus:bg-white transition-all cursor-pointer"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* 2. City / District Filter */}
      <div className="flex flex-col">
        <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
          City / District
        </label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-[#1D2733] focus:outline-none focus:ring-2 focus:ring-[#C9A45C] focus:bg-white transition-all cursor-pointer"
        >
          {locations.map((loc, idx) => (
            <option key={idx} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* 3. Verification Status Filter */}
      <div className="flex flex-col">
        <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
          Verification Status
        </label>
        <select
          value={selectedVerification}
          onChange={(e) => setSelectedVerification(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-[#1D2733] focus:outline-none focus:ring-2 focus:ring-[#C9A45C] focus:bg-white transition-all cursor-pointer"
        >
          {verifications.map((v, idx) => (
            <option key={idx} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default MemberFilters
