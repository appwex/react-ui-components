import './header.css'
import { ReactComponent as BrandLogo } from '../../assets/svg/brandLogo.svg'
import { ReactComponent as BrandLogLight } from '../../assets/svg/brandLogo-Light.svg'
import { ReactComponent as ProfilePic } from '../../assets/svg/profilePic.svg'
import { ReactComponent as Message } from '../../assets/svg/message.svg'
import { ReactComponent as MessageLight } from '../../assets/svg/messageLight.svg'
import { ReactComponent as Notification } from '../../assets/svg/notification.svg'
import { ReactComponent as NotificationLight } from '../../assets/svg/notification-Light.svg'
import { ReactComponent as SearchIcon } from '../../assets/svg/searchIcon.svg'
import Toggle from './ThemeToggle'
import { useState } from 'react'
const Header = () => {
  const menu = ['Settings', 'Notification', 'Two Factor', 'Activity Status']
  const [theme, setTheme] = useState(true)

  return (
    <div className="header  d-flex align-items-center justify-content-center">
      <nav
        className={`navbarContainer d-flex justify-content-start align-items-center ${
          theme ? null : `toggleDark`
        }`}
      >
        <div className="navbarBrand d-flex justify-content-center align-items-center">
          <a href="/">{theme ? <BrandLogo /> : <BrandLogLight />}</a>
        </div>
        <div className="navbarMenu d-flex gap-20">
          {menu.map(menuItem => (
            <div
              key={menuItem}
              className="navbarItem d-flex justify-content-center align-items-center"
            >
              <a
                style={
                  !theme
                    ? { color: '#fff', cursor: 'pointer' }
                    : { color: '#b8b3b3' }
                }
                href={`#${menuItem.replace(' ', '-')}`}
              >
                {menuItem}
              </a>
              <span className="dot" />
            </div>
          ))}
        </div>
        <div className="navbarUtil d-flex align-items-center gap-20">
          <div
            className={`navbarSearchForm d-flex ${theme ? null : `darkSearch`}`}
          >
            <SearchIcon className="navbarSearchBtn" />
            <input placeholder="Search" aria-label="Search" />
          </div>
          <hr />
          <div className="navbarIconContainer  d-flex justify-content-center align-items-center">
            <a href="w">
              {theme ? (
                <Message className="navbarIcon  d-flex justify-content-center align-items-center" />
              ) : (
                <MessageLight className="navbarIcon  d-flex justify-content-center align-items-center" />
              )}
              <span className="navbarMessageNum  d-flex justify-content-center align-items-center">
                3
              </span>
            </a>
          </div>
          <div className="navbarIconContainer d-flex justify-content-center align-items-center">
            <a href="stories/notification">
              {theme ? (
                <Notification className="navbarIcon d-flex justify-content-center align-items-center" />
              ) : (
                <NotificationLight className="navbarIcon d-flex justify-content-center align-items-center" />
              )}
              <span className="navbarNotification" />
            </a>
          </div>
          <div className="navbarIconContainer  d-flex justify-content-center align-items-center">
            <a href="ss">
              <ProfilePic className="headerProfile d-flex justify-content-center align-items-center" />
            </a>
          </div>
          <Toggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </div>
  )
}

export default Header
