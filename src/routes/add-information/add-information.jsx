import './add-information.css'
import { useState } from 'react'
import { ReactComponent as TickIcon } from '../../assets/svg/tick-icon.svg'
import { ReactComponent as ProfileIcon } from '../../assets/svg/profile-icon.svg'

const AddImformation = () => {
  const [dark, toggleMode] = useState(false)

  return (
    <section>
      <div
        className={`informationCard ${
          dark ? 'cardDarkMode' : 'cardLightMode'
        } `}
      >
        <div className="informationStageWrapper ">
          <div className="imformationIconWrapper">
            <TickIcon className="tickIcon" />
          </div>
          <p className="informationStage">Personal Information</p>
        </div>
        <div className="informationVerticalLine"></div>
        <div className="informationStageWrapper ">
          <div className="imformationIconWrapper">
            <TickIcon className="tickIcon " />
          </div>
          <p className="informationStage">Credit card(s)</p>
        </div>
        <div className="informationVerticalLine"></div>
        <div className="informationStageWrapper">
          <div className="imformationIconWrapper">
            <ProfileIcon className="profileIcon" />
          </div>
          <p className="informationStage toAdd">Identity verification</p>
          <span className="informationToAdd">
            Upload photos of different important documents to verify your
            identity
          </span>
        </div>
      </div>
      {/* light/dark mode toggler */}
      <div
        className={`toggle ${dark ? 'whiteBg' : 'darkBg'}`}
        onClick={() => toggleMode(!dark)}
      >
        <span className={`${dark ? 'slide' : ''}`} />
      </div>
    </section>
  )
}

export default AddImformation
