import React from 'react'

export default function Summary() {
  return (
    <div className="summary">
      <div className="summary-row">
        <div>
          <div className="small-title">Service</div>
          <div className="small-value">some service</div>
        </div>
        <div>
          <div className="small-title">Your Referrals</div>
          <div className="small-value">0 + 0</div>
        </div>
        <div>
          <div className="small-title">Active Referrals</div>
          <div className="small-value">0 + 0</div>
        </div>
        <div>
          <div className="small-title">Total Ref. Earnings</div>
          <div className="small-value">₹0.00</div>
        </div>
      </div>
    </div>
  )
}
