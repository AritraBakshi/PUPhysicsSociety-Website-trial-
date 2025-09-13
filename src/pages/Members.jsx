import React from 'react'

const members = [
  { id: 1, name: 'Asha Rao', role: 'President' },
  { id: 2, name: 'Daniel Kim', role: 'Secretary' }
]

export default function Members() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map(m => (
          <div key={m.id} className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-4">
            <div>
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="text-slate-600">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
