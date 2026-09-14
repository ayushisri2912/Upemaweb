import React from 'react'
import Navbar from './Components/Layout/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './Components/Layout/Footer'
import ScrollToTop from './Components/Layout/ScrollToTop'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />  
    </>
  )
}

export default App
