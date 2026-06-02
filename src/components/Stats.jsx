import React from 'react'

const items = [
  { title: 'Total Balance', value: '₹12,345', icon: '💰' },
  { title: 'Discount %', value: '10%', icon: '🏷️' },
  { title: 'Total Referral', value: '124', icon: '🔗' },
  { title: 'Discount Amount', value: '₹1,234', icon: '💸' },
  { title: 'Commission Amount', value: '₹2,345', icon: '📈' },
  { title: 'Total Earning', value: '₹3,456', icon: '🏆' },
  { title: 'Commission Discount', value: '₹456', icon: '🔻' },
  { title: 'Total Bank Transfer', value: '₹2,000', icon: '🏦' }
]

export default function Stats() {
  return (
    <section className="stats">
      {items.map((it) => (
        <div className="card gradient" key={it.title}>
          <div className="icon">{it.icon}</div>
          <div className="body">
            <div className="title">{it.title}</div>
            <div className="value">{it.value}</div>
          </div>
        </div>
      ))}
    </section>
  )
}
