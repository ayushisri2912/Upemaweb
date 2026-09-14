
// src/Components/HomeComponents/CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi';

// Agar aapke paas local image hai toh aise import karein:
// import ctaBg from '../../assets/images/hero1.jpg';

const CTASection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-20 sm:py-24 flex items-center justify-center overflow-hidden"
      style={{
        // Parallax background image (Meeting / Blueprint / Grand Venue setup)
        backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Dark Vignette Overlay over Background Image */}
      <div className="absolute inset-0 bg-[#050B14]/65 backdrop-blur-[1px]" />

      {/* Main Floating Rounded Container (Matching DSS Style) */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#071322] via-[#0A1B30] to-[#071322] border border-slate-700/70 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-2xl shadow-black/80 overflow-hidden">
        
        {/* Top-Left Ambient Amber Glow (Matching reference image) */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#F8C54E]/20 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#1279CF]/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Heading & Subtitle */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F8C54E] mb-3">
              <span>🤝</span>
              <span>LET'S GROW TOGETHER</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.2] mb-3">
              Ready to Empower Your{' '}
              <span className="bg-gradient-to-r from-[#FFF0B3] via-[#F8C54E] to-[#E5A825] bg-clip-text text-transparent">
                Event Business?
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
              From state-level advocacy and vendor tenders to networking summits, we're here to elevate your brand with trust and credibility.
            </p>
          </div>

          {/* Right Column: Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full lg:w-auto flex-shrink-0 justify-center">
            
            {/* Primary Gold Action Button */}
            <Link
              to="/membership"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#F8C54E] to-[#E5A825] hover:from-[#fada68] hover:to-[#d89b1b] text-[#0A1B30] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary Contact Outline Button */}
            <a
              href="tel:+915222345678"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900/90 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider border border-slate-600/70 hover:border-[#F8C54E]/70 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <FiPhoneCall className="w-3.5 h-3.5 text-[#F8C54E]" />
              <span>Call +91 522 234 5678</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;

// // src/Components/HomeComponents/CTASection.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FiArrowRight, FiPhoneCall, FiCheckCircle2 } from 'react-icons/fi';

// const CTASection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-fixed py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden border-t border-slate-200"
//       style={{
//         backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1900&q=80')",
//       }}
//     >
//       {/* Blurry & Soft Dark Backdrop Overlay */}
//       <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[6px]" />

//       {/* Main Floating Dark Card */}
//       <div className="relative z-10 max-w-6xl w-full mx-auto bg-[#071322]/95 backdrop-blur-md border border-white/15 hover:border-[#D4A359]/50 rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-10 lg:p-12 shadow-2xl shadow-slate-950/80 transition-all duration-300 overflow-hidden">
        
//         {/* Corner Ambient Glows */}
//         <div className="absolute -top-16 -left-16 w-60 h-60 bg-[#D4A359]/20 rounded-full blur-[90px] pointer-events-none" />
//         <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-[#1279CF]/20 rounded-full blur-[90px] pointer-events-none" />

//         <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
//           {/* Left Column: Heading & Subtext */}
//           <div className="max-w-2xl text-center lg:text-left">
//             <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-[#D4A359]/40 text-[#D4A359] text-xs font-bold uppercase tracking-widest mb-3.5 backdrop-blur-sm">
//               <span>🤝</span>
//               <span>LET'S GROW TOGETHER</span>
//             </div>

//             <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-[1.2] mb-3">
//               Ready to Empower Your{' '}
//               <span className="bg-gradient-to-r from-[#FFF0B3] via-[#D4A359] to-[#E5A825] bg-clip-text text-transparent font-serif italic">
//                 Event Business?
//               </span>
//             </h2>

//             <p className="text-slate-300 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-4">
//               From state-level advocacy and vendor tenders to networking summits, we're here to elevate your brand with trust and credibility.
//             </p>

//             <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-300">
//               <span className="flex items-center gap-1.5">
//                 <FiCheckCircle2 className="text-[#D4A359] w-3.5 h-3.5" /> 300+ Active Members
//               </span>
//               <span className="flex items-center gap-1.5">
//                 <FiCheckCircle className="text-[#D4A359] w-3.5 h-3.5" /> 25+ Districts in UP
//               </span>
//               <span className="flex items-center gap-1.5">
//                 <FiCheckCircle className="text-[#D4A359] w-3.5 h-3.5" /> Single-Window Licensing
//               </span>
//             </div>
//           </div>

//           {/* Right Column: Action Buttons */}
//           <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full lg:w-auto flex-shrink-0 justify-center">
//             <Link
//               to="/membership"
//               className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A359] to-[#C2934A] hover:from-[#e2b56e] hover:to-[#b5833b] text-[#071322] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
//             >
//               <span>Get In Touch</span>
//               <FiArrowRight className="w-4 h-4" />
//             </Link>

//             <a
//               href="tel:+915222345678"
//               className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider border border-white/20 hover:border-[#D4A359]/70 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
//             >
//               <FiPhoneCall className="w-3.5 h-3.5 text-[#D4A359]" />
//               <span>Call +91 522 234 5678</span>
//             </a>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default CTASection;