import React from 'react'
import { Link } from 'react-router-dom'

const sample = [
  { id: 'getting-started', title: 'Getting Started', excerpt: 'Intro guide for newcomers.' },
  { id: 'project-ideas', title: 'Project Ideas', excerpt: 'Curated list of project ideas.' },
  { id: 'physics-101', title: 'Physics 101', excerpt: 'Basic concepts explained with media.' }
]

// Accept searchTerm as a prop from App.jsx
export default function Contents({ searchTerm }) {
  // Filter contents using searchTerm
  const filtered = sample.filter(c =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contents</h2>
      <div className="grid gap-4">
        {filtered.map(c => (
          <div key={c.id} className="content-box animate-on-scroll bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-slate-600 mb-2">{c.excerpt}</p>
            <Link to={`/contents/${c.id}`} className="text-blue-600 hover:underline">Read more</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
