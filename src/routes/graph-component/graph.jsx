import React from 'react'
import './graph.css'

function Graph() {
  const [value, setValue] = React.useState('Quarter')

  const handleChange = event => {
    setValue(event.target.value)
  }
  return (
    <div className="main-container">
      <div className="graph-container">
        <div className="header-data">
          <div className="main-data">
            <h1>$58,092.10</h1>
            <p>
              <span>+530.21%</span> over the past quarter
            </p>
          </div>
          <div className="dropdown">
            <select value={value} onChange={handleChange}>
              <option value="quarter">Quarter</option>
              <option value="year">Year</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph
