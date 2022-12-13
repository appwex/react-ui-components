import React, { useState } from 'react'
import './headerSearchBar.css'

import { ReactComponent as Arrow } from '../headerWithSearchBar/arrow.svg'
import { ReactComponent as Notification } from '../headerWithSearchBar/Notification.svg'
import Profile from '../headerWithSearchBar/prof.png'
import { ReactComponent as Search } from '../headerWithSearchBar/search.svg'

const HeaderSearchBar = () => {
  const [darkMode, setdarkMode] = useState(false)
  return (
    <div className="headerSearch-box">
      <div className={`darkModes ${darkMode ? 'whiteBg' : 'darkBg'}`}>
        <span
          className={`${darkMode ? 'slides' : ''}`}
          onClick={() => setdarkMode(!darkMode)}
        />
      </div>
      <div
        className={` ${
          darkMode ? 'headerSearch whiteBg' : ' darkheader darkBg'
        }`}
      >
        <div className="inputContainer">
          <input type="text" placeholder="Search markets" />
          <Search className="search" />
        </div>
        <div className="headerNotification">
          <div className="notify">
            <Notification
              className={`cursor ${darkMode ? 'fills' : 'dkFills'}`}
            />
            <span>2</span>
          </div>
          <div className={`headerProfile  ${darkMode ? 'fills ' : 'dkFills'}`}>
            <img src={Profile} alt="" />
            <p className={`text ${darkMode ? 'dark' : 'white'}`}>Olusegun</p>
            <Arrow className="cursor" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSearchBar
