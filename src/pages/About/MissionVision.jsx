// src/pages/About/MissionVision.jsx
import React from 'react';
import { 
  FiTarget, 
  FiEye, 
  FiShield, 
  FiAward, 
  FiUsers, 
  FiCheckCircle, 
  FiTrendingUp,
  FiBookOpen
} from 'react-icons/fi';
// import CTASection from '../../Components/HomeComponents/CTASection';

const corePillars = [
  {
    icon: FiShield,
    title: 'Safety & Compliance',
    desc: 'Mandating structural rigging, electrical safety norms, and venue crowd guidelines across all 25+ districts.',
  },
  {
    icon: FiAward,
    title: 'Trade Policy Advocacy',
    desc: 'Liaising with government bodies for transparent single-window permissions and favorable industry policies.',
  },
  {
    icon: FiBookOpen,
    title: 'Skill Labs & Certifications',
    desc: 'Continuous masterclasses in acoustic engineering, lighting architecture, and modern wedding management.',
  },
  {
    icon: FiUsers,
    title: 'Vendor Trade Synergy',
    desc: 'Uniting 300+ event enterprises, rental houses, and artisans for seamless inter-city collaboration.',
  },
];

const roadmapGoals = [
  {
    year: '2026 Focus',
    title: 'Single-Window Digital Portal',
    desc: 'Streamlining multi-department municipal and police event NOC clearances through a unified state liaison desk.',
  },
  {
    year: '2027 Milestone',
    title: 'State Safety Certification Lab',
    desc: 'Accrediting stage fabricators, acoustic engineers, and technical rigging teams across North India.',
  },
  {
    year: '2028 Horizon',
    title: 'Global Wedding Tourism Destination',
    desc: 'Establishing UP’s royal heritage palaces and convention hubs as the foremost global event choice.',
  },
];

const MissionVision = () => {
  return (
    <div className="bg-slate-50 font-sans min-h-screen text-slate-900 selection:bg-[#D4A359] selection:text-white">
      
      
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
            backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1900&q=80')",
          }}
        />

        {/* Ambient Warm Golden & Blue Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#C9A45C]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#1279CF]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          {/* Top Royal Breadcrumb Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#FAF8F2] border border-[#E7E0D3] text-[#081A2B] text-xs font-bold uppercase tracking-widest mb-7 shadow-lg">
            <span className="text-[#C9A45C] text-sm">🏛️</span>
            <span className="tracking-[0.15em] text-[10px] sm:text-xs">
              UPEMA PURPOSE & STRATEGIC HORIZON
            </span>
          </div>

          {/* Full Gold Gradient Headline with Serif Italic Accent */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.18] mb-5">
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
              Our Guiding Mission &
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Vision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-slate-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed mb-12">
            Pioneering ethical business benchmarks, structural rigging safety compliance, and sustainable trade growth across Uttar Pradesh's event fraternity.
          </p>

          {/* 3 Dark Glassmorphism Rounded Cards with Gold Dot Indicator */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            
            {/* Card 1 */}
            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 hover:border-[#C9A45C] shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm shadow-amber-400/50 flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Ethical Trade Advocacy
              </span>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 hover:border-[#C9A45C] shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm shadow-amber-400/50 flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Standardized Technical Safety
              </span>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 hover:border-[#C9A45C] shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm shadow-amber-400/50 flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                300+ Connected Enterprises
              </span>
            </div>

          </div>

        </div>

        {/* Ambient Decorative Accent (Right Bottom) */}
        <div className="absolute -bottom-8 right-16 text-white/20 text-5xl pointer-events-none select-none">
          ✦
        </div>
      </section>

      {/* 2. Dual Royal Mission & Vision Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Mission Card (Royal Navy Accent) */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border-2 border-blue-100 hover:border-[#1279CF]/60 shadow-xl shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0D3B66] text-[#D4A359] flex items-center justify-center text-2xl mb-6 shadow-md group-hover:scale-105 transition-transform">
                <FiTarget />
              </div>

              <span className="text-xs font-extrabold uppercase tracking-widest text-[#1279CF] block mb-1">
                OUR CORE PURPOSE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2238] mb-4">
                The Mission of UPEMA
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                To build an ethical, technically certified, and financially resilient event trade fraternity in Uttar Pradesh through active policy advocacy, continuous skill development masterclasses, standardized safety norms, and fair vendor collaboration.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                {[
                  'Single-Window Permitting & Tax Advocacy',
                  'Standardized Rigging & Electrical Safety Protocols',
                  'Continuous Technical Masterclasses & Skill Labs'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <FiCheckCircle className="text-[#1279CF] w-4 h-4 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Card (Royal Gold Accent) */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border-2 border-amber-100 hover:border-[#C9A45C] shadow-xl shadow-amber-900/5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#C9A45C] text-[#081A2B] flex items-center justify-center text-2xl mb-6 shadow-md group-hover:scale-105 transition-transform">
                <FiEye />
              </div>

              <span className="text-xs font-extrabold uppercase tracking-widest text-[#9E7A32] block mb-1">
                THE FUTURE HORIZON
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2238] mb-4">
                Our Strategic Vision
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                To position Uttar Pradesh as India’s leading destination for royal heritage destination weddings, global corporate summits, and experiential cultural exhibitions powered by world-class local talent and transparent governance.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                {[
                  'Elevating UP as a Global Wedding & MICE Destination',
                  'Fostering 1,000+ Certified Event Enterprises by 2028',
                  'Setting Unified North-India Safety Regulations'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <FiCheckCircle className="text-[#C9A45C] w-4 h-4 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The 4 Fundamental Pillars */}
      <section className="py-16 sm:py-20 bg-[#F0F6FB] border-t border-blue-100/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
              <span>🏛️</span>
              <span>CORE VALUES</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Foundational Pillars of <span className="text-[#1279CF]">UPEMA</span>
            </h2>

            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base">
              The fundamental principles that govern every initiative and policy across Uttar Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-[#D5E5F2] hover:border-[#1279CF]/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F2] text-[#0D3B66] group-hover:bg-[#1279CF] group-hover:text-white flex items-center justify-center text-xl mb-5 transition-colors">
                      <Icon />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1279CF] transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Strategic 3-Year Roadmap */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#9E7A32] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
              <FiTrendingUp className="w-3.5 h-3.5" />
              <span>STRATEGIC HORIZON</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our 3-Year <span className="text-[#1279CF]">Development Roadmap</span>
            </h2>

            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base">
              Key institutional targets set by the UPEMA governing body.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmapGoals.map((g, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F2] rounded-2xl p-7 border border-[#E7E0D3] shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-white text-[#9E7A32] border border-[#C9A45C]/40 text-xs font-bold tracking-wider uppercase mb-3">
                  {g.year}
                </span>
                <h3 className="text-lg font-bold text-[#0D2238] mb-2">
                  {g.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Bottom CTA */}
      {/* <CTASection /> */}

    </div>
  );
};

export default MissionVision;