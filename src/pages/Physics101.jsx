import React from 'react'

export default function Physics101() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Physics 101</h2>
      <p className="mb-4 text-slate-700">
        Welcome to Physics 101! This section introduces some of the most fundamental
        concepts in physics, including motion, forces, and energy.
      </p>

      <img
        src="https://via.placeholder.com/800x400.png?text=Physics+Image"
        alt="Physics illustration"
        className="rounded-xl shadow mb-6"
      />

      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-xl shadow"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}
