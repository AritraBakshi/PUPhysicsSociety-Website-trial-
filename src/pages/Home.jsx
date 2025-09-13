import React from 'react'

export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-3">Welcome to Presidency University Physics Society</h2>
          <p className="text-slate-600 mb-4">
            We run workshops, publish guides, and host events for learners and builders in physics.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Latest Highlight</h3>
          <p className="text-slate-600">Our new Physics 101 guide with video content is live now!</p>
        </div>
      </div>
    </section>
  )
}
