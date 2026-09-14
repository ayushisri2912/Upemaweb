import React from 'react'
import { FiSearch, FiRotateCcw } from 'react-icons/fi'
import MemberFilters from './MemberFilters'

const MemberSearch = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedCity,
  setSelectedCity,
  selectedVerification,
  setSelectedVerification,
  handleResetFilters
}) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-14 relative z-20 mb-12">
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E5E5] shadow-lg">
        
        {/* Panel Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0B1F3A] font-serif">
              Find a Member
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Filter by verified credentials, region, or specialized event services
            </p>
          </div>

          {/* Reset Filters Action */}
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#C9A45C] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <FiRotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        </div>

        {/* Large Prominent Search Input */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <FiSearch className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by company, service or keyword..."
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-[#1D2733] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C9A45C] focus:bg-white transition-all shadow-sm"
          />
        </div>

        {/* Filters Row Component */}
        <MemberFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedVerification={selectedVerification}
          setSelectedVerification={setSelectedVerification}
        />
      </div>
    </div>
  )
}

export default MemberSearch
