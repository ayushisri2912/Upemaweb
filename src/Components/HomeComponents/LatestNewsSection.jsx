import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiArrowRight, FiFileText, FiTag } from 'react-icons/fi';

const newsItems = [
  {
    id: 1,
    category: 'Government Advisory',
    date: 'Aug 14, 2026',
    title: 'Single-Window Clearance Proposal Submitted for Mega Events in Uttar Pradesh',
    excerpt:
      'UPEMA submits formal memorandum to state administration for streamlined fire, sound, and municipal permissions.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    category: 'Safety Protocol',
    date: 'Jul 28, 2026',
    title: 'Standard Monsoon Rigging & Electrical Safety Guidelines Released',
    excerpt:
      'Compulsory checklist issued for outdoor wedding setups, truss loads, and weatherproof sound equipment.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    id: 3,
    category: 'Trade Expansion',
    date: 'Jul 10, 2026',
    title: 'Purvanchal Chapter Expansion: Regional Coordinators Appointed',
    excerpt:
      'New executive representatives appointed across Varanasi, Ayodhya, and Gorakhpur to assist member firms.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
];

const LatestNewsSection = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-[#1279CF] border border-blue-200/60 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3.5">
            <span>📰</span>
            <span>MEDIA & UPDATES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Latest <span className="text-[#1279CF]">News & Circulars</span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base md:text-lg">
            Official circulars, trade notices, government representations, and association press releases.
          </p>

          <div className="mt-6 flex justify-center">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-[#1279CF] text-[#0D3B66] hover:text-[#1279CF] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all duration-300 group"
            >
              <span>View All Announcements</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3-Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Category Tag */}
                <span className="absolute top-4 left-4 bg-[#0D3B66]/90 text-[#F8C54E] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Date & Meta */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
                    <FiCalendar className="text-[#1279CF]" />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="text-[#1279CF] flex items-center gap-1">
                      <FiFileText className="w-3.5 h-3.5" /> Circular
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1279CF] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                {/* Read Link */}
                <Link
                  to={`/news`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0D3B66] uppercase tracking-wider group-hover:text-[#1279CF] transition-colors pt-4 border-t border-slate-100 mt-auto"
                >
                  <span>Read Full Circular</span>
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestNewsSection;