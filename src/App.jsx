import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './pages/Home'
import Contents from './pages/Contents'
import Members from './pages/Members'
import Events from './pages/Events'
import Physics101 from './pages/Physics101'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('visible')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/contents" element={<Contents searchTerm={searchTerm} />} />
          <Route path="/contents/physics-101" element={<Physics101 searchTerm={searchTerm} />} />
          <Route path="/members" element={<Members searchTerm={searchTerm} />} />
          <Route path="/events" element={<Events searchTerm={searchTerm} />} />
        </Routes>
      </main>
    </div>
  )
}
