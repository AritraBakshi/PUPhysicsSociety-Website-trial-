import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
    {children}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="PUPS Logo" className="h-10 w-10" />
          <span className="font-bold text-lg">Presidency University Physics Society</span>
        </div>
        <nav className="flex gap-2">
          <Link to="/">Home</Link>
          <Link to="/contents">Contents</Link>
          <Link to="/members">Members</Link>
          <Link to="/events">Events</Link>
        </nav>
      </div>
    </header>
  )
}
