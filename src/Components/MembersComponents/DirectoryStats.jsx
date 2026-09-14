import React from 'react'

const DirectoryStats = () => {
  const stats = [
    { number: '300+', label: 'Verified Members' },
    { number: '18', label: 'Industry Categories' },
    { number: '5+', label: 'Cities Across UP' }
  ]

  return (
    <div className="mt-8 md:mt-10 pt-6 border-t border-[#C9A45C]/20 max-w-3xl mx-auto">
      <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-serif">
              {stat.number.slice(0, -1)}
              <span className="text-[#C9A45C]">
                {stat.number.slice(-1) === '+' ? '+' : ''}
              </span>
            </span>
            <span className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
      {/* Subtle Gold Accent Line Below Stats */}
      <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mx-auto mt-6 opacity-80" />
    </div>
  )
}

export default DirectoryStats
