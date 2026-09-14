// src/pages/OurHistory.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiCalendar, 
  FiMapPin, 
  FiAward,
  FiShield, 
  FiUsers, 
  FiCheckCircle,
  FiFileText,
  FiCompass,
  FiBookmark, 
  FiArrowRight, 
  FiTarget,
  FiTrendingUp
} from 'react-icons/fi';
// import CTASection from '../../Components/HomeComponents/CTASection';

const milestones = [
  {
    period: 'May 31, 2025',
    tag: 'THE INCEPTION',
    title: 'Historic Foundation at Lucknow',
    description:
      'Over 75 pioneering wedding planners, luxury decor fabricators, and stage acoustic engineers gathered at Lucknow to draft the founding bylaws and formally inaugurate UPEMA as the state’s apex trade union.',
    location: 'Lucknow Central Secretariat',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
  },
  {
    period: 'August 2025',
    tag: 'POLICY ADVOCACY',
    title: 'Single-Window Clearance Proposal',
    description:
      'Submitted the landmark administrative memorandum to UP Tourism, Police Administration, and Municipal Departments proposing unified single-window clearances and standardized venue licensing.',
    location: 'State Administrative Secretariat',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  },
  {
    period: 'November 2025',
    tag: 'EXPANSION',
    title: 'Regional Chapter Councils',
    description:
      'Formed district core coordination wings across Noida, Greater Noida, Varanasi, Prayagraj, and Agra to resolve local trade disputes and facilitate inter-city resource sharing.',
    location: '25+ Districts in UP',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    period: 'Present 2026',
    tag: 'FRATERNITY IMPACT',
    title: '300+ Verified Members Network',
    description:
      'Growing as Uttar Pradesh’s most respected event apex association, certifying high-voltage electrical safety norms, promoting heritage destination weddings, and driving B2B partnerships.',
    location: 'State-Wide Network',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
  },
];

const stats = [
  { label: 'Founded In', value: 'May 2025', desc: 'Lucknow, UP' },
  { label: 'Active Members', value: '300+', desc: 'Across UP Fraternity' },
  { label: 'Districts Connected', value: '25+', desc: 'State-Wide Coverage' },
  { label: 'Annual Conclaves', value: '12+', desc: 'Masterclasses & Summits' },
];

