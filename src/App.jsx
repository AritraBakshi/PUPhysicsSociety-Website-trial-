import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contents from './pages/Contents'
import Members from './pages/Members'
import Events from './pages/Events'
import Physics101 from './pages/Physics101'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/contents/physics-101" element={<Physics101 />} />
          <Route path="/members" element={<Members />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
    </div>
  )
}
