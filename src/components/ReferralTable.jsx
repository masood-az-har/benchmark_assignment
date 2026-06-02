import React, { useMemo, useState, useEffect, useRef } from 'react'

const NAMES = [
  'Aiden','Sophia','Rajesh','Mei','Carlos','Fatima','Liam','Olivia','Arjun','Hiroshi','Elena','Mohammed','Noah','Emma','Priya','Yuki','Diego','Amara','Ethan','Isabella','Sanjay','Akira','Lucia','Ahmed','Mason','Ava','Kiran','Sakura','Mateo','Zara','James','Charlotte','Ananya','Kenji','Sofia','Hassan','Benjamin','Mia','Ravi','Nina'
]

function normalize(item) {
  return {
    name:
      item.name ||
      item.fullName ||
      item.user ||
      item.username ||
      (item.firstName && String(item.firstName)) ||
      (item.user_id ? (NAMES[item.user_id - 1] || `User ${item.user_id}`) : 'Unknown'),
    service: item.service_name || item.serviceName || item.service || item.product || 'Service',
    date: item.date || item.created || item.transactionDate || '',
    profit:
      typeof item.profit === 'number'
        ? item.profit
        : Number(item.profit) || item.amount || item.commission || item.profit_amount || 0
  }
}

export default function ReferralTable({ rows = [], searchTerm = '', autoFocus = false }) {
  const [page, setPage] = useState(1)
  const tableWrapRef = useRef(null)

  useEffect(() => {
    if (autoFocus && tableWrapRef.current) {
      // focus the table wrapper so keyboard users land in the table
      tableWrapRef.current.focus()
    }
  }, [autoFocus, searchTerm])
  const perPage = 10

  const filtered = useMemo(() => {
    const q = (searchTerm || '').toLowerCase()
    const mapped = rows.map(normalize)
    return mapped.filter((r) => r.name.toLowerCase().includes(q))
  }, [rows, searchTerm])

  const total = filtered.length
  const pages = Math.max(1, Math.ceil(total / perPage))
  const pageRows = filtered.slice((page - 1) * perPage, page * perPage)

  if (page > pages) setPage(1)

  return (
    <section className="table-section">
      <h2>Referrals</h2>
      <div className="table-wrap" tabIndex={-1} ref={tableWrapRef}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {pageRows.length === 0 ? (
              <tr>
                <td colSpan={4} className="empty">
                  No matching data
                </td>
              </tr>
            ) : (
              pageRows.map((r, i) => (
                <tr key={i}>
                  <td>{r.name}</td>
                  <td>{r.service}</td>
                  <td>{r.date ? new Date(r.date).toLocaleDateString() : '-'}</td>
                  <td>{typeof r.profit === 'number' ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(r.profit) : r.profit}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Prev
        </button>
        <span>
          Page {page} of {pages}
        </span>
        <button onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={page === pages}>
          Next
        </button>
      </div>
    </section>
  )
}