const OurHistory = () => {
  return (
    <div className="bg-white font-sans min-h-screen">
      
     
      {/* =========================================================
          1. REFINED ROYAL HERITAGE HERO BANNER (Light & Regal)
      ========================================================== */}
      
      <section 
  className="relative bg-[#071322] border-b border-[#0D3B66]/60 pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden text-white font-[Poppins]"
  style={{
    backgroundImage: 'radial-gradient(ellipse at top center, #0F2D4E 0%, #081B2B 55%, #050E18 100%)',
  }}
>
  {/* Faint Background Watermark Texture */}
  <div 
    className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1900&q=80')"
    }}
  />

  {/* Ambient Warm Golden & Blue Glows */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#C9A45C]/12 rounded-full blur-[140px] pointer-events-none" />
  <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#1279CF]/15 rounded-full blur-[120px] pointer-events-none" />
  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    
    {/* Top Royal Breadcrumb Pill Badge */}
    <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#FAF8F2] border border-[#E7E0D3] text-[#081A2B] text-xs font-bold uppercase tracking-widest mb-7 shadow-lg">
      <span className="text-[#C9A45C] text-sm">🏛️</span>
      <span className="tracking-[0.15em] text-[10px] sm:text-xs">
        UPEMA CHRONICLES & LEGACY
      </span>
    </div>

    {/* Full Gold Gradient Headline with Serif Italic Accent */}
    <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.18] mb-5">
      <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
        Our History &
      </span>{' '}
      <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
        Foundation
      </span> 
    </h1>

    {/* Subtitle */}
    <p className="max-w-3xl mx-auto text-slate-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed mb-8">
      From an urgent industry necessity to Uttar Pradesh’s foremost event and wedding apex council—discover the defining milestones that built UPEMA.
    </p>

    {/* Inception Tag Badge */}
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0F2742]/80 border border-[#C9A45C]/40 text-xs font-semibold text-slate-200 shadow-md backdrop-blur-sm">
      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm shadow-amber-400/50" />
      <span>Formally Inaugurated: <strong className="text-white font-bold">May 31, 2025 • Lucknow</strong></span>
    </div>

  </div>

  {/* 4 Floating Metric Stat Cards (Pattern Maintained, Theme Updated to Dark Glassmorphism) */}
  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
    {[
      { value: '31 May 2025', label: 'FOUNDATION DATE', desc: 'Inaugurated at Lucknow', icon: FiCalendar },
      { value: '300+', label: 'VERIFIED MEMBERS', desc: 'Across UP Fraternity', icon: FiAward },
      { value: '25+', label: 'DISTRICTS COVERED', desc: 'State-Wide Coverage', icon: FiShield },
      { value: '100%', label: 'TRADE ADVOCACY', desc: 'Single-Window Liaison', icon: FiFileText },
    ].map((st, i) => {
      const Icon = st.icon;
      return (
        <div
          key={i}
          className="bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-[#C9A45C]/40 hover:border-[#C9A45C] shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 text-center group"
        >
          <div className="w-11 h-11 mx-auto rounded-xl bg-[#081B2B] text-[#DDB063] group-hover:bg-[#C9A45C] group-hover:text-[#081B2B] flex items-center justify-center mb-3.5 transition-colors border border-[#C9A45C]/30">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#FFEBB0] transition-colors block">
            {st.value}
          </span>
          <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#DDB063] mt-1.5">
            {st.label}
          </h4>
          <p className="text-xs text-slate-300 mt-0.5 font-normal">
            {st.desc}
          </p>
        </div>
      );
    })}
  </div>

  {/* Ambient Decorative Accent (Right Bottom) */}
  <div className="absolute -bottom-8 right-16 text-white/20 text-5xl pointer-events-none select-none">
    ✦
  </div>
</section>

      {/* 2. Key Metrics Bar */}
     
      {/* 3. Story / Inception Section */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                alt="UPEMA Inception Meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-gradient-to-br from-[#0D3B66] to-[#071322] text-white p-5 sm:p-6 rounded-2xl shadow-xl border border-slate-700/80 max-w-[230px]">
              <span className="text-[11px] font-bold text-[#D4A359] uppercase tracking-wider block">
                Official Inception
              </span>
              <p className="text-xl sm:text-2xl font-extrabold mt-0.5">
                May 31, 2025
              </p>
              <span className="text-xs text-slate-300 block mt-0.5">
                Lucknow, Uttar Pradesh
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#1279CF] border border-blue-200 text-xs font-bold uppercase tracking-wider">
              <span>HOW IT BEGAN</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Unified Voice for UP’s <span className="text-[#1279CF]">Event Pioneers</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Prior to 2025, the experiential event and wedding industry in Uttar Pradesh was highly fragmented. Planners, sound engineers, decor fabricators, and venue owners faced uncoordinated government licensing, lack of standardized safety norms, and unstructured trade disputes.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              On <strong className="text-slate-900 font-semibold">May 31, 2025</strong>, industry leaders united in Lucknow to create the <strong className="text-[#0D3B66] font-semibold">Uttar Pradesh Event Management Association (UPEMA)</strong>—a dedicated state apex trade body built to advocate for fair policies, technical excellence, and sustainable industry growth.
            </p>

            {/* Checkpoint list with FiCheckCircle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'State-Level Recognition',
                'Certified Technical Safety',
                '25+ District Coordination',
                'Inter-City Vendor Synergy'
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <FiCheckCircle className="text-[#1279CF] w-4 h-4 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Timeline */}
      <section className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-[#F0F6FB] border-t border-blue-100/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#D4A359] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
              <span>📅</span>
              <span>MILESTONES & JOURNEY</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Key Chronological <span className="text-[#1279CF]">Milestones</span>
            </h2>

            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base">
              The transformative journey of UPEMA from inception to state-wide trade apex council.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-blue-200/80 before:hidden md:before:block">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#D5E5F2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#1279CF] text-[11px] font-bold tracking-wider uppercase">
                          {item.tag}
                        </span>
                        <span className="text-xs font-extrabold text-[#D4A359] uppercase tracking-wider">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider pt-3 border-t border-slate-100">
                        <FiMapPin className="w-3.5 h-3.5 text-[#1279CF]" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex w-10 h-10 rounded-full bg-[#0D3B66] border-4 border-white text-[#D4A359] shadow-md items-center justify-center font-bold text-xs z-10 flex-shrink-0">
                    {idx + 1}
                  </div>

                  <div className="w-full md:w-1/2 hidden md:block">
                    <div className="rounded-2xl overflow-hidden h-44 border border-slate-200 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Bottom CTA */}
      {/* <CTASection /> */}

    </div>
  );
};

export default OurHistory;