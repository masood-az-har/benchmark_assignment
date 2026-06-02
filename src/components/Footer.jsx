import React from 'react'

const sections = [
  {
    title: 'COMPANY',
    items: ['About', 'Premium', 'Blog', 'Referral Program']
  },
  {
    title: 'HELP AND SUPPORT',
    items: ['Contact Us', 'Knowledge Center', 'Premium Support']
  },
  {
    title: 'LEARNING',
    items: ['Learn Hub', 'Tutorials', 'Communities']
  },
  {
    title: 'RESOURCES',
    items: ['Third-Party Tools', 'Illustrations', 'Stock Photos']
  },
  {
    title: 'LEGAL',
    items: ['Privacy Policy', 'Terms & Conditions', 'EULA']
  }
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {sections.map((section) => (
          <div key={section.title} className="footer-col">
            <div className="footer-title">{section.title}</div>
            {section.items.map((item) => (
              <a href="#" key={item} className="footer-link">
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-brand">Go Business</div>
        <div className="footer-copy">© 2024 Go Business, Inc. All rights reserved.</div>
        <div className="footer-socials">
          <span className="social-icon">in</span>
          <span className="social-icon">f</span>
          <span className="social-icon">ig</span>
        </div>
      </div>
    </footer>
  )
}
