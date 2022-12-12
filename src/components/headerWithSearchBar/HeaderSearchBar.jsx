import './headerSearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import arrow from '../headerWithSearchBar/arrow.svg'
import notification from '../headerWithSearchBar/Notification.svg'
import pic from '../headerWithSearchBar/prof.png'
import search from '../headerWithSearchBar/search.svg'

const HeaderSearchBar = () => {
  return (
    <div className="headerSearch-box">
      <div className="headerSearch">
        <div className="inputContainer">
          <input type="text" placeholder="Search markets" />

          <img src={search} alt="" />
        </div>
        <div className="headerNotification">
          <div className="notify">
            <img src={notification} alt="notification" />
            <span>2</span>
          </div>
          <div className="headerProfile">
            <img src={pic} alt="profile-picture" />

            <p>Oluwasegun</p>
            <img src={arrow} alt="arrow-down" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSearchBar
