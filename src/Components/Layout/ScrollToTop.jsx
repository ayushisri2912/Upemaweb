import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FiChevronUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  // 1. Automatically scroll to top on page route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  // 2. Show floating button when scrolled down > 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Smooth scroll handler for floating button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-11
            h-11
            sm:w-12
            sm:h-12
            rounded-full
            bg-[#C9A45C]
            hover:bg-[#D9B873]
            text-[#081A2B]
            border
            border-[#C9A45C]
            shadow-xl
            shadow-black/30
            hover:shadow-2xl
            hover:shadow-[#C9A45C]/30
            flex
            items-center
            justify-center
            cursor-pointer
            transition-all
            duration-300
            hover:-translate-y-1
            active:scale-95
            animate-bounce-short
          "
        >
          <FiChevronUp className="w-6 h-6 stroke-[2.5]" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
