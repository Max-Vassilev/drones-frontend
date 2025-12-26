import React, { useEffect, useState } from "react"

export default function About() {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    fetch("http://drones-backend-service:5001/about") // For propper K8s communication
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
