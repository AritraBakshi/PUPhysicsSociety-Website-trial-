import React from 'react'

const events = [
  { id: 1, title: 'Physics Workshop: Quantum Basics', date: '2025-10-05', description: 'Beginner friendly workshop.' },
  { id: 2, title: 'Guest Talk: General Relativity', date: '2025-11-12', description: 'Talk by Einstein.' }
]

export default function Events() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <div className="space-y-4">
        {events.map(ev => (
          <div key={ev.id} className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">{ev.title}</h3>
            <p className="text-slate-600">{ev.date}</p>
            <p className="text-slate-700">{ev.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
