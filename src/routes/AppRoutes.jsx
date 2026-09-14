import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import OurHistory from '../pages/About/OurHistory'
import MissionVision from '../pages/About/MissionVision'
import GoverningBody from '../pages/About/GoverningBody'
import WhyBecomeMembers from '../pages/MemberShip/WhyBecomeMembers'
import ApplyForMembership from '../pages/MemberShip/ApplyForMembership'
import ExecutiveCommittee from '../pages/ExecutiveCommittee'
import MemberDirectory from '../pages/MemberDirectory'
import EventsGallery from '../pages/EventsGallery'
import NewsAnnouncements from '../pages/NewsAnnouncements'
import Contact from '../pages/Contact'
import UpcomingEvents from '../pages/Events/UpcomingEvents'
import PastEvents from '../pages/Events/PastEvents'
import PhotoGallery from '../pages/Events/PhotoGallery'
import VideoHighlights from '../pages/Events/VideoHighlights'
import Blogs from '../pages/News/Blogs'
import LatestNews from '../pages/News/LatestNews'
import Announcements from '../pages/News/Announcements'
import Circulars from '../pages/News/Circulars'
import PressReleases from '../pages/News/PressReleases'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/history" element={<OurHistory />} />
      <Route path="/about/mission-vision" element={<MissionVision />} />
      <Route path="/about/governing-body" element={<GoverningBody />} />
      <Route path="/membership" element={<WhyBecomeMembers />} />
      <Route path="/membership/why-become-member" element={<WhyBecomeMembers />} />
      <Route path="/membership/apply" element={<ApplyForMembership />} />
      <Route path="/register" element={<ApplyForMembership />} />
      <Route path="/executive-committee" element={<ExecutiveCommittee />} />
      <Route path="/member-directory" element={<MemberDirectory />} />
      <Route path="/events" element={<UpcomingEvents />} />
      <Route path="/events/upcoming" element={<UpcomingEvents />} />
      <Route path="/events/past" element={<PastEvents />} />
      <Route path="/events/gallery" element={<PhotoGallery />} />
      <Route path="/events/highlights" element={<VideoHighlights />} />
      <Route path="/events/*" element={<PhotoGallery />} />
      <Route path="/news" element={<LatestNews />} />
      <Route path="/news/blogs" element={<Blogs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/news/latest" element={<LatestNews />} />
      <Route path="/news/announcements" element={<Announcements />} />
      <Route path="/news/circulars" element={<Circulars />} />
      <Route path="/news/press-releases" element={<PressReleases />} />
      <Route path="/news/*" element={<LatestNews />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes
