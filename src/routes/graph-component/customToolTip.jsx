import React from 'react'
import './graph.css'

function CustomToolTip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-container">
        <p className="px-2 py-2 text-center font-bold text-white">
          ${payload[0].value}
        </p>
      </div>
    )
  }
}

export default CustomToolTip
