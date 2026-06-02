import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Header({ onSearch = () => {} }) {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  function onSubmit(e) {
    e.preventDefault()
    navigate(`/?q=${encodeURIComponent(q)}`)
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo"><span>Go</span> Business</div>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About Us
          </NavLink>
          <NavLink to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>
            Courses
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </nav>

        <div className="cta">
          <button className="try">Try for free</button>
        </div>
      </div>
    </header>
  )
}
