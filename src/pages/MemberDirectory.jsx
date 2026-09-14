import React, { useState, useMemo, useRef } from 'react'
import DirectoryHero from '../Components/MembersComponents/DirectoryHero'
import MemberSearch from '../Components/MembersComponents/MemberSearch'
import MemberGrid from '../Components/MembersComponents/MemberGrid'
import Pagination from '../Components/MembersComponents/Pagination'
import ZonalSecretariat from '../Components/MembersComponents/ZonalSecretariat'
import GetListBanner from '../Components/MembersComponents/GetListBanner'
import DirectoryCTA from '../Components/MembersComponents/DirectoryCTA'

import { membersData } from '../data/membersData'

const ITEMS_PER_PAGE = 6

const MemberDirectory = () => {
  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedCity, setSelectedCity] = useState('All Locations')
  const [selectedVerification, setSelectedVerification] = useState('All Members')
  const [currentPage, setCurrentPage] = useState(1)

  const gridRef = useRef(null)

  // Filter Members Logic
  const filteredMembers = useMemo(() => {
    return membersData.filter((member) => {
      // 1. Search Query Match
      const search = searchTerm.toLowerCase().trim()
      const matchesSearch =
        !search ||
        member.companyName.toLowerCase().includes(search) ||
        member.founder.toLowerCase().includes(search) ||
        member.category.toLowerCase().includes(search) ||
        member.city.toLowerCase().includes(search) ||
        member.description.toLowerCase().includes(search) ||
        member.services.some((s) => s.toLowerCase().includes(search))

      // 2. Category Match
      const matchesCategory =
        selectedCategory === 'All Categories' || member.category === selectedCategory

      // 3. City Match
      const matchesCity =
        selectedCity === 'All Locations' || member.city === selectedCity

      // 4. Verification Match
      const matchesVerification =
        selectedVerification === 'All Members' ||
        (selectedVerification === 'Verified Members' && member.verified)

      return matchesSearch && matchesCategory && matchesCity && matchesVerification
    })
  }, [searchTerm, selectedCategory, selectedCity, selectedVerification])

  // Pagination Slice
  const totalItems = filteredMembers.length
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1

  const currentMembers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredMembers.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredMembers, currentPage])

  // Reset Filters Action
  const handleResetFilters = () => {
    setSearchTerm('')
    setSelectedCategory('All Categories')
    setSelectedCity('All Locations')
    setSelectedVerification('All Members')
    setCurrentPage(1)
  }

  // Handle Explore Scroll
  const handleExploreClick = () => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="w-full bg-[#F7F5F0] min-h-screen selection:bg-[#C9A45C] selection:text-[#0B1F3A]">
      {/* 1. Hero Section */}
      <DirectoryHero />

      {/* 2. Search & Filter Bar */}
      <MemberSearch
        searchTerm={searchTerm}
        setSearchTerm={(term) => {
          setSearchTerm(term)
          setCurrentPage(1)
        }}
        selectedCategory={selectedCategory}
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat)
          setCurrentPage(1)
        }}
        selectedCity={selectedCity}
        setSelectedCity={(city) => {
          setSelectedCity(city)
          setCurrentPage(1)
        }}
        selectedVerification={selectedVerification}
        setSelectedVerification={(ver) => {
          setSelectedVerification(ver)
          setCurrentPage(1)
        }}
        handleResetFilters={handleResetFilters}
      />

      {/* 3 & 4. Member Grid & Cards */}
      <div ref={gridRef}>
        <MemberGrid members={currentMembers} totalCount={totalItems} />
      </div>

      {/* 5. Pagination */}
      {totalItems > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          totalItems={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      )}

      {/* 6. Zonal Secretariat Section */}
      <ZonalSecretariat />

      {/* 7. Get Listed / Verify Business Banner */}
      <GetListBanner />

      {/* 8. Final CTA Section */}
      <DirectoryCTA onExploreClick={handleExploreClick} />
    </main>
  )
}

export default MemberDirectory
