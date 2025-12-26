import React, { useEffect, useState } from "react"

export default function About() {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    fetch("http://127.0.0.1:5000/about")
      .then(res => res.json())
      .then(data => setAbout(data))
  }, [])

  if (!about) return <div className="loading-text">Loading...</div>

  return (
    <div className="about-container">
      <h2>{about.title}</h2>
      <p style={{ whiteSpace: "pre-line" }}>{about.description}</p>
    </div>
  )
}
