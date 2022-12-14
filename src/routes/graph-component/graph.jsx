import React from 'react'
import './graph.css'
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts'

import CustomToolTip from './customToolTip'

function Graph() {
  const [value, setValue] = React.useState('Quarter')

  const data = [
    {
      name: 'Jan',
      uv: 12000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 30000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 40000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 27800,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 18900,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 23900,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 34900,
      pv: 4300,
      amt: 2100,
    },
  ]

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
        <div className="graph">
          <ResponsiveContainer width="94%" aspect={3}>
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2C10D7" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#2C10D7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                axisLine={false}
                fontWeight="bold"
                fontFamily="Mulish"
              />
              <YAxis axisLine={false} fontWeight="bold" fontFamily="Mulish" />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <Tooltip
                content={<CustomToolTip />}
                wrapperStyle={{ outline: 'none' }}
                cursor={false}
              />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#2C10D7"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Graph
