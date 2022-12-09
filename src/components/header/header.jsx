import './header.css'
import { ReactComponent as BrandLogo } from 'assets/svg/brandLogo.svg'
import { ReactComponent as ProfilePic } from 'assets/svg/profilePic.svg'
import { ReactComponent as Message } from 'assets/svg/message.svg'
import { ReactComponent as Notification } from 'assets/svg/notification.svg'
import { ReactComponent as SearchIcon } from 'assets/svg/searchIcon.svg'

const Header = () => {
  const menu = ['Settings', 'Notification', 'Two Factor', 'Activity Status']
  return (
    <div className="header  d-flex align-items-center justify-content-center">
      <nav className="navbarContainer d-flex justify-content-start align-items-center">
        <div className="navbarBrand d-flex justify-content-center align-items-center">
          <a href="/">
            <BrandLogo />
          </a>
        </div>
        <div className="navbarMenu d-flex gap-20">
          {menu.map(menuItem => (
            <div
              key={menuItem}
              className="navbarItem d-flex justify-content-center align-items-center"
            >
              <a href={`#${menuItem.replace(' ', '-')}`}>{menuItem}</a>
              <span className="dot" />
            </div>
          ))}
        </div>
        <div className="navbarUtil d-flex align-items-center gap-20">
          <div className="navbarSearchForm d-flex">
            <SearchIcon className="navbarSearchBtn" />
            <input placeholder="Search" aria-label="Search" />
          </div>
          <hr />
          <div className="navbarIconContainer  d-flex justify-content-center align-items-center">
            <a href="w">
              <Message className="navbarIcon  d-flex justify-content-center align-items-center" />
              <span className="navbarMessageNum  d-flex justify-content-center align-items-center">
                3
              </span>
            </a>
          </div>
          <div className="navbarIconContainer d-flex justify-content-center align-items-center">
            <a href="stories/notification">
              <Notification className="navbarIcon d-flex justify-content-center align-items-center" />
              <span className="navbarNotification" />
            </a>
          </div>
          <div className="navbarIconContainer  d-flex justify-content-center align-items-center">
            <a href="ss">
              <ProfilePic className="profile d-flex justify-content-center align-items-center" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
