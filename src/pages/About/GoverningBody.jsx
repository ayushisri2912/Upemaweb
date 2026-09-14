// src/pages/About/GoverningBody.jsx
import React, { useState } from 'react';
import { 
  FiShield, 
  FiAward, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiCheckCircle, 
  FiBookOpen,
  FiFileText,
  FiUsers
} from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa6';
// import CTASection from '../../Components/HomeComponents/CTASection';

// Core Apex Office Bearers
const apexCouncil = [
  {
    name: 'Shri Rajeshwar Singh',
    role: 'State President',
    designation: 'Founder & CMD, Royal Grandeur Events',
    tenure: '2025 – 2027',
    city: 'Lucknow Central',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    email: 'president@upema.in',
    phone: '+91 522 234 5678',
    responsibilities: ['State Government Liaison', 'Policy Implementation', 'Fraternity Advocacy'],
  },
  {
    name: 'Vikramaditya Khanna',
    role: 'Senior Vice President',
    designation: 'Managing Director, Aura Stagecraft & Lighting',
    tenure: '2025 – 2027',
    city: 'Noida / NCR',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    email: 'vp.ncr@upema.in',
    phone: '+91 120 456 7890',
    responsibilities: ['Technical Norms & Safety', 'Vendor Standard Benchmarks', 'NCR Chapter Operations'],
  },
  {
    name: 'Ananya Deshmukh',
    role: 'General Secretary',
    designation: 'Principal Planner, Vivaha Luxury Weddings',
    tenure: '2025 – 2027',
    city: 'Varanasi',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    email: 'gensec@upema.in',
    phone: '+91 542 278 1234',
    responsibilities: ['Administration & Secretariat', 'Membership Accreditation', 'National Conclaves'],
  },
  {
    name: 'Amitabh Mehrotra',
    role: 'Treasurer & Finance Head',
    designation: 'Director, Zenith Audio & Acoustic Lab',
    tenure: '2025 – 2027',
    city: 'Kanpur / Lucknow',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    email: 'treasurer@upema.in',
    phone: '+91 522 234 5679',
    responsibilities: ['Financial Audit & Budgeting', 'Tax Law Advisory', 'Dispute Settlement Desk'],
  },
];

// Zonal & Advisory Members
const zonalAdvisors = [
  { name: 'Er. Alok Srivastava', zone: 'Awadh & Central UP', portfolio: 'High-Voltage Rigging Safety' },
  { name: 'Pooja Tandon', zone: 'West UP & Braj', portfolio: 'Destination Wedding Promotion' },
  { name: 'Sanjay Aggarwal', zone: 'Purvanchal & Kashi', portfolio: 'Artisans & Fabricator Welfare' },
  { name: 'Gaurav Singhal', zone: 'Rohilkhand Chapter', portfolio: 'Single-Window Clearance Desk' },
];

const governanceCommittees = [
  {
    icon: FiShield,
    title: 'Safety & Technical Audit Committee',
    desc: 'Conducts mandatory audits on trusses, fire-retardant fabrics, acoustics, and crowd safety standards.',
  },
  {
    icon: FiBookOpen,
    title: 'Legal & Dispute Settlement Cell',
    desc: 'Provides certified arbitration between clients, venues, and vendors to ensure ethical contracts.',
  },
  {
    icon: FiFileText,
    title: 'Government Liaison & Policy Desk',
    desc: 'Works directly with UP Tourism and district authorities for unified single-window event permissions.',
  },
  {
    icon: FiAward,
    title: 'Skill Development & Accreditation',
    desc: 'Certifies professional wedding managers, sound acoustic engineers, and technical stage operators.',
  },
];

