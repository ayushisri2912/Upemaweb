import React, { useState } from 'react'
import logoImg from '../../assets/images/logo.jpeg'

const Logo = ({ className = "" }) => {
  const [imgError, setImgError] = useState(false)

  return (
    <div className={`flex items-center gap-2 sm:gap-3.5 group cursor-pointer ${className}`}>
      {!imgError ? (
        // <div className="relative flex-shrink-0">
        //   <img
        //     src={logoImg}
        //     alt="UPEMA Logo"
        //     onError={() => setImgError(true)}
        //     className="h-11 sm:h-16 md:h-20 w-auto object-contain rounded-md shadow-sm border border-amber-200/50 group-hover:border-[#C59A4A] transition-all duration-300"
        //   />
        // </div>

        <div className="relative flex-shrink-0 flex items-center">
  <img
    src={logoImg}
    alt="UPEMA Logo"
    onError={() => setImgError(true)}
    className="h-11 sm:h-16 md:h-20 w-auto object-contain mix-blend-multiply transition-all duration-300 select-none"
  />
</div>
      ) : (
        /* Royal SVG Crest Logo Placeholder */
        <div className="relative flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#111827] rounded-lg p-1.5 sm:p-2.5 flex items-center justify-center border-2 border-[#C59A4A] shadow-md group-hover:shadow-lg transition-all duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#C59A4A] fill-current">
            {/* Outer Shield Border */}
            <path d="M50 5 L90 20 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V20 Z" fill="none" stroke="#C59A4A" strokeWidth="4" />
            {/* Inner Crown / Crest */}
            <path d="M30 35 L40 45 L50 25 L60 45 L70 35 L65 55 H35 Z" fill="#C59A4A" />
            {/* Monogram Text */}
            <text x="50" y="75" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#F8F6F1" fontFamily="sans-serif">
              UPEMA
            </text>
          </svg>
        </div>
      )}

      {/* Association Name & Tagline */}
      {/* <div className="flex flex-col">
        <h1 className="font-serif-title text-[#1F2937] font-bold text-xs sm:text-lg md:text-[22px] leading-tight tracking-tight group-hover:text-[#111827] transition-colors">
          Uttar Pradesh Event Management Association
        </h1>
        <span className="text-[#6B7280] font-sans-body text-[8px] sm:text-xs md:text-[13px] font-medium tracking-wider uppercase mt-0.5">
          Connecting <span className="text-[#C59A4A] mx-0.5 sm:mx-1">•</span> Collaborating <span className="text-[#C59A4A] mx-0.5 sm:mx-1">•</span> Growing
        </span>
      </div> */}
    </div>
  )
}

export default Logo
