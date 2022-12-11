import './anotherProfile.css'
import { ReactComponent as ProfileImg } from '../../assets/svg/profileImg.svg'
import { ReactComponent as EditIcon } from '../../assets/svg/edit-icon.svg'

const AnotherProfile = () => {
  return (
    <section className="profile">
      <div className="profileImgWrapper">
        <ProfileImg className="profileImg" />
      </div>
      <p className="profileMessage">Welcome back</p>
      <p className="profileName">Shegz</p>
      <button className="profileBtn">
        <EditIcon />
        <span> Edit profile</span>
      </button>
    </section>
  )
}

export default AnotherProfile