const GoverningBody = () => {
  const [selectedZone, setSelectedZone] = useState('All');

  return (
    <div className="bg-slate-50 font-sans min-h-screen text-slate-900 selection:bg-[#D4A359] selection:text-white">
      
      {/* 1. Dark Theme Hero Banner */}
      {/* <section 
        className="relative bg-[#071322] border-b border-white/5 pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #0B2542 0%, #071322 70%)',
        }}
      >
        <div 
          className="absolute inset-0 opacity-[0.025] bg-cover bg-center pointer-events-none mix-blend-luminosity scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1900&q=80')"
          }}
        />

        <div className="absolute -top-10 right-1/4 w-[450px] h-[450px] bg-[#C9A45C]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-10 left-1/4 w-[450px] h-[450px] bg-[#1279CF]/12 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#172333] border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8 shadow-inner">
            <span className="text-[#C9A45C]">🏛️</span>
            <span>LEADERSHIP & STATE GOVERNANCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            The <span className="bg-gradient-to-r from-[#FFF0B3] via-[#C9A45C] to-[#C2934A] bg-clip-text text-transparent">Governing Body</span> <br className="hidden sm:block" /> of{' '}
            <span className="font-serif italic text-white font-bold pr-1">
              UPEMA
            </span>
          </h1>

          <p className="mt-4 text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Meet the elected office bearers, technical advisors, and administrative pioneers committed to transparent governance, safety benchmarks, and trade advocacy across Uttar Pradesh.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#172333]/70 backdrop-blur-sm border-t border-b border-white/10 text-white shadow-[0_2px_15px_rgba(0,0,0,0.4)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1279CF]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Democratic Biennial Elections</span>
            </div>
            
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#172333]/70 backdrop-blur-sm border-t border-b border-amber-500/30 text-white shadow-[0_2px_15px_rgba(0,0,0,0.4)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9A45C]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Statutory Board of Directors</span>
            </div>

            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#172333]/70 backdrop-blur-sm border-t border-b border-emerald-500/30 text-white shadow-[0_2px_15px_rgba(0,0,0,0.4)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">25+ District Representation</span>
            </div>
          </div>
        </div>
      </section> */}
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

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
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
              Governing Body &
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Leadership Council
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-slate-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed mb-12">
            Committed to transparent governance, skill development, and fostering an ethical, safety-compliant event management fraternity across Uttar Pradesh.
          </p>

          {/* 3 Dark Glassmorphism Rounded Cards with Gold Dot Indicator */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            
            {/* Card 1 */}
            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 hover:border-[#C9A45C] shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm shadow-amber-400/50 flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Statutory Board of Directors
              </span>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 hover:border-[#C9A45C] shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm shadow-amber-400/50 flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Zonal & Advisory Committees
              </span>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 hover:border-[#C9A45C] shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm shadow-amber-400/50 flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Democratic Biennial Elections
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Ambient Star/Glow Accent (Right Bottom) */}
        <div className="absolute -bottom-8 right-16 text-white/20 text-5xl pointer-events-none select-none">
          ✦
        </div>
      </section>

      {/* 2. Core Apex Office Bearers Cards */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
              <FiShield className="w-3.5 h-3.5" />
              <span>APEX LEADERSHIP COUNCIL</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Elected State <span className="text-[#1279CF]">Office Bearers</span>
            </h2>

            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base">
              Authorized representatives leading policy dialogues, technical compliance, and state-wide member welfare.
            </p>
          </div>

          {/* Grid of 4 Apex Leaders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {apexCouncil.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#E7E0D3] shadow-md hover:shadow-2xl hover:border-[#C9A45C] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/90 via-transparent to-transparent" />
                    
                    {/* Role Pill */}
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#0D3B66]/90 text-[#D4A359] text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-[#D4A359]/30">
                      {leader.role}
                    </span>

                    {/* City Location */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 text-white flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 font-medium text-slate-300">
                        <FiMapPin className="text-[#D4A359]" /> {leader.city}
                      </span>
                      <span className="text-[10px] font-bold text-[#D4A359] bg-white/10 px-2 py-0.5 rounded">
                        {leader.tenure}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold text-[#0D2238] group-hover:text-[#1279CF] transition-colors leading-snug">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 line-clamp-1">
                      {leader.designation}
                    </p>

                    {/* Key Portfolios */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E7A32] block mb-1">
                        Core Portfolios:
                      </span>
                      {leader.responsibilities.map((r, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-normal">
                          <FiCheckCircle className="text-[#1279CF] w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Contact Footer */}
                <div className="px-5 py-3 bg-[#FAF8F2] border-t border-[#E7E0D3] flex items-center justify-between text-xs text-slate-600">
                  <a
                    href={`mailto:${leader.email}`}
                    className="hover:text-[#1279CF] flex items-center gap-1 font-medium transition-colors"
                  >
                    <FiMail className="text-[#9E7A32]" />
                    <span className="truncate max-w-[130px]">{leader.email}</span>
                  </a>
                  <a
                    href={`tel:${leader.phone}`}
                    className="w-7 h-7 rounded-full bg-white border border-slate-200 text-[#0D2238] hover:bg-[#0D2238] hover:text-[#D4A359] flex items-center justify-center transition-colors"
                    title={leader.phone}
                  >
                    <FiPhone className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Governance Committees Section */}
      <section className="py-16 sm:py-20 bg-[#F0F6FB] border-t border-blue-100/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#9E7A32] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
              <FiAward className="w-3.5 h-3.5" />
              <span>SPECIALIZED PORTFOLIOS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Constitutional <span className="text-[#1279CF]">Sub-Committees</span>
            </h2>

            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base">
              Dedicated advisory wings ensuring technical rigor, dispute neutrality, and policy accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceCommittees.map((com, idx) => {
              const Icon = com.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-[#D5E5F2] hover:border-[#1279CF]/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F2] text-[#0D3B66] flex items-center justify-center text-xl mb-5 shadow-sm">
                    <Icon />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {com.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {com.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Zonal Directors & District Advisory Council */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3">
              <FiUsers className="w-3.5 h-3.5" />
              <span>REGIONAL SECRETARIATS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Zonal Directors & <span className="text-[#1279CF]">District Nominees</span>
            </h2>

            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base">
              Empowering grassroots vendors, wedding decorators, and technical crews across major UP zones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {zonalAdvisors.map((z, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F2] p-6 rounded-2xl border border-[#E7E0D3] shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#0D2238] text-[#D4A359] font-bold flex items-center justify-center text-sm mb-3">
                  {z.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <h4 className="text-base font-bold text-[#0D2238]">
                  {z.name}
                </h4>
                <span className="text-xs font-bold text-[#1279CF] uppercase tracking-wider block mt-1">
                  {z.zone}
                </span>
                <p className="text-xs text-slate-600 mt-2 pt-2 border-t border-slate-200">
                  {z.portfolio}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Constitution Transparency Callout */}
      <section className="bg-[#0D2238] text-white py-12 border-y border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4A359] block mb-1">
              DEMOCRACY & ETHICS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Official Constitution & Code of Ethics
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl font-light">
              All members and office bearers adhere strictly to the bylaws registered under the Uttar Pradesh Societies Registration Act.
            </p>
          </div>

          <a
            href="/membership"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4A359] to-[#C2934A] hover:from-[#e2b56e] hover:to-[#b5833b] text-[#071322] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Apply For Committee</span>
          </a>
        </div>
      </section>

      {/* 6. Bottom CTA Section */}
      {/* <CTASection /> */}

    </div>
  );
};

export default GoverningBody;