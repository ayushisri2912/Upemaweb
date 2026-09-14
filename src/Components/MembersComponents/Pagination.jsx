import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Pagination = ({ currentPage, totalPages, setCurrentPage, totalItems, itemsPerPage }) => {
  const startItem = Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
      {/* Member Count Text */}
      <span className="text-xs sm:text-sm text-slate-500 font-medium">
        Showing <span className="font-bold text-[#0B1F3A]">{startItem}–{endItem}</span> of <span className="font-bold text-[#0B1F3A]">{totalItems > 12 ? '300+' : totalItems} Members</span>
      </span>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1.5">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
        >
          <FiChevronLeft />
          <span>Previous</span>
        </button>

        {/* Page Number Buttons */}
        {pages.map((page) => {
          const isActive = currentPage === page
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#C9A45C] text-[#0B1F3A] shadow-sm scale-105'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {page}
            </button>
          )
        })}

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>Next</span>
          <FiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Pagination
