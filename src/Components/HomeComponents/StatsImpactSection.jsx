// src/Components/HomeComponents/StatsImpactSection.jsx
import React from 'react';
import statsBg from "../../assets/images/stats.jpeg";
const statsData = [
  {
    id: 1,
    number: '300+',
    label: 'Active Member Firms',
    sublabel: 'Wedding planners & fabricators',
  },
  {
    id: 2,
    number: '25+',
    label: 'Districts Across UP',
    sublabel: 'Lucknow, Noida, Varanasi & more',
  },
  {
    id: 3,
    number: '50+',
    label: 'Annual Summits & Meets',
    sublabel: 'Workshops & networking galas',
  },
  {
    id: 4,
    number: '98%',
    label: 'Fraternity Retention',
    sublabel: 'Committed to industry growth',
  },
];

const StatsImpactSection = () => {
  return (
    <section className="relative bg-white pt-16 pb-20 overflow-hidden">
      
      {/* 1. Background Banner Container with Image & Dark Vignette */}
      <div 
        className="relative min-h-[380px] sm:min-h-[420px] bg-cover bg-center bg-fixed flex items-start justify-center pt-14 pb-32 px-4"
        style={{
          // Luxury event / delegate conference background image
          backgroundImage: `url(${statsBg})`,
        }}
      >
        {/* Dark Navy Gradient Overlay for clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071322]/85 via-[#0A1B30]/75 to-[#071322]/90" />

        {/* Center Content over Background Image */}
        <div className="relative z-10 text-center max-w-3xl mx-auto text-white px-4">
          
          {/* Badge (IPA Reference Style) */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/10 border border-[#F8C54E]/40 text-[#F8C54E] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            <span>📈</span>
            <span>NUMBERS SPEAK</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            UPEMA <span className="bg-gradient-to-r from-[#FFF0B3] via-[#F8C54E] to-[#E5A825] bg-clip-text text-transparent font-serif">Impact Statistics</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-slate-200 font-normal max-w-xl mx-auto">
            Key metrics that define our contribution and strength in advancing the event ecosystem across Uttar Pradesh.
          </p>
        </div>
      </div>

      {/* 2. Floating 4-Cards Grid (Overlapping Banner via Negative Margin) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl p-7 sm:p-8 text-center shadow-xl border border-slate-100 hover:border-[#1279CF]/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Top Accent Stripe on Hover */}
              <span className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1279CF] to-[#F8C54E] opacity-90" />

              {/* Big Metric Number */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1279CF] group-hover:text-[#0D3B66] transition-colors tracking-tight">
                {stat.number}
              </div>

              {/* Main Label */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2 tracking-tight">
                {stat.label}
              </h3>

              {/* Sub-label */}
              <p className="text-xs text-slate-500 font-medium mt-1">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default StatsImpactSection;