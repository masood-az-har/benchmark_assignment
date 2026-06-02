import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Stats from '../components/Stats'
import Summary from '../components/Summary'
import Referral from '../components/Referral'
import ReferralTable from '../components/ReferralTable'

const DATA_URL = 'https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/d4457a9c-6134-46a5-b31c-60ad13a3e2f6_userData.json'

export default function Home() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(DATA_URL)
      .then((r) => r.json())
      .then((json) => setData(json || []))
      .catch(() => setData([]))
  }, [])

  const params = new URLSearchParams(location.search)
  const q = params.get('q') || ''

  useEffect(() => {
    setQuery(q)
  }, [q])

  const handleSearch = (value) => {
    setQuery(value)
    navigate(`/?q=${encodeURIComponent(value)}`)
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Referral Dashboard</h1>
          <div className="page-subheading">Welcome back, Admin</div>
        </div>
        <div className="header-right">
          <button className="notify" type="button">🔔</button>
          <div className="user-card">
            <div className="avatar">JD</div>
            <div>
              <div className="user-name">Name</div>
              <div className="user-role">Admin</div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-search-row">
        <div className="page-search">
          <input
            placeholder="Search here..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={() => handleSearch(query)}>Search</button>
        </div>
      </div>

      <Stats />
      <Summary />

      <div className="top-row">
        <Referral />
      </div>

      <ReferralTable rows={data} searchTerm={q} autoFocus={q.length > 0} />
    </>
  )
}
