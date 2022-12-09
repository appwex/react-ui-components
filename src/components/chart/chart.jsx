import './chart.css'

import { ReactComponent as CollapsedIcon } from '../../assets/svg/collapsed.svg'
import { ReactComponent as PositiveIcon } from '../../assets/svg/positive.svg'

const Chart = () => {
  return (
    <div className="chart-container">
      <div className="chart-top">
        <p>Total Balance</p>
        <span className="chart-collapsed-icon">
          <CollapsedIcon />
        </span>
      </div>
      <div className="chart-detail">
        <h1>$32,325</h1>
        <div className="chart-detail-sub">
          <span>
            <PositiveIcon />
          </span>
          <p> +15.28%</p>
          <p> | </p>
          <p> Last 30 Days</p>
        </div>
      </div>
      <div className="chart-graph-container">
        <div className="chart-line-container">
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
        <div className="graph-vertical">
          <ul className="graph-vertical-list">
            <li>40k</li>
            <li>30k</li>
            <li>20k</li>
            <li>10k</li>
            <li>0</li>
          </ul>
        </div>

        <div className="chart-body-container">
          <div className="chart-graph-body">
            <div className="chart-graph-pair">
              <span
                className="chart-body body-1"
                style={{ '--h': '142px' }}
              ></span>
              <span
                className="chart-body body-2"
                style={{ '--h': '87px' }}
              ></span>
            </div>
            <p>Jan</p>
          </div>
          <div className="chart-graph-body">
            <div className="chart-graph-pair">
              <span
                className="chart-body body-1"
                style={{ '--h': '112px' }}
              ></span>
              <span
                className="chart-body body-2"
                style={{ '--h': '120px' }}
              ></span>
            </div>
            <p>Feb</p>
          </div>
          <div className="chart-graph-body">
            <div className="chart-graph-pair">
              <span
                className="chart-body body-1"
                style={{ '--h': '124px' }}
              ></span>
              <span
                className="chart-body body-2"
                style={{ '--h': '52px' }}
              ></span>
            </div>
            <p>Mar</p>
          </div>
          <div className="chart-graph-body">
            <div className="chart-graph-pair">
              <span
                className="chart-body body-1"
                style={{ '--h': '97px' }}
              ></span>
              <span
                className="chart-body body-2"
                style={{ '--h': '16px' }}
              ></span>
            </div>
            <p>Apr</p>
          </div>
          <div className="chart-graph-body">
            <div className="chart-graph-pair">
              <span
                className="chart-body body-1"
                style={{ '--h': '104px' }}
              ></span>
              <span
                className="chart-body body-2"
                style={{ '--h': '116px' }}
              ></span>
            </div>
            <p>May</p>
          </div>
          <div className="chart-graph-body">
            <div className="chart-graph-pair">
              <span
                className="chart-body body-1"
                style={{ '--h': '200px' }}
              ></span>
              <span
                className="chart-body body-2"
                style={{ '--h': '52px' }}
              ></span>
            </div>
            <p>jun</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
