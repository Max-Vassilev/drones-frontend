import React, { useEffect, useState } from "react"

export default function Contacts() {
  const [contact, setContact] = useState(null)

  useEffect(() => {
    fetch("http://127.0.0.1:5000/contacts")
      .then(res => res.json())
      .then(data => setContact(data))
  }, [])

  if (!contact) return <div className="loading-text">Loading...</div>

  return (
    <div className="about-container">
      <h2>Contact Us</h2>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Title:</strong> {contact.title}</p>
      <p><strong>Location:</strong> {contact.location}</p>
      <p>
        <strong>Phone:</strong>{" "}
        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
      </p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          {contact.github}
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          {contact.linkedin}
        </a>
      </p>
    </div>
  )
}
