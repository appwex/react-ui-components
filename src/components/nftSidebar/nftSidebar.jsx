import { ReactComponent as Portfolio } from '../../assets/svg/portfolio.svg'
import { ReactComponent as NFTDashboard } from '../../assets/svg/nftDashboard.svg'
import { ReactComponent as Wallet } from '../../assets/svg/wallet.svg'
import { ReactComponent as NFTMarket } from '../../assets/svg/nftMarket.svg'
import { ReactComponent as ActiveBids } from '../../assets/svg/activeBids.svg'
import { ReactComponent as Favourites } from '../../assets/svg/favourites.svg'
import { ReactComponent as History } from '../../assets/svg/nftHistory.svg'
import { ReactComponent as Setting } from '../../assets/svg/setting.svg'
import { ReactComponent as THSTORE } from '../../assets/svg/thstore.svg'
import { ReactComponent as Logout } from '../../assets/svg/nftLogout.svg'

import './nftSidebar.css'
import { useState } from 'react'

const NFTSidebar = () => {
  const dashboardMenu1 = [
    {
      menu: 'Active Bids',
      icon: <ActiveBids />,
    },
    {
      menu: 'Market',
      icon: <NFTMarket />,
    },
    {
      menu: 'Favourites',
      icon: <Favourites />,
    },
  ]
  const dashboardMenu2 = [
    {
      menu: 'My Portfolio',
      icon: <Portfolio />,
    },
    {
      menu: 'History',
      icon: <History />,
      notifification: 8,
    },
    {
      menu: 'Wallet',
      icon: <Wallet />,
    },
    {
      menu: 'Setting',
      icon: <Setting />,
    },
  ]

  const [darkMode, setDarkMode] = useState(false)

  const toggleMode = () => setDarkMode(!darkMode)
  return (
    <div className="flex">
      <div className={`nftDashBoardContainer ${darkMode ? 'nftDarkMode' : ''}`}>
        <div className="nftDashboardHeader flex">
          <THSTORE />
          <p>THSTORE</p>
        </div>

        <div className="nftDashboardMenuContainer">
          <div className="flex nftDashboardText">
            <NFTDashboard />
            <p>Dashboard</p>
          </div>
          {dashboardMenu1.map((item, index) => (
            <div className="flex nftDashboardMenu" key={index}>
              {item.icon}
              <p>{item.menu}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="nftDashboardMenuContainer">
          {dashboardMenu2.map((item, index) => (
            <div className="flex nftDashboardMenu" key={index}>
              {item.icon}
              <p>{item.menu}</p>
              {item.notifification ? (
                <span
                  className={`nftDashboardNotification  ${
                    darkMode ? 'nftDarkMode' : ''
                  }`}
                >
                  {item.notifification}
                </span>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>

        <div className="flex nftDashboardMenu nftDashboardLogout">
          <Logout />
          <p>Logout</p>
        </div>
      </div>
      <button
        onClick={toggleMode}
        className={`toggleModeButton ${darkMode ? 'nftDarkMode' : ''}`}
      >
        <span />
      </button>
    </div>
  )
}

export default NFTSidebar
