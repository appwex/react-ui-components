import React from 'react'
import './sidebarmenu.css'
import mainLogo from 'assets/svg/main-logo.svg'
import dashboard from 'assets/svg/dashboard.svg'
import trade from 'assets/svg/trade.svg'
import market from 'assets/svg/market.svg'
import history from 'assets/svg/history.svg'
import activities from 'assets/svg/activities.svg'
import messages from 'assets/svg/messages.svg'
import support from 'assets/svg/support.svg'
import logout from 'assets/svg/logout.svg'

function SidebarMenu() {
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <div className="sidebar-logo-container">
          <img
            src={mainLogo}
            alt="main logo of the website"
            className="sidebar-logo"
          />
        </div>
        <div className="main-routes">
          <div className="common-container active">
            <img
              src={dashboard}
              alt="dashboard icon"
              className="dashboard-icon"
            />
            <p className="active-text">Dashboard</p>
          </div>
          <div className="common-container">
            <img src={trade} alt="trade icon" className="trade-icon" />
            <p className="inactive-text">Trade</p>
          </div>
          <div className="common-container">
            <img src={market} alt="market icon" className="market-icon" />
            <p className="inactive-text">Market</p>
          </div>
          <div className="common-container">
            <img src={history} alt="history icon" className="history-icon" />
            <p className="inactive-text">History</p>
          </div>
          <div className="common-container">
            <img
              src={activities}
              alt="activities icon"
              className="activities-icon"
            />
            <p className="inactive-text">Dashboard</p>
          </div>
        </div>
        <div className="for-you">
          <p className="section-header-text">For you</p>
          <div className="message-container">
            <div className="common-container">
              <img
                src={messages}
                alt="messages icon"
                className="messages-icon"
              />
              <p className="inactive-text">Messsages</p>
            </div>
            <div className="message-update">
              <p>Update</p>
            </div>
          </div>
          <div className="common-container">
            <img src={support} alt="support icon" className="suport-icon" />
            <p className="inactive-text">Support</p>
          </div>
          <div className="common-container last-container">
            <img
              src={logout}
              alt="activities icon"
              className="activities-icon"
            />
            <p className="logout-text">Log Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarMenu
