import React from 'react'

export default function Referral() {
  const link = 'https://example.com/ref/johndoe'
  const code = 'REF-JD-2026'

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('Copied!')
    } catch (e) {
      alert('Copy failed')
    }
  }

  return (
    <div className="referral">
      <div className="ref-box">
        <h3>Your Referral Link</h3>
        <div className="ref-row">
          <input readOnly value={link} />
          <button onClick={() => copy(link)}>Copy</button>
        </div>
      </div>
      <div className="ref-box">
        <h3>Your Referral Code</h3>
        <div className="ref-row">
          <input readOnly value={code} />
          <button onClick={() => copy(code)}>Copy</button>
        </div>
      </div>
    </div>
  )
}
